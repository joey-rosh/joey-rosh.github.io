---
layout: page
title: Guides
permalink: /guides/
eyebrow: Guides
lede: >-
  Handouts you can read online, download and mark up. They were written for a contract law
  moot workshop, but nothing in them is specific to one unit.
---

<div class="cards">
{%- for g in site.data.guides %}
  <article class="card">
    <span class="marker">{{ forloop.index }}</span>
    <h3>{% if g.page %}<a href="{{ g.page | relative_url }}">{{ g.name }}</a>{% else %}{{ g.name }}{% endif %}</h3>
    <p>{{ g.summary }}</p>
    <ul>
      {%- for item in g.contents %}
      <li>{{ item }}</li>
      {%- endfor %}
    </ul>
    <p class="links">
      {%- if g.page %}<a href="{{ g.page | relative_url }}">Read it online →</a>{% endif %}
      <a href="{{ '/files/' | append: g.file | relative_url }}">Download the Word version →</a>
    </p>
    <p class="card-meta">{{ g.format }} · {{ g.size }} · updated {{ g.updated }}</p>
  </article>
{%- endfor %}
</div>

These handouts are study aids, not legal advice or a marking guide. Your unit's own instructions
always come first. You're welcome to use and adapt them for your own study or teaching, with credit.
