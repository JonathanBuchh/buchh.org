---
title: Jonathan Buchholz
description: Jonathan Buchholz's website.
layout: index
---
I'm a junior at Thomas Jefferson High School for Science and Technology chasing the Lord.

This site is mostly for books notes, but I do a bit of writing.

## Writing

{% for post in site.posts %}
<p><time>{{ post.date | date: "%m/%y" }}</time> <a href="{{ post.url }}">{{ post.title }}</a></p>
{% endfor %}
