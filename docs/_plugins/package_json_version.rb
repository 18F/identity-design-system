require 'json'

Jekyll::Hooks.register :site, :after_init do |site|
  site.config['version'] = JSON.parse(File.read('package.json'))['version']
end
