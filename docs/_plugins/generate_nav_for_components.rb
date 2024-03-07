require 'json'

Jekyll::Hooks.register :site, :post_read do |site|
  site.data['nav'] = site.collections['components'].docs.
    filter { |doc| doc.basename != 'index.md'}.
    map { |doc| { 'href' => doc.url } }
end
