---
layout: layouts/case_summary
title: "Mozilla Open Web Aps team: Firefox Marketplace Redesign"
---

# Mozilla Open Web Aps team: Firefox Marketplace Redesign

The Open Web Apps team was focused primarily on building an ecosystem for developers to build and publish mobile friendly web apps that had access to modern smartphone features (e.g. GPS, accelerometers, etc) and for users of Android and FirefoxOS devices to discover and acquire them. The hub of this effort was the Firefox Marketplace, our app store and publishing platform. My design team of six designers lead multiple Open Web Apps initiatives starting with the redesign of the Firefox Marketplace.

<!-- <div class="case-summary-image case-summary-image-right "style="color:hotpink; text-align:center; background: black;height:500px;width:400px;display:flex;flex-flow:column nowrap;justify-content:center;">image sizer</div> -->
<!-- <picture class="case-summary-image case-summary-image-right">
  <source srcset="/portfolio/imgs/mozilla/marketplace-tablet-grid-mobile.png" alt="The Feed in a tablet sized viewport" media="(max-width: 767px)"/>
  <img src="/portfolio/imgs/mozilla/marketplace-tablet-grid-400px.png" alt="The Feed in a tablet sized viewport"/>
</picture> -->

{% case-summary-image, "right", "/portfolio/imgs/mozilla/marketplace-tablet-grid-400px.png", "/portfolio/imgs/mozilla/marketplace-tablet-grid-mobile.png" %} 
  The Feed in a tablet sized viewport, a grid of varied card components each with either collections of app icons, positive app reviews, or  articles about an app.
{% endcase-summary-image %}

## Summary 

