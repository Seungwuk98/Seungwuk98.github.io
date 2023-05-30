---
layout: archive
author_profile: true
category:
    - Ubuntu
---

<h1>Ubuntu</h1>
<hr>
{% assign posts = site.categories["Ubuntu"] %}
{% for post in posts %}
    {% include my-archive-single.html type=page.entries_layout %}
{% endfor %}
<div>
</div>