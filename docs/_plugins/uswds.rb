require 'uri'

module USWDS

  # Return true if a == b, false otherwise:
  #
  # {% assign x = a | eq: b %}
  #
  # This is much shorter than:
  #
  # {% assign x = false %}
  # {% if a == b %}{% assign x = true %}{% endif %}
  def eq(a, b)
    a == b
  end

  # Output the value if the page passed is the current page being rendered:
  #
  # {{ 'thing' | if_is_current_page: page_variable }}
  # {{ 'thing' | if_is_current_page: page_variable, true }}
  def if_is_current_page(value, page, current_if_in_collection)
    current_page = @context['page']

    if current_page['url'] == page['url']
      value
    elsif current_if_in_collection && !current_page['collection'].nil? && current_page['collection'] == page['collection']
      value
    end
  end

  # Check if a string starts with another string:
  #
  # {{ '#link-to-anchor' | starts_with: '#' }}
  def starts_with(value, string)
    value.start_with?(string)
  end

  # Resolve a permalink URI into a page or collection document:
  #
  # {{ '/' | resolve_permalink %} => home page
  # {{ '/components/foo/' | resolve_permalink %} => from a collection
  def resolve_permalink(href)
    site = @context.registers[:site]
    page = _resolve_from(href, site.pages)
    if page
      return page
    end
    found = nil
    site.collections.each do |name, collection|
      found = _resolve_from(href, collection.docs)
      break if found
    end
    found
  end

  private

  def _resolve_from(href, pages)
    pages
      .select { |page| page.url == href }
      .first
  end
end

Liquid::Template.register_filter(USWDS)
