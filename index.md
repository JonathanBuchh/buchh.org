---
title: Jonathan Buchholz
description: Jonathan Buchholz's website.
---
This is my little piece of the internet. If you're interested in learning more about me, view my [about page](/about).

{% for post in site.posts %}
<p><time>{{ post.date | date: "%m/%y" }}</time> <a href="{{ post.url }}">{{ post.title }}</a></p>
{% endfor %}
