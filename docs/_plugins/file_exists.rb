module Jekyll
  class IfFileExistsTagBlock < Liquid::Block
    def render(context)
      file = context[@markup.strip]
      if File.exist?(file)
        super
      else
        ''
      end
    end
  end
end

Liquid::Template.register_tag('if_file_exists', Jekyll::IfFileExistsTagBlock)
