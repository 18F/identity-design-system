
# Fill Icons

The **Fill icons** are icons that use fill in their svg code rather then strokes
based on their design. These need to be separate by CSS classes because dynamically
changing the color of fill icons is different then stroke icons.

A developer can tell the difference between the normal stroke icons and fill
icons because fill icons will always be prefixed with `i-fill` in their svg
file name.

## Icon names

All currently available fill icons are as follows:

- i-fill-app
- i-fill-space
- i-fill-org

## Icon color variances

- icon-alt
- icon-ok
- icon-error

## Use

To use the fill icons, follow the same directions as the normal [icons](/components/detail/icon--default)
and add a `icon-fill` class to the `svg` element.

```
<svg class="icon icon-fill">
```

To change the color of the icon, there are icon style color classes can be used.
The fill icons have more color options available: `ok` and `error`.

### Bordered

Additionally, fill icons have the possibility to be made bordered, which will apply
a thin border around the icon of the same color as the color defined by the
variance class. The border width and the spacing between the border and the icon
are relative to the font size of the icon's parent element, similarly to how
the icon's size works. This means if you place an icon in a `h3` tag, the border
and spacing around the border will scale to the font size of the `h3`.

## Adding new icons

To add a new fill icon, import an svg file into the `src/img/` folder with the
following naming scheme:

```
src/img/i-fill-{icon name}.svg
```

Where `icon name` is any underscore spaced name of your choice. Additionally,
the svg code for the icon must:

- Not include any inline color styling, such as `fill` or `stroke`. If the system
  the icon was exported from added rules within the svg such as `fill="#333333"`,
  these attributes must be removed.
- Follow the rules defined in the normal [icons](/components/detail/icon--default)
  instructions for adding a new icon.

## Caveats

In order to make the fill icons correctly color based on their color class, the
icon has to be made up of only fills and likely cannot include any white sections
that overlap with other sections.
