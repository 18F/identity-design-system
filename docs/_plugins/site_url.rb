CLOUD_GOV_PAGES_PREVIEW_BRANCH_PREFIX = '/preview/'

Jekyll::Hooks.register :site, :after_init do |site|
  if ENV['BRANCH'].nil? && ENV['JEKYLL_ENV'] != 'production'
    site.config['url'] = "http://localhost:#{site.config['port']}"
  elsif ENV['BASEURL']&.start_with?(CLOUD_GOV_PAGES_PREVIEW_BRANCH_PREFIX)
    # We don't have enough information to reconstruct the URL for the preview site. Setting to `nil`
    # at least allows redirects to work correctly. Sitemap URLs will be invalid, but since preview
    # sites aren't intended to be indexed, this is tolerable.
    site.config['url'] = nil
  end
end
