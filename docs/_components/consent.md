---
title: Consent
lead: >
  The America.gov delegation consent layout, where a user reviews the agency
  services America.gov can use on their behalf and allows access.
---

## Consent

The single-service flow uses a responsive disclosure card, the Department of
State Agency Seal, and full-width Primary and Tertiary actions. Expand the row
to review the permissions and shared information. The preview does not grant
access or send personal information. The multi-service examples below also
illustrate the selection controls. Add, Remove, Allow, and Cancel are examples for the host application to wire up.

## Single service, collapsed

{% capture example %}
{% include helpers/consent-single.html %}
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Single service, expanded

{% capture example %}
{% include helpers/consent-single.html expanded=true %}
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Multiple services, collapsed

Rules between collapsed rows are inset to the row padding.

{% capture example %}
{% include helpers/consent-multiple.html %}
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Multiple services, expanded

An open row can end with a full-width secondary "Remove" button, shown here
on a service the user added (the service that started the request has none).
Dividers stay inset on both sides when a row opens.

{% capture example %}
{% include helpers/consent-multiple.html expanded=true %}
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Accessibility

- The `<summary>` is the row's toggle. Its accessible name is the agency name
  and description, and browsers expose the open or closed state.
- The seal sits next to the agency name, so give it `alt=""`. The chevron is
  decorative (`aria-hidden="true"`).
- Use a heading level for the section labels (`.consent-service__label`) that
  fits the page outline. On a page whose `<h1>` is "Connect to America.gov",
  use `<h2>`.
- Give each "Remove" button a visually hidden agency name so the buttons are
  distinguishable out of context.
