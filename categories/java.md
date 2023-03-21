---
layout: archive
author_profile: true
category:
    - Java
---

{% assign posts = site.categories["Java"] %}
{% for post in posts %}
    {% include my-archive-single.html type=page.entries_layout %}
{% endfor %}
<div>
</div>