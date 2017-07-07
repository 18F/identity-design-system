---
title: Using utility classes
status: ready
---

Low level base patterns and variables are also expressed as utility classes. Utility classes are static, single-purpose, presentational classes that control only one or two rules. Build the overall style of a component by combining and chaining together multiple utility classes.

Since utility classes are static, they allow you to build new components without altering the production CSS.

**Utility classes should be used for prototyping only. Don’t use utility classes in production code.**


## Anatomy of a utility class

Utility classes are named with a consistent taxonomy of base/modifier/value.

**utilityClass = base + modifier + value**

### base

The **base** value is an expression of the kind of rule the utility class modifies. These base values can be **short** (a 1-3 character abbreviation of the referenced rule; _example:_ background is `bg`) or **verbose** (a complete word; _example:_ `clear`). Most bases are short.

### modifier

Some bases also use a **modifier** to express the variant of the base targeted by the class. For example, the border (`bg`) base has the following modifiers:

| modifier  | definition                              |
|--------   |---------                                |
| **x**     | left and right (horizontal) borders     |
| **y**     | top and bottom (vertical) borders       |
| **t**     | top border                              |
| **r**     | right border                            |
| **b**     | bottom border                           |
| **l**     | left border                             |

### value

**Values** indicate the value that the rule should get. These values are specific quantized values, on a few different scales. You can't just add any value in a utility class, it needs to be one of the specified values. For example the font face (`font`) base accepts the following values:

| value     | definition                              |
|--------   |---------                                |
| **sans**  | the sans-serif font (18Franklin)        |
| **serif** | the serif font (Georgia)                |
| **mono**  | the monospaced font (Roboto Mono)       |

But the margin (`m`) base accepts many more values:

| value     | definition                              |
|--------   |---------                                |
| **05**    | 0.5x grid                               |
| **1**     | 1x grid                                 |
| **105**   | 1.5x grid                               |
| **2**     | 2x grid                                 |
| **3**     | 3x grid                                 |
| **4**     | 4x grid                                 |
| **5**     | 5x grid                                 |
| **6**     | 6x grid                                 |
| **7**     | 7x grid                                 |
| **8**     | 8x grid                                 |
| **9**     | 9x grid                                 |
| **10**    | 10x grid                                |
| **15**    | 15x grid                                |
| **20**    | 20x grid                                |
| **30**    | 30x grid                                |
| **40**    | 40x grid                                |
| **50**    | 50x grid                                |
| **n05**   |- 0.5x grid                              |
| **n1**    | -1x grid                                |
| **n105**  | -1.5x grid                              |
| **n2**    | -2x grid                                |
| **n3**    | -3x grid                                |
| **n4**    | -4x grid                                |
| **n5**    | -5x grid                                |
| **1px**   | 1 pixel                                 |
| **2px**   | 2 pixels                                |
| **n1px**  | -1 pixel                                |
| **n2px**  | -2 pixels                               |

**If the bases, modifiers, or values are whole words (verbose) or are legible as words (like `col`)** they should be separated by a hyphen `-`

_Example:_ **border** (`b`) + **top** (`t`) + **solid** (`solid`) = `bt-solid`


**If the bases, modifiers, or values are short** they should be constructed as a simple string.

_Example:_ **border** (`b`) + **top** (`t`) + **-2px** (`n2px`) = `btn2px`

## Reset value

Some utility classes accept a reset value of (`--`). This value resets the base/modifier to a specified default value. For example: `top--` reverts the `top` to its reset value of `auto`. Not every base has a reset value, and the reset value depends on the base. See the charts below for more details.


## Common scales

Continuous utility classes values have been quantized on consistent scales. Our quantized scales are **grid scale**, **pixel scale**, **percentage scale**, **flex scale** and **type scale**. Other values (like `solid` or `dashed`) needn't be quantized as their value is already discrete.

These scales are a numerical value prefixed (or suffixed) to avoid ambiguity:

