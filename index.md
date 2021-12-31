---
title: Jonathan Buchholz
description: Jonathan Buchholz's website.
---
This is my little piece of the internet. If you're interested in learning more about me, view my [about page](/about).

{% for post in site.posts %}
{% if post.description %}
<p><a href="{{ post.url }}">{{ post.title }}</a>: {{ post.description }}</p>
{% else %}
<p><a href="{{ post.url }}">{{ post.title }}</a></p>
{% endif %}
{% endfor %}
