---
layout: home
title: Home
---

Free, browser-based study tools for law students. Nothing you type is sent anywhere,
so your work stays on your own device.

## Tools

{% for tool in site.data.tools %}
### [{{ tool.name }}]({{ tool.url }})
{{ tool.summary }}
{% endfor %}