| scale                     | prefix (or suffix)             | example    | definition                |
|--------                   |---------                       |------      |------                     |
| **grid scale**            | `{#}`  _no prefix_               | `bt05`     | border-top: $grid * 0.5   |
| **negative grid scale**   | `n{#}`                         | `mtn05`    | margin-top: $grid * -0.5  |
| **pixel scale**           | `{#}px`                        | `pt1px`    | padding-top: 1px          |
| **negative pixel scale**  | `n{#}px`                       | `mxn1px`   | margin-left, -right: -1px  |
| **percentage scale**      | `{#}ct`                        | `w33ct`    | width: 33.33333333%       |
| **flex scale**            | `f{#}`                         | `col-f3`   | flex: 3 0 0               |
| **type scale**            | `s{#}`                         | `sans-s6`  | 18Franklin scale 6 (18px) |

## Utility class bases

### Colors


``` yaml
base:
modifiers:
values:
  blue
  brightmint
  cream
  gold
  green
  red
  trueblack
  textblack
  darkgray
  mediumgray
  mediumgray-trans
  lightgray
  lightestgray
  white
reset (--):
example:
  .green
```

### Background color

``` yaml
base:
  bg
modifiers:
values:
  blue
  brightmint
  cream
  gold
  green
  red
  trueblack
  textblack
  darkgray
  mediumgray
  mediumgray-trans
  lightgray
  lightestgray
  white
reset (--):
  transparent
example:
  .bg-blue
```

### Font size

``` yaml
base:
modifiers:
  sans
  serif
  mono
values:
  s1
  s2
  s3
  s4
  s5
  s6
  s7
  s8
  s9
  s10
reset (--):
  s6
example:
  .sans-s8
```

### Font face

``` yaml
base:
  font
modifiers:
  sans
  serif
  mono
values:
  s1
  s2
  s3
  s4
  s5
  s6
  s7
  s8
  s9
  s10
reset (--):
  s6
example:
  .sans-s8
```

### Opentype

``` yaml
base:
  ot
modifiers:
  values:
  alt
  tnum
reset (--):
  kern
example:
  .ot-alt
```

### Font weight

``` yaml
base:
  fw
modifiers:
values:
  100
  200
  300
  400
  500
  600
  700
  800
  900
reset (--):
  500
example:
  .fw300
```

### Type style

``` yaml
base:
modifiers:
values:
  italic
  strike
  underline
  uppercase
  lowercase
  capitalize
reset (--):
example:
  .italic
```

### Letterspacing

``` yaml
base:
  ls
modifiers:
values:
  loose
  xloose
reset (--):
example:
  .loose
```

### Line length

``` yaml
base:
  ll
modifiers:
values:
  reading
  narrow
reset (--):
  none
example:
  .ll-reading
```

### Line height

``` yaml
base:
  lh
modifiers:
values:
  single
  hed
  cap
  body
  display
reset (--):
  body
example:
  .lh-single
```

### Border radius

``` yaml
base:
  rd
modifiers:
values:
  rounded
  pill
reset (--):
  none
example:
  .rd-rounded
```

### Flex order

``` yaml
base:
  order
modifiers:
values:
  0
  1
  2
  3
  4
  5
  6
  7
  8
  9
  10
  11
  first
  last
reset (--):
  auto
example:
  .order-last
```

### Width

``` yaml
base:
  w
modifiers:
values:
  percentages:
    5ct
    10ct
    20ct
    25ct
    30ct
    33ct
    40ct
    50ct
    60ct
    66ct
    70ct
    75ct
    80ct
    90ct
    100ct
  grid:
    05
    1
    105
    2
    3
    4
    5
    6
    7
    8
    9
    10
    15
    20
    30
    40
    50
  pixel:
    1px
    2px
reset (--):
  auto
example:
  .w50ct
```

### Height

``` yaml
base:
  h
modifiers:
values:
  percentages:
    5ct
    10ct
    20ct
    25ct
    30ct
    33ct
    40ct
    50ct
    60ct
    66ct
    70ct
    75ct
    80ct
    90ct
    100ct
  grid:
    05
    1
    105
    2
    3
    4
    5
    6
    7
    8
    9
    10
    15
    20
    30
    40
    50
  pixel:
    1px
    2px
reset (--):
  auto
example:
  .h2px
```

### Square

