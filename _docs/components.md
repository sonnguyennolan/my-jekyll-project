---
layout: docs
title: Components
permalink: /docs/components/
order: 4
---

# Components

{% capture tab1_content %}
## Heading 1
Content for tab 1
{% endcapture %}

{% capture tab2_content %}
## Heading 2
Content for tab 2
{% endcapture %}

{% include tabs.html 
  default="tab1"
  tabs=site.data.tabs
%}
