FEDERALIST_URL_BASE = 'https://federalist-proxy.app.cloud.gov/site'
FEDERALIST_PREVIEW_BRANCH_PREFIX = '/preview/'

Jekyll::Hooks.register :site, :after_init do |site|
  if ENV['BRANCH'].nil?
    site.config['url'] = "http://localhost:#{site.config['port']}"
  elsif ENV['BASEURL']&.start_with?(FEDERALIST_PREVIEW_BRANCH_PREFIX)
    site.config['url'] = "#{FEDERALIST_URL_BASE}/#{ENV['OWNER']}/#{ENV['REPOSITORY']}"
  end
end
