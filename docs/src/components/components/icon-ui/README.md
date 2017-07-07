# Icon Ui

The **icon ui** component is used to assist the user and make the
components easier to understand. 

## Use

To use the **icon ui** icons, follow the same directions as the normal [icons](/components/detail/icon--default)
and add a `icon-fill` class to the `svg` element.

```
<svg class="icon icon-fill">
```
## Adding new icons

To add a new fill icon, import an svg file into the `src/img/` folder with the
following naming scheme:

```
src/img/i-fill-{icon name}.svg
```

Where `icon name` is any underscore spaced name of your choice. Additionally,
the svg code for the icon must:
