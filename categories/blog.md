---
layout: archive
author_profile: true
category:
    - Blog
---

{% assign posts = site.categories["Blog"] %}
{% for post in posts %}
    {% include my-archive-single.html type=page.entries_layout %}
{% endfor %}
<div>
</div>