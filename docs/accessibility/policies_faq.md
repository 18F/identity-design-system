---
permalink: /accessibility/policies_faq/
title: Accessibility policies and frequently asked questions
sidenav:
  - text: Decorative images
    href: "#using-decorative-images"
---
[\<\< Back to Login.gov Accessibility home]({% link accessibility.md %})

## Using decorative images

A decorative image does not add information to the content of a page. Unlike an informative image, a decorative image can be hidden from screen readers. To help prevent confusing, redundant and/or tedious experience, we at Login.gov have set decorative images to be hidden from screen readers.

Examples (See visual screenshots below):

- An icon with adjacent text
- An illustration that makes the page more attractive, but is non-essential to understanding the content
- A screenshot image with a caption

If the image is decorative, the alt attribute (sometimes referred to as "alt tag") would be empty (Example: `alt=""`), so the user knows that it is intentionally left empty. An empty alt attribute communicates that an image is decorative.

Avoid ommitting the alt attribute altogether. If the alt attribute is not used, a screen reader will read out the full filename to the user, which is not an accessible or good user experience.

If an image is informative, we add a description with a caption, alt attribute, title attribute, or aria-label attribute.

**Example: A decorative icon with an adjacent text**

![](/post-images/accessibility/decorative-icon.png)

**Example: A decorative illustration that makes the page more attractive**

![](/post-images/accessibility/decorative-illustration.png)

**Additional resources on decorative images:**

- [18F Accessibility Guide: Images](https://accessibility.18f.gov/images/)
- [Accessibility for Teams: UX Design - Images](https://accessibility.digital.gov/ux/images/)
- [W3.org - Decorative Images](https://www.w3.org/WAI/tutorials/images/decorative/)
- [W3.org - Tips and Tricks for Text Alternatives](https://www.w3.org/WAI/tutorials/images/tips/)
- [W3.org WAI-ARIA - 5.2.7 Accessible Name Calculation](https://www.w3.org/WAI/PF/aria/complete#namecalculation) (When working with an aria-label attribute)
- [WebAIM: Alternative Text - Context is Everything](https://webaim.org/techniques/alttext/#context)
