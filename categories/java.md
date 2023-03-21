---
layout: archive
author_profile: true
category:
    - Java
---

<h1>Java</h1>
<hr>
{% assign posts = site.categories["Java"] %}
{% for post in posts %}
    {% include my-archive-single.html type=page.entries_layout %}
{% endfor %}
<div>
</div>