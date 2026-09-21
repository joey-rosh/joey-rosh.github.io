---
layout: page
title: Tools
permalink: /tools/
---

{% for tool in site.data.tools %}
## [{{ tool.name }}]({{ tool.url }})
{{ tool.summary }}

[Open {{ tool.name }} →]({{ tool.url }})
{% endfor %}
