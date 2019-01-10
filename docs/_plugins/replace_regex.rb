module Jekyll
  module RegexFilter
    def replace_regex(input, regexp, replace_with)
      input.gsub(Regexp.new(regexp), replace_with)
    end
  end
end

Liquid::Template.register_filter(Jekyll::RegexFilter)
