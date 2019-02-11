---
permalink: /usage/
title: Usage
lead: >
  Install images, stylesheets, and script files in both their original and compiled forms with npm.
---

```shell
npm install identity-style-guide
```

If this is your first npm dependency, a `package-lock.json` file will be generated. Commit this file to source control.

The module is now installed at `./node_modules/identity-style-guide`. Woohoo!

# Precompiled CSS, JavaScript, fonts, and images

You’ll find the compiled assets in `dist/assets`. These are ready to be used in your project directly.

<div class="usa-alert usa-alert-warning usa-alert-paragraph">
  <div class="usa-alert-body">
    <p class="usa-alert-text" markdown="1">The paths in the compiled CSS file assume that your asset folders follow the same structure as those in `dist/assets`. Copy this folder in its entirety, or compile the assets from source as described below.</p>
  </div>
</div>

We recommend including these files from `node_modules` directly, either by linking to them at that location or by copying them automatically during a build process, to make upgrades easier in the future.

## Copy during Jekyll build process

If you’re using Jekyll, a simple plugin can help copy this file during your build process to keep your assets up-to-date. First, add this file to `_plugins/`:

```ruby
# _plugins/copy_to_destination.rb

module Jekyll
  module CopyToDestination
    class CopyGenerator < Generator
      def generate(site)
        folders = site.config['copy_to_destination'] || []

        static_files = folders.map do |relative_path|
          absolute_path = File.join(site.source, relative_path)
          folder_path = File.dirname(absolute_path)
          entries = Dir.glob(File.join(absolute_path, '**', '*'))
          files = entries.select { |f| File.file?(f) }

          files.map do |file|
            relative_directory = File.dirname(file).sub(folder_path, '')
            filename = File.basename(file)
            StaticFile.new(site, folder_path, relative_directory, filename)
          end
        end.flatten

        site.static_files.concat(static_files)
      end
    end
  end
end
```

Then, configure it to copy the compiled assets to your site output folder:

```yaml
# _config.yml

copy_to_destination:
  - node_modules/identity-style-guide/dist/assets
```

# Compiling source files in your build process

The original source files in Sass and next-generation JavaScript are in `src`.

Use these files if your project will be extending styles or JavaScript — but you’ll need to compile them in your build pipeline using a Sass compiler and a next-generation JavaScript compiler like Babel.
