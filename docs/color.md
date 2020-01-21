---
permalink: /color/
title: Color
lead: >
  These official colors connect the login.gov brand across products — use them when possible.
---

The color codes listed beneath each name indicate what names can be used with the U.S. Web Design System’s color utility classes. For example:

<div class="bg-primary-lighter text-primary-dark padding-1 maxw-tablet">
  This element has classes <code>bg-primary-lighter</code> and <code>text-primary-dark</code>.
</div>

Read more about <a href="https://v2.designsystem.digital.gov/utilities/color/" target="_blank">the U.S. Web Design System’s color utility classes</a>.

## Featured palette
<div class="border-top">
  <div class="grid-row grid-gap margin-top-4">
    {% include helpers/color.html
      name="Darker Blue / Navy"
      code="primary-darker"
      hex="#112e51"
      text-color="white"
    %}
    {% include helpers/color.html
      name="Blue"
      code="primary"
      hex="#0071bb"
      text-color="white"
    %}
    {% include helpers/color.html
      name="Lighter Blue"
      code="primary-lighter"
      hex="#ebf3fa"
      text-color="black"
    %}
    {% include helpers/color.html
      name="Red"
      code="secondary"
      hex="#e21c3d"
      text-color="white"
    %}
  </div>
</div>

## Extended palette

<div class="border-top"></div>

### Primary

<div class="grid-row tablet:grid-col">
  {% include helpers/color.html
    name="Lightest Blue"
    code="primary-lightest"
    hex="#f2f9ff"
    text-color="black"
  %}
  {% include helpers/color.html
    name="Lighter Blue"
    code="primary-lighter"
    hex="#ebf3fa"
    text-color="black"
  %}
  {% include helpers/color.html
    name="Light Blue"
    code="primary-light"
    hex="#cedced"
    text-color="black"
  %}
  {% include helpers/color.html
  name="Blue"
    code="primary"
    hex="#0071bb"
    text-color="white"
  %}
  {% include helpers/color.html
    name="Dark Blue"
    code="primary-dark"
    hex="#205493"
    text-color="white"
  %}
  {% include helpers/color.html
    name="Darker Blue / Navy"
    code="primary-darker"
    hex="#112e51"
    text-color="white"
  %}
  {% include helpers/color.html
    name="Darkest Blue"
    code="primary-darkest"
    hex="#0c213a"
    text-color="white"
  %}
</div>

### Secondary

<div class="grid-row tablet:grid-col">
  {% include helpers/color.html
    name="Lightest Red"
    code="secondary-lightest"
    hex="#fff0f3"
    text-color="black"
  %}
  {% include helpers/color.html
    name="Lighter Red"
    code="secondary-lighter"
    hex="#f3b8be"
    text-color="black"
  %}
  {% include helpers/color.html
    name="Light Red"
    code="secondary-light"
    hex="#ea7b85"
    text-color="black"
  %}
  {% include helpers/color.html
    name="Red"
    code="secondary"
    hex="#e21c3d"
    text-color="white"
  %}
  {% include helpers/color.html
    name="Dark Red"
    code="secondary-dark"
    hex="#ab142f"
    text-color="white"
  %}
  {% include helpers/color.html
    name="Darker Red"
    code="secondary-darker"
    hex="#8b0a21"
    text-color="white"
  %}
  {% include helpers/color.html
    name="Darkest Red"
    code="secondary-darkest"
    hex="#680617"
    text-color="white"
  %}
</div>

### Base

<div class="grid-row tablet:grid-col">
  {% include helpers/color.html
    name="Lightest Grey"
    code="base-lightest"
    hex="#f0f0f0"
    text-color="black"
  %}
  {% include helpers/color.html
    name="Lighter Grey"
    code="base-lighter"
    hex="#dedede"
    text-color="black"
  %}
  {% include helpers/color.html
    name="Light Grey"
    code="base-light"
    hex="#adadad"
    text-color="black"
  %}
  {% include helpers/color.html
    name="Grey"
    code="base"
    hex="#767676"
    text-color="white"
  %}
  {% include helpers/color.html
    name="Dark Grey"
    code="base-dark"
    hex="#5c5c5c"
    text-color="white"
  %}
  {% include helpers/color.html
    name="Darker Grey"
    code="base-darker"
    hex="#454545"
    text-color="white"
  %}
  {% include helpers/color.html
    name="Darkest Grey"
    code="base-darkest"
    hex="#1b1b1b"
    text-color="white"
  %}
</div>

<div class="grid-row tablet:grid-col">
  {% include helpers/color.html
    name="Ink Grey"
    code="ink"
    hex="#454545"
    text-color="white"
  %}
</div>

### Accent cool

