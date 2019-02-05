---
title: Code formatting
lead: >
  Highlight code samples using the login.gov color palette.
---

Any pygments-compatible syntax highlighter will produce markup that is compatible with the code highlighting classes included.

## Jekyll

Jekyll uses [rouge](https://github.com/jneen/rouge), which is pygments-compatible. Use fenced code blocks within markdown, and code will be highlighted as expected:

    ```html
    <div contenteditable>A HTML code sample.</div>
    ```

Output:

```html
<div contenteditable>A HTML code sample.</div>
```
