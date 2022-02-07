---
title: "How To Build A Blog: With Whatever You Want"
description: Learn how I dealt with years of paralysis by analysis and instead
  opted for what was interesting to me and available at the time. All without
  considering development overheads, relevance or any other excuse I could make
  up.
author: Aidan Ross
date: 2022-02-07T15:37:49.950Z
category: Editorial
tags:
  - post
  - featured
image: /assets/uploads/11ty-blog.jpg
imageAlt: 11ty, Netlify and tailwind css logos
---
I've lost count of the number of "build your blog with..." articles and videos I've read or watched over the past 2-3 years. Each one promises to deliver the fastest build experience for the developer, with the smallest bundle size and optimal SEO-ness. And I'm sure they all do to a certain degree and with each presenting its own list of pros and cons that you as a developer need to filter through, weigh up and decide what is most valuable to you and your musings.

The problem is, where do you start? No, seriously. With such a plethora of options fired at you at Mach-3 from every single social media, marketting channel and tech-influencer thread under the sun. What do **you** do?

Well, if you're anything like me, you'll spend the next several years violently procrastinating the choice away while confidently telling yourself, "you'll get to it" while continuing to religiously watch any 3-hour long tutorial in hopes of finding the unicorn stack that will let you build a blog in under an hour using code that still lets you feel like a developer - but no **so** difficult that it slightly inconveniences you.

Because surely a platform or set of tools like that exists right?

### Wrong. It all needs work and you need to learn how to do it.

It finally clicked for me when I watched [Kevin Powell](https://www.youtube.com/channel/UCJZv4d5rbIKd4QHMPkcABCw) - the CSS genie's tutorial on building a blog with the static site generator [11ty](11ty.dev).

<iframe width="560" height="315" src="https://www.youtube.com/embed/4wD00RT6d-g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In it, he talks you through the process of setting up 11ty, converting an existing static website into a markdownable blog and lastly, hosting the resultant statically generated site on Netlify and hooking it up to Netlify's headless CMS.

To those well-versed in the terminology. This is the ethos of the [JAMstack](https://jamstack.org/). A modern approach to development that aims to:

> "...simplify the web and make it faster, more secure and easier to scale."

It does this by taking away complicated and costly server-side rendering. And instead, opting to pre-render content at build time. Meaning no inter-server interception for malicious hackers, no long-load times caused by rendering a new page on every request to the server and better SEO by providing crawlers fully static and rendered pages to sift through.

Now, this isn't an article about the benefits of the JAMstack. But rather, how you simply need to pull the trigger on your next development project. Instead of trying to curate the perfect set of technologies to get started with.

To help get started, here are some of the concerns that plagued me when I was wading through the see of blog-related indecision.

### What if there's something better?

Well there very well could be. And there probably is for every number of use cases! But this is true for nearly **everything** you could possibly do. And not limited to web-dev.

I told myself, "I don't want to have a WordPress blog because everyone has one. It's too simple and I've heard they're super-slow and bloated"

The individual statements in that sentence aren't necessarily false. WordPress is globally renowned as one of the premier blogging platforms. So yeah, everyone uses it...for a reason.

It can be incredibly simple to set up in the right hands. Why does that make it bad? Because I wouldn't get developer brownie points for using an ultra-niche framework that is cool and fast.

And yes, perhaps WordPress as a platform is slightly large and cumbersome with its rather large monolithic structure. But does that really matter for you right now? When all you should really be worried about is having a live and functional blog that can serve the limited viewership you're likely to have.

This isn't to say that these aren't valid concerns - especially regarding performance - but think of this in the way a client looking for a blog might think. Does that client care about your whoopty.js back-end that makes things 10% faster? Or do they care about having an easy to use space where they can post their thoughts in article-form to their audience?