<div class="grid-row tablet:grid-col">
  {% include helpers/color.html
    name="Lightest Teal"
    code="accent-cool-lightest"
    hex="#ecfcff"
    text-color="black"
  %}
  {% include helpers/color.html
    name="Lighter Teal"
    code="accent-cool-lighter"
    hex="#b7dde9"
    text-color="black"
  %}
  {% include helpers/color.html
    name="Light Teal"
    code="accent-cool-light"
    hex="#7bbfd6"
    text-color="black"
  %}
  {% include helpers/color.html
    name="Teal"
    code="accent-cool"
    hex="#00a2c4"
    text-color="black"
  %}
  {% include helpers/color.html
    name="Dark Teal"
    code="accent-cool-dark"
    hex="#008099"
    text-color="white"
  %}
  {% include helpers/color.html
    name="Darker Teal"
    code="accent-cool-darker"
    hex="#007187"
    text-color="white"
  %}
  {% include helpers/color.html
    name="Darkest Teal"
    code="accent-cool-darkest"
    hex="#006175"
    text-color="white"
  %}
</div>

## State palette

<div class="border-top">
  <div class="margin-top-2">
    The state color palette is divided into five high-level role-based color families: <code>info</code>, <code>error</code>, <code>warning</code>, <code>success</code>, and <code>disabled</code>.
  </div>
</div>

### Info

<div class="grid-row tablet:grid-col">
  {% include helpers/color.html
    name="Lighter Info Teal"
    code="info-lighter"
    hex="#ecfcff"
    text-color="black"
  %}
  {% include helpers/color.html
    name="Light Info Teal"
    code="info-light"
    hex="#b7dde9"
    text-color="black"
  %}
  {% include helpers/color.html
    name="Info Teal"
    code="info"
    hex="#00a2c4"
    text-color="black"
  %}
  {% include helpers/color.html
    name="Dark Info Teal"
    code="info-dark"
    hex="#007187"
    text-color="white"
  %}
  {% include helpers/color.html
    name="Darker Info Teal"
    code="info-darker"
    hex="#006175"
    text-color="white"
  %}
</div>

### Error

<div class="grid-row tablet:grid-col">
  {% include helpers/color.html
    name="Lighter Error Red"
    code="error-lighter"
    hex="#fff0f3"
    text-color="black"
  %}
  {% include helpers/color.html
    name="Light Error Red"
    code="error-light"
    hex="#f3b8be"
    text-color="black"
  %}
  {% include helpers/color.html
    name="Error Red"
    code="error"
    hex="#e21c3d"
    text-color="white"
  %}
  {% include helpers/color.html
    name="Dark Error Red"
    code="error-dark"
    hex="#8b0a21"
    text-color="white"
  %}
  {% include helpers/color.html
    name="Darker Error Red"
    code="error-darker"
    hex="#680617"
    text-color="white"
  %}
</div>

### Warning

<div class="grid-row tablet:grid-col">
  {% include helpers/color.html
    name="Lighter Warning Yellow"
    code="warning-lighter"
    hex="#fffdd7"
    text-color="black"
  %}
  {% include helpers/color.html
    name="Light Warning Yellow"
    code="warning-light"
    hex="#fcf197"
    text-color="black"
  %}
  {% include helpers/color.html
    name="Warning Yellow"
    code="warning"
    hex="#f5d600"
    text-color="black"
  %}
  {% include helpers/color.html
    name="Dark Warning Yellow"
    code="warning-dark"
    hex="#847122"
    text-color="white"
  %}
  {% include helpers/color.html
    name="Darker Warning Yellow"
    code="warning-darker"
    hex="#504332"
    text-color="white"
  %}
</div>

### Success

<div class="grid-row tablet:grid-col">
  {% include helpers/color.html
    name="Lighter Success Green"
    code="success-lighter"
    hex="#ebfcef"
    text-color="black"
  %}
  {% include helpers/color.html
    name="Light Success Green"
    code="success-light"
    hex="#a6d5af"
    text-color="black"
  %}
  {% include helpers/color.html
    name="Success Green"
    code="success"
    hex="#18852e"
    text-color="white"
  %}
  {% include helpers/color.html
    name="Dark Success Green"
    code="success-dark"
    hex="#0e581e"
    text-color="white"
  %}
  {% include helpers/color.html
    name="Darker Success Green"
    code="success-darker"
    hex="#094316"
    text-color="white"
  %}
</div>

### Disabled

<div class="grid-row tablet:grid-col">
  {% include helpers/color.html
    name="Light Disabled Grey"
    code="disabled-light"
    hex="#f0f0f0"
    text-color="black"
  %}
  {% include helpers/color.html
    name="Disabled Grey"
    code="disabled"
    hex="#767676"
    text-color="white"
  %}
  {% include helpers/color.html
    name="Dark Disabled Grey"
    code="disabled-dark"
    hex="#454545"
    text-color="white"
  %}
</div>