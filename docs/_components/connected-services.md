---
title: Connected services
lead: The account page layout listing applications connected to an account.
service_groups:
  - heading: Your connected services
    description: These agencies and services use your Login.gov account to log you in.
    panels:
      - - [USA.gov, usa-gov]
      - - [Social Security Administration, ssa]
        - [MyTravelGov, dos]
        - [CBP Trusted Traveler Programs, dohs]
        - [USAJOBS, usajobs]
  - heading: More ways to use your account
    description: Your information isn't shared with an agency until you log in and agree to share it.
    panels:
      - - [Railroad Retirement Board, rrb, "Manage your retirement, unemployment, and benefits.", "https://www.rrb.gov/"]
        - [Medicare.gov, medicare, "View your Medicare coverage, claims, and plan options.", "https://www.medicare.gov/"]
        - [VA.gov and My HealtheVet, va, "Manage your benefits, prescriptions, claims, and more.", "https://www.va.gov/"]
        - [Department of Labor, dol, Verify your identity for unemployment insurance claims., "https://www.dol.gov/"]
        - [OPM Retirement Services, opm, Manage your federal retirement annuity and information., "https://www.opm.gov/retirement-center/"]
        - [SAM.gov, sam, Register your business to bid on federal contracts., "https://sam.gov/"]
        - [Small Business Administration, sba, Apply for small business loans and disaster assistance., "https://www.sba.gov/"]
        - [USDA Farmers.gov, usda, Apply for loans and manage conservation programs., "https://www.farmers.gov/"]
        - [DEA Diversion Control, dea, Manage registration to prescribe controlled substances., "https://www.deadiversion.usdoj.gov/"]
---

## Connected services

Connected services use elevated panels; suggested services use a flat panel.
Each row uses the shared Agency Seal component. The preview uses sample account
data. Connect and Disconnect are clickable preview actions; neither navigates nor changes an account.

{% capture example %}
<div class="dashboard-home connected-services-page">
  <h1 class="dashboard-home__greeting">Good morning</h1>
  <div class="connected-services-page__sections">
  {% for group in page.service_groups %}
    <section class="connected-services" aria-labelledby="services-{{ forloop.index }}">
      <header class="connected-services__header">
        <h2 class="connected-services__heading" id="services-{{ forloop.index }}">{{ group.heading }}</h2>
        <p class="connected-services__description">{{ group.description }}</p>
      </header>
      {% for panel in group.panels %}
      <div class="card connected-services__panel{% unless panel[0][3] %} card--elevated{% endunless %}">
        <ul class="connected-services__rows usa-list--unstyled">
        {% for agency in panel %}
          <li class="connected-service">
            <div class="connected-service__row">
              <img class="agency-seal" src="{{ site.baseurl }}/img/agency-seals/{{ agency[1] }}.webp" width="48" height="48" alt="">
              <div class="connected-service__content">
                <p class="connected-service__title" title="{{ agency[0] }}">{{ agency[0] }}</p>
                {% if agency[3] %}
                <p class="connected-service__meta">{{ agency[2] }}</p>
                {% else %}
                <p class="connected-service__meta">Connected January 28, 2026 at 1:56 PM</p>
                <p class="connected-service__email">alex@example.com</p>
                {% endif %}
              </div>
              <div class="connected-service__actions">
                {% if agency[3] %}
                <a class="usa-button usa-button--secondary connected-service__connect" href="{{ agency[3] }}" aria-label="Connect to {{ agency[0] }}">
                  <span>Connect</span>
                  <svg aria-hidden="true" focusable="false"><use href="{{ site.baseurl }}/assets/img/nds-icons/symbols.svg#external-link"></use></svg>
                </a>
                {% else %}
                <details class="connected-service__menu" name="connected-service-actions">
                  <summary class="usa-button usa-button--secondary usa-button--icon-only" aria-label="Actions for {{ agency[0] }}">
                    <svg class="usa-icon" aria-hidden="true" focusable="false"><use href="{{ site.baseurl }}/assets/img/nds-icons/symbols.svg#ellipse"></use></svg>
                  </summary>
                  <div class="popover-menu">
                    <button type="button" class="usa-button usa-button--tertiary" aria-label="Disconnect {{ agency[0] }}">Disconnect</button>
                  </div>
                </details>
                {% endif %}
              </div>
            </div>
          </li>
        {% endfor %}
        </ul>
      </div>
      {% endfor %}
    </section>
  {% endfor %}
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
