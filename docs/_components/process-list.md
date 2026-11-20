---
title: Process List
lead: A process list displays the steps or stages of important instructions or processes.
---

{% include helpers/base-component.html component="process-list" %}

## Default

In the NDS stylesheet each step has a 28px numbered marker beside a semibold
heading and muted description text.

{% capture example %}
<ol class="usa-process-list">
  <li class="usa-process-list__item">
    <h4 class="usa-process-list__heading">Start a process</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo,
      ipsum sed pharetra gravida, orci magna rhoncus neque.
    </p>
    <ul>
      <li>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo,
        ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio
        lorem non turpis.
      </li>
      <li>
        Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat
        condimentum.
      </li>
      <li>Aliquam erat volutpat. Sed quis velit.</li>
    </ul>
  </li>
  <li class="usa-process-list__item">
    <h4 class="usa-process-list__heading">Proceed to the second step</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo,
      ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio
      lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula
      volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla
      facilisi. Nulla libero. Vivamus pharetra posuere sapien.
    </p>
  </li>
  <li class="usa-process-list__item">
    <h4 class="usa-process-list__heading">Complete the step-by-step process</h4>
    <p>
      Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat
      condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla
      libero. Vivamus pharetra posuere sapien.
    </p>
  </li>
</ol>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Connected

Add `usa-process-list--connected` to join the markers with a 2px line.

{% capture example %}
<ol class="usa-process-list usa-process-list--connected">
  <li class="usa-process-list__item">
    <h4 class="usa-process-list__heading">Start a process</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo,
      ipsum sed pharetra gravida, orci magna rhoncus neque.
    </p>
    <ul>
      <li>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo,
        ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio
        lorem non turpis.
      </li>
      <li>
        Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat
        condimentum.
      </li>
      <li>Aliquam erat volutpat. Sed quis velit.</li>
    </ul>
  </li>
  <li class="usa-process-list__item">
    <h4 class="usa-process-list__heading">Proceed to the second step</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo,
      ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio
      lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula
      volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla
      facilisi. Nulla libero. Vivamus pharetra posuere sapien.
    </p>
  </li>
  <li class="usa-process-list__item">
    <h4 class="usa-process-list__heading">Complete the step-by-step process</h4>
    <p>
      Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat
      condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla
      libero. Vivamus pharetra posuere sapien.
    </p>
  </li>
</ol>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Big

Add `usa-process-list--big` for a 44px marker with the heading centered beside
it.

{% capture example %}
<ol class="usa-process-list usa-process-list--big">
  <li class="usa-process-list__item">
    <h4 class="usa-process-list__heading">Start a process</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo,
      ipsum sed pharetra gravida, orci magna rhoncus neque.
    </p>
    <ul>
      <li>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo,
        ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio
        lorem non turpis.
      </li>
      <li>
        Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat
        condimentum.
      </li>
      <li>Aliquam erat volutpat. Sed quis velit.</li>
    </ul>
  </li>
  <li class="usa-process-list__item">
    <h4 class="usa-process-list__heading">Proceed to the second step</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo,
      ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio
      lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula
      volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla
      facilisi. Nulla libero. Vivamus pharetra posuere sapien.
    </p>
  </li>
  <li class="usa-process-list__item">
    <h4 class="usa-process-list__heading">Complete the step-by-step process</h4>
    <p>
      Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat
      condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla
      libero. Vivamus pharetra posuere sapien.
    </p>
  </li>
</ol>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Big, Connected

The library doesn't define this combination. The NDS stylesheet joins the big
markers with the connected line.

{% capture example %}
<ol class="usa-process-list usa-process-list--big usa-process-list--connected">
  <li class="usa-process-list__item">
    <h4 class="usa-process-list__heading">Start a process</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo,
      ipsum sed pharetra gravida, orci magna rhoncus neque.
    </p>
    <ul>
      <li>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo,
        ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio
        lorem non turpis.
      </li>
      <li>
        Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat
        condimentum.
      </li>
      <li>Aliquam erat volutpat. Sed quis velit.</li>
    </ul>
  </li>
  <li class="usa-process-list__item">
    <h4 class="usa-process-list__heading">Proceed to the second step</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo,
      ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio
      lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula
      volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla
      facilisi. Nulla libero. Vivamus pharetra posuere sapien.
    </p>
  </li>
  <li class="usa-process-list__item">
    <h4 class="usa-process-list__heading">Complete the step-by-step process</h4>
    <p>
      Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat
      condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla
      libero. Vivamus pharetra posuere sapien.
    </p>
  </li>
</ol>
{% endcapture %}
{% include helpers/code-example.html code=example %}
