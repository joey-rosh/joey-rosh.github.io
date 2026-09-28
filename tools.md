---
layout: page
title: Tools
permalink: /tools/
eyebrow: Tools
lede: Free to use, nothing to install, and your work stays on your own device.
---

<div class="cards">
{%- for tool in site.data.tools %}
  <article class="card">
    <span class="marker">{{ forloop.index }}</span>
    <h3><a href="{{ tool.url | relative_url }}">{{ tool.name }}</a></h3>
    <p>{{ tool.summary }}</p>
    {%- if tool.tags %}<p class="card-meta">{{ tool.tags | join: " · " }}</p>{% endif %}
  </article>
{%- endfor %}
</div>
