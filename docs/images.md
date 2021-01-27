---
permalink: /images/
title: Images
lead: This guidance is intended to help you use images effectively in login.gov products.
redirect_from: /accessibility/policies/
---

## Illustrations

Login.gov uses illustration to provide context, add clarity, build consistency, and lead users to their next step.

**Example:**

![Screenshot of illustration on secure.login.gov]({{ '/post-images/accessibility/decorative-illustration.png' | relative_url }})

### Accessibility Guidance

Illustrations are often decorative images. A decorative image does not add information to the content of a page. Unlike an informative image, a decorative image can be hidden from screen readers. To help prevent confusing, redundant and/or tedious experience, we at Login.gov have set decorative images to be hidden from screen readers.

For decorative images, the `alt` attribute should be set as empty. Avoid ommitting the `alt` attribute altogether. If the `alt` attribute is not used, a screen reader will read out the full filename to the user, which is not an accessible or good user experience.

**Additional resources on decorative images:**

- [18F Accessibility Guide: Images](https://accessibility.18f.gov/images/)
- [Accessibility for Teams: UX Design - Images](https://accessibility.digital.gov/ux/images/)
- [W3.org - Decorative Images](https://www.w3.org/WAI/tutorials/images/decorative/)
- [W3.org - Tips and Tricks for Text Alternatives](https://www.w3.org/WAI/tutorials/images/tips/)
- [W3.org WAI-ARIA - 5.2.7 Accessible Name Calculation](https://www.w3.org/WAI/PF/aria/complete#namecalculation) (When working with an aria-label attribute)
- [WebAIM: Alternative Text - Context is Everything](https://webaim.org/techniques/alttext/#context)
