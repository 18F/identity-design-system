# Spacing scale

The cloud.gov spacing scale is based on a base grid of **8px**. Use even multiples of this base grid when setting the height, width, padding, and margin of blocks and components. When possible, any spacing value should be a multiple of this base grid.


## Sass variables

Our spacing grid sass variables provide an easy way to access grid multiples. The variable outputs the final value in terms of `rem` but these are meant to directly correspond to a pixel multiplier.

```
$grid-05:            0.5 * base     4px
$grid-1:             1 * base       8px
$grid-105:           1.5 * base     12px
$grid-2:             2 * base       16px
$grid-3:             3 * base       24px
$grid-4:             4 * base       32px
$grid-5:             5 * base       40px
$grid-6:             6 * base       48px
$grid-7:             7 * base       56px
$grid-8:             8 * base       64px
$grid-9:             9 * base       72px
$grid-10:            10 * base       80px
```

## Utility classes

There are basic utility classes for a subset of spacing classing. We can use utility classes to add positive spacing multiples to `height`, `width`, `margin`, and `padding`.

The class constructor pattern is:

```
[rule][variation]-[multiplier]
```

with the following **rule codes**:

```
w: width
h: height
p: padding
m: margin

```

and these **variation codes** for `padding` and `margin`:

```
[none]: all sides
h:      horizontal (left and right)
v:      vertical (top and bottom)
t:      top
r:      right
b:      bottom
l:      left

```

and the same **multiplier codes** from the grid variables:

```
05:        0.5x     4px
1:         1x       8px
105:       1.5x     12px
2:         2x       16px
3:         3x       24px
4:         4x       32px
5:         5x       40px
6:         6x       48px
7:         7x       56px
8:         8x       64px
9:         9x       72px
10:        10x      80px
```

### Examples:
- **a full margin of 64px:** `m8`
- **8px padding on top and bottom:** `py1`
- **height of 48px:** `h6`
