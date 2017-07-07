var childProcess = require('child_process');
var fs = require('fs');
var path = require('path');

var prompt = require('prompt');

var p = require('../package.json');

var args = Array.prototype.slice.call(process.argv);

var rootPath = path.resolve(__dirname, '..');

function exec(cmd, opts) {
  opts = opts || {};
  return new Promise(function(resolve, reject) {
    childProcess.exec(cmd, opts, function (error, stdout) {
      if (error) reject(error);
      resolve(stdout);
    });
  });
}

function promptForValues(values) {
  return new Promise(function(resolve, reject) {
    prompt.get(values, function (err, result) {
      if (err) reject(err);
      resolve(result);
    });
  });
}

function updatePackageJson(updates) {
  return Object.assign({}, p, updates);
}

function writePackageJson(package) {
  var packagePath = path.resolve(rootPath, 'package.json');
  var content = JSON.stringify(package, null, '  ');
  console.log('Updating package.json with version number');
  console.log(`\tat ${packagePath}`);
  fs.writeFileSync(packagePath, `${content}\n`);
}

function checkoutJSReleaseBranch(release) {
  console.log(`Checking out a new branch (${release.branch}) for the JS release`);
  return exec(`cd ${rootPath}`).then(function() {
    return exec('git checkout master');
  }).then(function(){
    return exec(`git checkout -b ${release.branch}`);
  });
}

function commitNewPackageJson(release) {
  console.log('Commiting package.json with new version number');
  return exec(`git add package.json`).then(function() {
    return exec(`git commit -m "Updating package.json version to ${release.version}"`);
  });
}

function tagAndPushNewPackageJson(release) {
  console.log('Tagging release branch and pushing to Github');
  var tag = `git tag -a ${release.version} -m 'v${release.version} - ${release.description}'`;
  var pushBranch = `git push origin ${release.branch}`;
  var pushTag = `git push origin ${release.version}`;

  return exec(tag).then(function() {
    return exec(pushBranch);
  }).then(function() {
    return exec(pushTag);
  });
}

prompt.message = '';

var values = {
  properties: {
    version: {
      description: `New version number to release (current is ${p.version})`,
      type: 'string',
      required: true
    },
    description: {
      description: 'Main idea behind release',
      type: 'string',
      required: true
    }
  }
};

promptForValues(values)
.then(function(results) {
  var release = Object.assign({ branch: `release-${results.version}` }, results);
  console.log('release', release);
  console.log(`Preparing to release version ${release.version}`)
  return release;
})
.then(function(release) {
  var packageJson = updatePackageJson({ version: release.version });
  console.log('First we\'ll publish a release to the npm registry');

  return checkoutJSReleaseBranch(release)
    .then(function() {
      writePackageJson(packageJson);
      return commitNewPackageJson(release)
    })
    .then(function() {
      return tagAndPushNewPackageJson(release);
    })
    .then(function() {
      return release;
    });
  return release;
})
.then(function(release) {
  return release;
})
.catch(function(err) {
  console.error('err happened', err);
})
