# Layout
## Float layout

The float layout grid uses a `928px` max-width. Grid columns collapse down to a single width on small screens.


### Float layout grid rows

A `.grid` represents a single row. For multiple rows, use multiple grids.

```html
<div class="grid">
  <div class="grid-width-4"></div>
  <div class="grid-width-8"></div>
</div>
<div class="grid">
  <div class="grid-width-8"></div>
  <div class="grid-width-4"></div>
</div>
```

## Flex layout
The flex layout has no max width. It is composed of parent `row`s and child `col`s. Each row of columns needs to be enclosed in a `row` and **columns don't have to add up to anything**. If you're using a pure flex `-f{#]` grid, the toal number of columns is simply the sum of the `-f{#}`s. (you can mix and match with `col-fit` and `col-fill` as well, _or_ have underfilled rows using fixed or percentage width utilities). Columns may include nested rows and columns as in the following:

```html
<div class="row">
  <div class="col-f4"></div>
  <div class="col-f8 row row-center-x">
    <div class="col-f10"></div>
    <div class="col-f1"></div>
    <div class="col-f1"></div>
  </div>
</div>
<div class="row">
  <div class="col-f12"></div>
</div>
<div class="row">
  <div class="col-f2"></div>
  <div class="col-fill"></div>
  <div class="col-fit"></div>
  <div class="col-f2"></div>
</div>
```
