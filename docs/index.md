---
permalink: /index.html
title: Home
layout: base
---

<script>
  // Keep the query string (e.g. ?ui_test_bucket=nds) when redirecting to the first page.
  location.replace('{{ site.baseurl }}{{ site.components[0].url }}' + location.search + location.hash);
</script>
<meta http-equiv="refresh" content="0; url={{ site.baseurl }}{{ site.components[0].url }}">
