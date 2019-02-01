require 'json'

Jekyll::Hooks.register :site, :after_init do |site|
  package_json = JSON.parse(File.read('package.json'))
  package_lock_json = JSON.parse(File.read('package-lock.json'))

  versions = package_lock_json['dependencies'].map do |name, details|
    ["#{name}_version", details['version']]
  end.to_h

  versions['this_version'] = package_json['version']

  site.config['package_json'] = versions
end
