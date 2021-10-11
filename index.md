---
title: Jonathan Buchholz
description: The writings, musing, and assorted output of Jonathan Buchholz.
---
> He has told you, O man, what is good; and what does the Lord require of you but to do justice, and to love kindness, and to walk humbly with your God?
> \- Micah 6:8

I'm a junior at Thomas Jefferson High School for Science and Technology chasing the Lord.

## Writing

<div class="writing">
<h3>Title</h3>
<h3>Description</h3>
    {% for post in site.categories.writing %}
    <p><a href="{{ post.url }}">{{ post.title }}</a></p>
    <p class="description"><em>{{ post.description }}</em></p>
    {% endfor %}
</div>

## Reading

Thoughts and notes on books I read. See a [ranking](/book/log) of these books.

<div>
    {% for page in site.categories.book %}
    <img src="{{ page.cover }}" alt="{{ page.title }}" class=cover>
    <h3><a href="{{ page.url }}">{{ page.title }}</a></h3>
    <h4>by {{ page.author }}</h4>
    <p>I read this on {{ page.date | date: "%B %-d, %Y"}} and I recommend it <b>{{ page.rating }}</b>/10.</p>
    <p>{{ page.review }}</p>
    {% endfor %}
</div>
