---
title: "Mozilla Open Web Aps team: Firefox Marketplace Redesign"
---

# Mozilla Open Web Aps team: Firefox Marketplace Redesign

The Open Web Apps team was focused primarily on building an ecosystem for developers to build and publish mobile friendly web apps that had access to modern smartphone features (e.g. GPS, accelerometers, etc) and for users of Android and FirefoxOS devices to discover and acquire them. The hub of this effort was the Firefox Marketplace, our app store and publishing platform. My design team of six designers led multiple Open Web Apps initiatives starting with the redesign of the Firefox Marketplace.

{% case-summary-image, "right", "/portfolio/imgs/mozilla/marketplace-tablet-grid-400px.png", "/portfolio/imgs/mozilla/marketplace-tablet-grid-mobile.png" %} 
  The Feed in a tablet sized viewport, a grid of varied card components each with either collections of app icons, positive app reviews, or  articles about an app.
{% endcase-summary-image %}

## Summary 

"The Feed", a curated editorialized take on the standard app store paradigm,
 redefined Mozilla's apps ecosystem, excited our telecom partners, and eventually inspired the redesign of Apple's App store that came a few years later in iOS11 (or at least I'd like to think that's why they're so similar now.) TechCrunch said, ["Apple, Microsoft And Google Could Learn Something From Mozilla’s App Store Prototype."](https://techcrunch.com/2013/09/02/apple-microsoft-and-google-could-learn-something-from-mozillas-app-store-prototype/) 

- Increased repeat visits by consumer users 
- Increased developer submissions in conquered categories 
- Proved to leadership design-led solutions were viable
- My team led future efforts for expanding the Open Web Apps ecosystem to the desktop and redesigning the developer app submission process

## Goals
As a business unit the Marketplace had two primary goals:

- Raise the profile of Open Web Applications in the minds of developers
- Raise awareness of Open Web Apps with FirefoxOS and Firefox Mobile users

These two goals rolled up into Mozilla's larger organizational goal of challenging and breaking up the growing duopoly of the mobile web that is still held by Google and Apple today. 

Additionally, as one of the senior UX folks hired to grow the practice in the company, I set a few team goals:

- Move toward a Human-centered design methodology for product development across the org/business unit
- Bring qualitative research to equal standing with quantitative in decision making across the org/business unit
- Make UX an innovation center in the org/business unit

{% case-summary-image, "left", "/portfolio/imgs/mozilla/originalMarketplace_400px.png", "/portfolio/imgs/mozilla/originalMarketplace_mobile.png" %} 
  The original marketplace homepage, a grid of nine square app icons, the top left icon is double the size of the rest
{% endcase-summary-image %}

## The Problem
The Marketplace was initially built to mirror the two popular app stores of the time, with no real mechanism in place for developers to do any marketing and no way for Mozilla to feature apps. Shortly after the initial launch, repeat consumer visits and new app submissions plateaued. We also started hearing from our developer evangelists they were having difficulty recruiting developers into the Open Web Apps ecosystem. Digging into on the research our User Research team had conducted in South America, customer support emails, and stories from our developer advocates it became clear our problem was discoverability. Consumers felt nothing was changing and developers felt like they had no audience. Popularity was the key sorting factor for all the app's views, so once something got a lot of downloads, it was nearly impossible to displace it. The top results in categories didn't change much. As a result, customers weren't coming back and developers were hesitant to put more effort into developing for our platform.

## Design-driven solutions
It didn't take long for the team to come together around lots of ideas about making discovery not just possible but fun. Of course we had to live inside a few very important constraints:

- The Marketplace had a relatively small catalog 
- We had to keep some sort of curation in place to keep quality high

The team quickly found ourselves orbiting the idea of a social media-style feed, it solved our discoverability problems without violating our two constraints. It allowed for some level of curation and obscured the size of the catalog by breaking it up into groups smaller than categories, similar to Netflix. Our next, deeper explorations were about resolving the details of how The Feed would be constructed and curated.

{% case-summary-image, "right", "/portfolio/imgs/mozilla/concepting_400px.png", "/portfolio/imgs/mozilla/concepting_mobile.png" %} 
  A slide showing detailed design of two potential Feed modules: Category and Trending/Popular/New. The category module is shown in three variations each containing a lead app at the top with an icon and download button followed by three additional apps in a horizontal list below the lead app. The middle variation shows a screen shot of the lead app between the lead app and the list of apps, the last variation shows the Category unit in a phone frame. The Trending/Popular/New design is similarly laid out with three variations horizontally, The new module is visually similar to a word bubble, and includes a line of text and an action button, the middle unit is similar to the first, but adds a close button in the top right corner and a second action button to the body of the unit. The last variation is similar to the second, but replaces the text and the action buttons with a row of three app icons.
{% endcase-summary-image %}

### Selling the concept
The team split into two groups to explore our strongest options, while I took the initial high-fi artifacts we had created and started selling the idea to our partners and stakeholders. Generating hi-fi concepts this early was all about being able to take the idea and sell it to the rest of the company, and it worked amazingly. One of our video prototypes shared on the UX blog went viral, which helped gain the idea the support it needed.

## Refining the concepts
After our initial approval we had three big questions to answer that differentiated the two approaches we had settled on &mdash; social vs editorial:

- What is the content of a Feed post?
- Who makes that content?
- How is The Feed organized?

These questions turned out to be tied to a lot of other parts of the business unit, so it was at this stage that I tried to bring in members of the other departments to participate in the process. 

{% case-summary-image, "left", "/portfolio/imgs/mozilla/suggestions_400px.png", "/portfolio/imgs/mozilla/suggestions_mobile.png" %} 
  alt text needed
{% endcase-summary-image %}

### The Social Feed: the aspirational approach
The Social Feed was the most popular version of The Feed concept. It's hard for me to admit, because I was not one of it's fans, but without it the Editorial Feed would not have been possible. The Social feed idea was based on the team's interpretation of one of Mozilla's core values: Powered by People. Specifically people having conversations with each other. The Social feed took that idea and turned it into an app store. Users would build a community of other people, consumers and developers alike, and the content of The Feed would be entirely composed by that community. That community activity would be the store. 

While this version of the Feed concept was the most popular, it was ultimately brought down by three big issues:

{% cleared-list %}

- Values Conflict &mdash; The amount of data collection required directly conflicted with our values around privacy rights

- Feasibility &mdash; We would essentially have to build a social network from scratch, not something we had time, budget, or expertise to do.

- No one would use it &mdash; Early testing showed people had little interest in a social network about apps. Some of us compared it to Apple's failed iTunes Ping.  

{% endcleared-list %}

Despite the fact that the Social Feed was unrealistic, it was very important that the idea get explored and discussed. The idea aspired to meet the ideals fo the company, dared to be different than the competition, and built on the popular trends at the time. It generated excitement inside the Open Web Apps team, Mozilla, and online. Without that excitement The Feed would have never been built.

{% case-summary-image, "right", "/portfolio/imgs/mozilla/editorialfeed_400px.png", "/portfolio/imgs/mozilla/editorialfeed_mobile.png" %} 
  A slide showing three different layout possibilities of the editorial feed, each displayed next to the other. The first shows a feed consisting of (in order from top to bottom): An image unit with the title "Operator Shelf", an app collection unit featuring three app icons vertically and horizontally centered in the unit against a purple shape, a featured app unit featuring the YouTube showing the app icon and a description of the app along with a download button, a different collection unit with a title "incredible music apps" that includes three lines of text and two rows of three app icons. The second concept shows a feed consisting of (in order from top to bottom): a taller operator shelf unit that in the first concept, a short paragraph of "Lorem ipsum" test, six individual app units each consisting of an app icon, a title, a star rating, and a download button. The third concept shows (in order from top to bottom): a unit with a stock photo of a waveform and a title "Mega Collection", a collection unit titled "Photo editing" consisting of two rows of three app icons each with it's name under the icon, a collection unit titled "Make it vintage" with a single row of three app icons each with it's name under the icon, and another collection unit with two rows of three icons titled "Share it with friends."
{% endcase-summary-image %}

### The Editorial Feed: Actually Powered by People
The competing idea to the Social Feed was the Editorial Feed: a news feed built by a Mozilla editor. This version of The Feed had not just apps and groups of apps but also other content related to the apps in the store: short-form editorials, interviews with developers, review videos, and themed collections of apps. The editorial team would use these media units to slice our catalog thousands of different ways to present the catalog in a new way every week to each region. We would have a small team working for Mozilla and recruit regional editors from our huge community of volunteers to do feeds tailored at a province/state level. There was no algorithmic sorting in The Feed and because of this is wasn't "endless." It was truly powered by the people in the community. 

There were challenges in getting the Editorial Feed built, but we met all of them:

- We had to create and hire an editorial team. 

- We had to overhaul the developer management tools to accommodate the new content that could be featured

- We had to balance all our ideas for feed unit types against our timeline, partner requests for their own custom units, and the needs of our users

- We had to build a suite of editorial tools for our internal use and for the use of some of our telecom partners

## Release and beyond
The Feed became emblematic of the Firefox Marketplace. After launch we continued to expand the concept. This included taking the Marketplace to the desktop as well has completely rethinking the developer submission experience from end to end. Our telecom partners were so excited about The Feed that they requested special placement in it and the Operator Shelf project kicked off shortly after launch to define an Operator specific section of The Feed. All of these projects and a few more were led by the design team, something that was almost unimaginable before The Feed. 

## Related links
- [Rebranding and Pattern Library for Firefox Marketplace](https://tsmuse.github.io/marketplace-style-guides/)


