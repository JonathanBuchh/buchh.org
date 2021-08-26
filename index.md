---
title: Jonathan Buchholz
---
> He has told you, O man, what is good; and what does the Lord require of you but to do justice, and to love kindness, and to walk humbly with your God?  
> \- Micah 6:8

I'm a junior at Thomas Jefferson High School for Science and Technology chasing the Lord.

Here is my [Strava](https://strava.com/athletes/jonathanbuchh) if you came looking for me from Instagram.

## Writing

<style>
.writing {
    display: grid;
    grid-template-columns: 30% 70%;
}

.writing > p {
    margin: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.description > a {
    text-decoration: none;
}

.writing > p:last-of-type {
    padding-bottom: 16px;
}

@media screen and (max-width: 800px) {
  .writing {
    grid-template-columns: 1fr;
    grid-row-gap: 0;
  }

  .writing h3 {
    display: none;
  }

  .writing > .description {
    padding-bottom: 10px;
  }


}

</style>
<div class="writing">
<h3>Title</h3>
<h3>Description</h3>
    {% for post in site.posts %}
    <p><a href="{{ post.url }}">{{ post.title }}</a></p>
    <p class="description"><a href="{{ post.url }}">{{ post.description }}</a></p>
    {% endfor %}
</div>
