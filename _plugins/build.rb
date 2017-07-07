if ENV['BRANCH']
  puts '[build.rb] building for federalist'
  `cp -r ./docs/build/* ./`
end