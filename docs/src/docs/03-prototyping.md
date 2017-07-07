---
title: Prototyping new patterns
status: draft
---

The pattern library can be used to [develop new
patterns](https://github.com/18F/cg-style/blob/master/README.md) for cloud.gov.

A designer or developer could draft something together in pattern library as
an initial deliverable, then work with developers to bring into production.


## How to add new patterns

See
[docs/src/components/icon](https://github.com/18F/cg-style/tree/master/docs/src/components/icon)
as an example.


## Using main.css

`docs/src/main.css` contains styles used exclusively in the pattern library itself. These styles are meant for the display of the pattern library chrome, and to complement patterns (typically base patterns) that require additional style and context to be organized and displayed in the pattern library. For example, you might have a layout component that is invisible on its own, like a column row or a color. Adding helper styles and elements (like borders, background colors, and labels) to `docs/src/main.css` might help present the pattern with better clarity. Avoid overusing `main.css` — try to present bare components with as little additional styling as necessary.


## Utility classes

Low level base patterns and variables are also expressed as utility classes. Utility classes allow rapid prototyping without the necessity of altering existing classes or creating new ones. They allow you to build new components without altering the production CSS.

**Utility classes should be used for prototyping only. Don’t use utility classes in production code.**

## Best practices

Include documentation about where and when this pattern should be used, not just
how to use the pattern.

Are there any known weaknesses of this pattern with respect to usability or
accessibility?