``` yaml
base:
  sq
modifiers:
values:
  percentages:
    5ct
    10ct
    20ct
    25ct
    30ct
    33ct
    40ct
    50ct
    60ct
    66ct
    70ct
    75ct
    80ct
    90ct
    100ct
  grid:
    05
    1
    105
    2
    3
    4
    5
    6
    7
    8
    9
    10
    15
    20
    30
    40
    50
  pixel:
    1px
    2px
reset (--):
  auto
example:
  .sq2
```

### Height

``` yaml
base:
  h
modifiers:
values:
  percentages:
    5ct
    10ct
    20ct
    25ct
    30ct
    33ct
    40ct
    50ct
    60ct
    66ct
    70ct
    75ct
    80ct
    90ct
    100ct
  grid:
    05
    1
    105
    2
    3
    4
    5
    6
    7
    8
    9
    10
    15
    20
    30
    40
    50
  pixel:
    1px
    2px
reset (--):
  auto
example:
  .h2px
```

### Padding

``` yaml
base:
  p
modifiers:
  x
  y
  t
  r
  b
  l
  [null] (all sides)
values:
  grid:
    05
    1
    105
    2
    3
    4
    5
    6
    7
    8
    9
    10
    15
    20
    30
    40
    50
  pixel:
    1px
    2px
reset (--):
  0
example:
  .p2
```

### Margin

``` yaml
base:
  p
modifiers:
  x
  y
  t
  r
  b
  l
  [null] (all sides)
values:
  grid:
    05
    1
    105
    2
    3
    4
    5
    6
    7
    8
    9
    10
    15
    20
    30
    40
    50
  pixel:
    1px
    2px
  negative grid:
    n05
    n1
    n105
    n2
    n3
    n4
    n5
  negative pixel:
    n1px
    n2px
reset (--):
  0
example:
  .myn105
```

### Float

``` yaml
base:
  float
modifiers:
values:
  left
  right
reset (--):
  none
example:
  .float-left
```

### Clear

``` yaml
base:
  clear
modifiers:
values:
  left
  right
  [null] (clears both)
reset (--):
  none
example:
  .clear
```

### Border width

``` yaml
base:
  b
modifiers:
  x
  y
  t
  r
  b
  l
  [null] (all sides)
values:
  grid:
    05
    1
    105
    2
    3
    4
    5
    6
    7
    8
    9
    10
    15
    20
    30
    40
    50
  pixel:
    1px
    2px
reset:
  none
example:
  .bb2px
```

### Border color

``` yaml
base:
  b
modifiers:
  t
  r
  b
  l
  [null] (all sides)
values:
  blue
  brightmint
  cream
  gold
  green
  red
  trueblack
  textblack
  darkgray
  mediumgray
  mediumgray-trans
  lightgray
  lightestgray
  white
  transparent
reset:
example:
  .bt-mediumgray-trans
```

### Border style

``` yaml
base:
  b
modifiers:
  t
  r
  b
  l
  [null] (all sides)
values:
  solid
  dashed
  dotted
reset:
example:
  .b-solid
```

### Display

``` yaml
base:
modifiers:
values:
  block
  inline
  inline-block
  hide
reset:
example:
  .hide
```

### Vertical align

``` yaml
base:
  va
modifiers:
values:
  baseline
  bottom
  middle
  sub
  super
  text-bottom
  text-top
  top
reset:
example:
  .va-middle
```

### Position

``` yaml
base:
  pos
modifiers:
values:
  absolute
  fixed
  relative
  static
  sticky
reset:
example:
  .pos-absolute
```

### Manual position

``` yaml
base:
  top
  right
  bottom
  left
modifiers:
values:
  percentages:
    5ct
    10ct
    20ct
    25ct
    30ct
    33ct
    40ct
    50ct
    60ct
    66ct
    70ct
    75ct
    80ct
    90ct
    100ct
  grid:
    0
    05
    1
    105
    2
    3
    4
    5
    6
    7
    8
    9
    10
    15
    20
    30
    40
    50
  pixel:
    1px
    2px
  negative grid:
    n05
    n1
    n105
    n2
    n3
    n4
    n5
  negative pixel:
    n1px
    n2px
reset:
  auto
example:
  .top-0
```

### Whitespace

``` yaml
base:
  ws
modifiers:
values:
  normal
  nowrap
  pre
  pre-line
  pre-wrap
reset:
  normal
example:
  .ws-nowrap
```

### Flex grid

See base/layout
