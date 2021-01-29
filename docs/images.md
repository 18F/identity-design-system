---
permalink: /images/
title: Images
lead: This guidance is intended to help you use images effectively in login.gov products.
redirect_from: /accessibility/policies/
---

## Illustrations

Login.gov uses illustrations throughout our products and services to help create an easy to follow guidance of our products and services. Below is guidance on how to use and create imagery that is in line with our brand.

### Be useful

Illustration provides context, adds clarity, builds consistency, and lead users to their next step. Ultimately, any illustration should provide a deeper understanding of the application or brand.

### Be consistent

Being consistent in illustration means considering details of a single illustration, as well as looking at the body of illustration work as a whole. Consistency speaks to quality: of the illustration and of the product it represents.

### Be focused

Illustration is most effective when it is precise in choosing a single message to deliver. With every narrative that is built there needs to be a focal point, a hierarchy of elements that contribute to the single, pointed message. With every illustration, we ask ourselves “what are we trying to say?”

<div class="grid-row grid-gap">
  <img src="{{ site.baseurl }}/assets/img/illustrations/security-key.svg" role="img" alt="Security key illustration" class="display-block grid-col flex-auto flex-align-center">
  <img src="{{ site.baseurl }}/assets/img/illustrations/fail.svg" role="img" alt="Failure illustration" class="display-block grid-col flex-auto flex-align-center">
  <img src="{{ site.baseurl }}/assets/img/illustrations/id-confirm.svg" role="img" alt="Confirmed identification illustration" class="display-block grid-col flex-auto flex-align-center">
</div>

### Accessibility Guidance

Illustrations are often decorative images. A decorative image does not add information to the content of a page. Unlike an informative image, a decorative image can be hidden from screen readers. We set decorative images as "hidden" from screen readers to help prevent a confusing, redundant and/or a tedious experience.

For decorative images, the `alt` attribute should be set as empty. Avoid ommitting the `alt` attribute altogether. If the `alt` attribute is not used, a screen reader will read out the full filename to the user, which is not an accessible or good user experience.

**Additional resources on decorative images:**

- [18F Accessibility Guide: Images](https://accessibility.18f.gov/images/)
- [Accessibility for Teams: UX Design - Images](https://accessibility.digital.gov/ux/images/)
- [W3.org - Decorative Images](https://www.w3.org/WAI/tutorials/images/decorative/)
- [W3.org - Tips and Tricks for Text Alternatives](https://www.w3.org/WAI/tutorials/images/tips/)
- [W3.org WAI-ARIA - 5.2.7 Accessible Name Calculation](https://www.w3.org/WAI/PF/aria/complete#namecalculation) (When working with an aria-label attribute)
- [WebAIM: Alternative Text - Context is Everything](https://webaim.org/techniques/alttext/#context)
