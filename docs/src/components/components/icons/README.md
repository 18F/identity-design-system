
# Icons

The **Icons** allow for a set of icons to be rendered in a block container or
inline next to text. The icons can be colored as either black or "alt" blue. All
icons are implemented in svg and are served using the svg use:xlink attribute
to specify the specific icon or symbal in the svg sprite file.

Icons can either be used inline by just using the svg or put in a boxed container
called `icon-container` that provides a certain standard spacing and sizing.

Inline icons will adjust to the font-size of their parent element. This means
if you put an inline icon with an `h2` it's height will fill the height of the
`h2`. They will also add space before and after any sibling element. This means
if you put an icon next to a `<span>` or similar inline element, the icon will
take care of adding some spacing between them.

## Fill icons

The base set of icons are implemented in svg with strokes. Additionally, there
is a set of icons that are implemented using fills, see [fill icons](/components/detail/icon-fill--default).

## Icon names

All currently available main icons are as follows:

- i-agreement
- i-checked
- i-compass
- i-court
- i-double_arrow
- i-download
- i-export
- i-locked
- i-paperwork
- i-plan
- i-power
- i-search
- i-shipping
- i-user
- i-user_researched

## Color variances

- icon-alt

## Use

Icons can be used inline in text or spaced in a standard way with the icon container.

### Inline

Include an svg tag with the `icon` class along with any color modifier classes
such as `icon-alt`. Within the svg tag, the svg `use` tag is used, with an
attribute called `xlink`. The `xlink` attribute has an additonal `href` part of
it so the whole thing looks like `xlink:href`. The value of this attribute should
be the cloudgov svg sprite, `cloudgov-sprite.svg` along with the specific icon
name after a `#`. The icon name should always include the `i-` part. Be sure to
close the `<use>` tag. An example looks like:

```
<use xlink:href="/img/cloudgov-sprite.svg#i-agreement"></use>
```

The path to the cloudgov svg sprite may differ depending on project setup.

## Adding new icons

To add a new fill icon, import an svg file into the `src/img/` folder with the
following naming scheme:

```
src/img/i-{icon name}.svg
```

Where `icon name` is any underscore spaced name of your choice. Additionally,
the svg code for the icon must:

- Not include any inline color styling for `stroke`. If the system the icon was
  exported from added rules within the svg elements such as `stroke=#222222"`,
  these attributes must be removed. Other attributes such as `stroke-width`
  should be left alone.
- Include a `title` tag that expresses what the icon is.
- Has a viewbox set to `0 0` and then some number relating to the width and
  height.
