require 'json'

Jekyll::Hooks.register :site, :post_read do |site|
  site.collections.each do |name, collection|
    site.data['nav'] = collection.docs.
      filter { |doc| doc.basename != 'index.md'}.
      map { |doc| { 'href' => doc.url } }
  end
end