"The Feed", a curated editorialized take on the standard app store paradigm,
 redefined Mozilla's apps ecosystem, excited our telecom partners, and eventually inspired the redesign of Apple's App store that came a few years later in iOS11 (or at least I'd like to think that's why they're so similar now.) TechCrunch said, ["Apple, Microsoft And Google Could Learn Something From Mozilla’s App Store Prototype."](https://techcrunch.com/2013/09/02/apple-microsoft-and-google-could-learn-something-from-mozillas-app-store-prototype/) 

- increased repeat visits by consumer users 
- increased developer submissions in conquered categories 
- proved to leadership design-led solutions were just as viable as the regular product or engineering led efforts
- my design team led future efforts for expanding the Open Web Apps ecosystem to the desktop and redesigning the developer app submission process

## Goals
As a business unit the Marketplace had two primary goals:

- raise the profile of Open Web Applications in the minds of developers as equal to native mobile applications
- raise the awareness of Open Web Apps with FirefoxOS and Firefox Mobile (the two places open web apps ran like native apps) users

These two goals rolled up into Mozilla's larger organizational goal of challenging and breaking up the growing duopoly of the mobile web that is still held by Google and Apple today. 

Additionally, as one of the senior UX folks hired to grow the practice in the company, my team had a few goals separate from the product goals:

- Move toward a research-backed, HCD methodology for product development across the org/business unit
- Bring qualitative research into equal standing with quantitative data in decision making across the org/business unit
- Elevate UX to being seen as an innovation center in the org/business unit

{% case-summary-image, "left", "/portfolio/imgs/mozilla/originalMarketplace_400px.png", "/portfolio/imgs/mozilla/originalMarketplace_mobile.png" %} 
  The original marketplace homepage, a grid of nine square app icons, the top left icon is double the size of the rest
{% endcase-summary-image %}

## The Problem
The Marketplace was initially built to mirror the two popular app stores of the time, with no real mechanism in place for developers to do any marketing and no way for Mozilla to feature apps. Shortly after the initial launch, repeat consumer visits and new app submissions plateaued. We had also started hearing from our developer evangelists they were having difficulty recruiting developers into the Open Web Apps ecosystem. Based on the research the UR team had conducted in South America, customer support emails, and stories from our developer advocates it became clear our problem was discoverability. Consumer felt nothing was changing and developers felt like they had no audience because most new submissions were buried in the Marketplace. Popularity was the key sorting factor for all views, so once something got a lot of downloads, it was nearly impossible to displace it, so the top results in categories didn't change much. As a result, customers weren't coming back and developers were hesitant to put more effort into developing for our platform.

## Design-driven solutions
It didn't take long for the team to come together around lots of ideas about making discovery not just possible but fun. Of course we had to live inside a few very important constraints:

- The Marketplace had a relatively small catalog 
- had to keep some sort of curation in place to keep quality high

The team quickly found ourselves orbiting the idea of a social media-style feed,it solved our discoverability problems while abiding by our two constraints. It allowed for some level of curation and by breaking the catalog up into groups smaller than categories we could obscure the size of the catalog the same way apps like Netflix do. The deeper explorations were about resolving the details of how the feed would be constructed and curated: Social vs Editorial.

{% case-summary-image, "right", "/portfolio/imgs/mozilla/concepting_400px.png", "/portfolio/imgs/mozilla/concepting_mobile.png" %} 
  Alt text needed
{% endcase-summary-image %}

### Selling the concept
The team split into two groups to explore our strongest options, while I took the initial high-fi artifacts we had created and started selling the idea to our partners and stakeholders. Generating hi-fi concepts this early was all about being able to take the idea and sell it to the rest of the company, and it worked amazingly. One of our video prototypes shared on the UX blog went viral, which helped gain the idea the support it needed.

## Refining the concepts
After our initial approval we had three big questions to answer that differentiated the social vs editorial approaches:

- What is the content of a feed post?
- Who makes that content?
- How is the feed organized?

These questions turned out to be tied to a lot of other parts of the business unit, so it was at this stage that we tried to bring in members of the other departments to participate in the process. 

{% case-summary-image, "left", "/portfolio/imgs/mozilla/suggestions_400px.png", "/portfolio/imgs/mozilla/suggestions_mobile.png" %} 
  alt text needed
{% endcase-summary-image %}

### The Social Feed - the aspirational approach
The vision of the Social Feed was the most popular version of The Feed concept. It's hard for me to admit even now, because I was not one of it's fans, but without it, it's likely the Editorial Feed would not have been possible. The Social feed idea was based, primarily, on the team's interpretation of one of Mozilla's core values: Powered by People. The Social feed took that idea and turned it into an app store. Users would build a community of other people, consumers and developers alike, and the content of the feed would be entirely composed by that community. That community activity would be the store. 

While this version of the Feed concept was the most popular, it was ultimately brought down by three big issues:

{% cleared-list %}

- Values Conflict: The amount of data required to power this solution directly conflicted with our values around privacy rights

- Feasibility: We would essentially have to build a social network from scratch, not something we had time, budget, or expertise to do.

- No one would use it: Early testing showed people had little interest in a social network about apps. Some of us compared it to Apple's failed iTunes Ping.  

{% endcleared-list %}

Despite the fact that the Social Feed was unrealistic, it was very important that the idea get explored and discussed. The idea aspired to meet the ideals fo the company, dared to be different than the competition, and built on the popular trends at the time. It generated excitement inside the Open Web Apps team, Mozilla, and online in general. Without that excitement, The Feed would have never been built.

{% case-summary-image, "right", "/portfolio/imgs/mozilla/editorialfeed_400px.png", "/portfolio/imgs/mozilla/editorialfeed_mobile.png" %} 
  alt text needed
{% endcase-summary-image %}

### The Editorial Feed - Actually Powered by People
The competing idea to the Social Feed was the Editorial Feed: a news feed built by a Mozilla editor. This version of the feed had not just apps and groups of apps but also other content related to the apps in the store: short-form editorials, interviews with developers, review videos, and themed collections of apps. The editorial team would use these media units to slice our catalog thousands of different ways to present the catalog in a new way every week to each region. We would have a small team working for Mozilla and then recruit regional editors from our huge community of volunteers to do feeds tailored at a province/state level. There was no algorithmic sorting in the feed and because of this is wasn't "endless." It was truly powered by the people in the community. 

There were challenges in getting the Editorial Feed built:

- We had to create and hire an editorial team. 

- We had to overhaul the developer management tools to accommodate the new content that could be featured

- We had to balance all our ideas for feed unit types against our timeline, partner requests for their own custom units, and the needs of our consumer users

- We had to build a suite of editorial tools for our internal use and for the use of some of our teleco partners

## Release and beyond
The Feed became emblematic of the Firefox marketplace. After launch we continued to expand the concept. This included taking the marketplace to the desktop as well has completely rethinking the developer submission experience from end to end. Our telecom partners were so excited about it that they requested special placement in the feed and the Operator Shelf project kicked off shortly after launch to define an Operator specific section of the Feed. All of these projects and a few more were lead by the design team, something that was almost unimaginable before The Feed. 

## Related links
- [Rebranding and Pattern Library for Firefox Marketplace](https://tsmuse.github.io/marketplace-style-guides/)


