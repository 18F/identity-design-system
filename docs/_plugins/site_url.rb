Jekyll::Hooks.register :site, :after_init do |site|
  if ENV['PREVIEW_URL']
    site.config['url'] = ENV['PREVIEW_URL']
  elsif ENV['JEKYLL_ENV'] != 'production'
    site.config['url'] = "http://localhost:#{site.config['port']}"
  end
end
