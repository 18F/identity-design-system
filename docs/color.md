---
permalink: /color/
title: Color
---

# Main palette

<div class="grid-row grid-gap">
  {% include helpers/color.html
    name="Navy"
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
    name="Light Blue"
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

# Extended palette

<div class="grid-row grid-gap">
  <div class="grid-row tablet:grid-col">
    {% include helpers/color.html
      name="Dark Blue"
      code="primary-dark"
      hex="#205493"
      text-color="white"
    %}
    {% include helpers/color.html
      name="Medium Blue"
      code="primary-light"
      hex="#cedced"
      text-color="black"
    %}
    {% include helpers/color.html
      name="Input Blue"
      code="primary-lightest"
      hex="#f2f9ff"
      text-color="black"
    %}
  </div>
  <div class="grid-row tablet:grid-col">
    {% include helpers/color.html
      name="Teal"
      code="accent-cool"
      hex="#00bfe7"
      text-color="black"
    %}
    {% include helpers/color.html
      name="Light Teal"
      code="accent-cool-light"
      hex="#ecfcff"
      text-color="black"
    %}
  </div>
</div>

<div class="grid-row grid-gap">
  <div class="grid-row tablet:grid-col">
    {% include helpers/color.html
      name="Darkest Green"
      code="success-darker"
      hex="#094316"
      text-color="white"
    %}
    {% include helpers/color.html
      name="Dark Green"
      code="success-dark"
      hex="#116523"
      text-color="white"
    %}
    {% include helpers/color.html
      name="Green"
      code="success"
      hex="#18852e"
      text-color="white"
    %}
    {% include helpers/color.html
      name="Light Green"
      code="success-lighter"
      hex="#ebfcef"
      text-color="black"
    %}
  </div>
  <div class="grid-row tablet:grid-col">
    {% include helpers/color.html
      name="Gray"
      code="ink"
      hex="#5b616a"
      text-color="white"
    %}
    {% include helpers/color.html
      name="Light Gray"
      code="disabled"
      hex="#dddfe4"
      text-color="black"
    %}
  </div>
</div>

<div class="grid-row grid-gap">
  <div class="grid-row tablet:grid-col">
    {% include helpers/color.html
      name="Darkest Red"
      code="secondary-darker"
      hex="#8b0a21"
      text-color="white"
    %}
    {% include helpers/color.html
      name="Dark Red"
      code="secondary-dark"
      hex="#ab142f"
      text-color="white"
    %}
    {% include helpers/color.html
      name="Pink"
      code="secondary-light"
      hex="#fff0f3"
      text-color="black"
    %}
  </div>
  <div class="grid-row tablet:grid-col">
    {% include helpers/color.html
      name="Yellow"
      code="warning"
      hex="#f5d600"
      text-color="black"
    %}
    {% include helpers/color.html
      name="Light Yellow"
      code="warning-light"
      hex="#fffdd7"
      text-color="black"
    %}
  </div>
</div>
