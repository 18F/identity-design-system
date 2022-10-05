RUNNING_IN_MAKE = !!ENV['MAKEFLAGS'].freeze
IS_CLOUD_GOV_PAGES_BUILD = !!ENV['SITE_PREFIX'].freeze

Jekyll::Hooks.register :site, :after_init do |site|
  if !RUNNING_IN_MAKE && !IS_CLOUD_GOV_PAGES_BUILD
    warn <<~MSG

      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

      Assets are compiled in a separate process, independent of Jekyll. To build
      both the assets and the site, use `npm start` or `npm run build` instead.

      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    MSG
  end
end
