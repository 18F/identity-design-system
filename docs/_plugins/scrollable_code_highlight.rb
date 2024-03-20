module Kramdown
  module Converter
    class Html < Base
      prepend(Module.new do
        def convert_codeblock(...)
          super(...).sub('<pre ', '<pre tabindex="0" ')
        end
      end)
    end
  end
end
