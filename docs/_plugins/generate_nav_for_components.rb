require 'json'

Jekyll::Hooks.register :site, :post_read do |site|
  site.collections.each do |name, collection|
    site.data['nav'][name] = collection.docs.map do |doc|
      { 'href' => doc.url }
    end
  end
end
