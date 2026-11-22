---
title: Auth entry
lead: >
  The auth entry layout pairs a marketing column with the sign-in card on the
  entry page.
---

## Auth entry

The full `auth-entry` layout is a two-column entry page composed by the page
shell: a marketing column beside the sign-in card, reflowing to a single column
on narrow viewports. The full-width layout is not shown here; the examples below
demonstrate the self-contained pieces that render on their own.

## Callout

The callout pairs static intro text with a tertiary link button. Only the
button navigates to the announcement.

{% capture example %}
<div class="auth-entry__whats-new">
  <span class="auth-entry__whats-new-intro">Passkeys are here.</span>
  <button type="button" class="usa-button usa-button--tertiary usa-button--sm usa-button--flexible-width">
    <span>See what's new</span>
    <svg class="usa-icon" aria-hidden="true"><use href="{{ site.baseurl }}/assets/img/nds-icons/symbols.svg#arrow-right"></use></svg>
  </button>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Marketing copy

The marketing column pairs a headline with body copy.

{% capture example %}
<div class="auth-entry__copy">
  <h1 class="auth-entry__headline">Sign in or create an account</h1>
  <p class="auth-entry__body">One account gives you secure access to participating government agencies.</p>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Card

The `auth-entry__card` is a surface for sign-in content. The heading, fields,
actions, and notice shown here are an example composition, not required slots.

{% capture example %}
{% include helpers/auth-entry-card.html id_prefix="auth-entry" heading="Sign in" %}
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Card with seal

This example adds only the Agency Seal and a placeholder agency name above
the heading. Supply the name and artwork for your context, or omit the group.

{% capture example %}
{% include helpers/auth-entry-card.html id_prefix="auth-entry-seal" agency="Agency name" seal="sample-agency-seal.webp" heading="Sign in" %}
{% endcapture %}
{% include helpers/code-example.html code=example %}
