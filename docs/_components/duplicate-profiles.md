---
title: Duplicate profiles
lead: A layout for reviewing accounts that may be duplicates.
---

## Duplicate profiles

The `.duplicate-profiles` layout lists accounts for review. Each account renders
as a `.duplicate-profiles__account` card with a `.duplicate-profiles__account-title`
and a `.duplicate-profiles__details` definition list.

{% capture example %}
<div class="duplicate-profiles">
  <div class="duplicate-profiles__accounts">
    <h2 class="duplicate-profiles__heading">Accounts found</h2>
    <div class="duplicate-profiles__account">
      <div class="duplicate-profiles__account-header">
        <h3 class="duplicate-profiles__account-title">Account ending in 4821</h3>
      </div>
      <dl class="duplicate-profiles__details">
        <div class="duplicate-profiles__detail">
          <dt>Created</dt>
          <dd>March 4, 2024</dd>
        </div>
        <div class="duplicate-profiles__detail">
          <dt>Last sign in</dt>
          <dd>June 12, 2024</dd>
        </div>
      </dl>
    </div>
    <div class="duplicate-profiles__account">
      <div class="duplicate-profiles__account-header">
        <h3 class="duplicate-profiles__account-title">Account ending in 9037</h3>
      </div>
      <dl class="duplicate-profiles__details">
        <div class="duplicate-profiles__detail">
          <dt>Created</dt>
          <dd>January 22, 2023</dd>
        </div>
        <div class="duplicate-profiles__detail">
          <dt>Last sign in</dt>
          <dd>May 30, 2024</dd>
        </div>
      </dl>
    </div>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
