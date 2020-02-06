---
title: "Mozilla Developer Network Redesign"
---
# Mozilla Developer Network Redesign

The Mozilla Developer Network (MDN) is a community contributed, Mozilla edited and maintained resource for web developers. “Encyclopedic” is often an adjective used to describe the site and the traffic it sees is huge. Try searching for something that has to do with Javascript and it’s usually the first result. At it’s core it is, quite literally, a wiki. It’s a website that sees hundreds of changes a week. 

## Summary
{% case-summary-image, "right", "/portfolio/imgs/mdn/mdn_05_400px.png", "/portfolio/imgs/mdn/mdn_05_mobile.png" %} 
  A screen capture of the redesigned homepage of MDN. The page is organized around a large search bar with "zones" of content represented under neither it. A summary of articles from the "Hacks Blog" is under the zones.
{% endcase-summary-image %}

As part of the developer experience efforts my team Mozilla worked on as part of the Firefox Marketplace, we worked with the MDN team to redesign the site to both accommodate the new developer content and make the site easier to use on mobile devices. I was brought into the project to work with our community members and stakeholders to redesign the information architecture of the site. This included mapping all the content on the site's almost 40,000 pages, designing and conducting a card sort study, and redesigning the structure of the site's content. The resulting redesign was a massive success:

- Community engagement surged during the redesign process and after
- The new IA accommodated multiple new content sections over the next few years
- The IA redesign revealed forgotten sections that were subsequently updated or removed, reducing the complexity of the site. 

{% case-summary-image, "center", "/portfolio/imgs/mdn/mdn_01.png", "/portfolio/imgs/mdn/mdn_01_sm.png" %} 
  A diagram that is made of two web diagrams. The top diagram is titled "User sees" and shows a homepage connected to four circles titled "Projects", "Learn", "Tools", and "Demos." Each circle contains multiple icons of stacks of paper labeled "Content group." The bottom diagram is titled "System we will build" and shows the same home page connected to four circles as the top diagram, but instead of content groups each circle has multiple square icons labeled "tag group." All the circles connect to a large rectangle titled "MDN content" that contains three rows of page icons. The first two rows are titled "Kuma docs" and the last row is titled "Jekyll Docs."
{% endcase-summary-image %}

## Goals
MDN is a crown-jewel of Mozilla' developer outreach efforts, so any attempt to update it was met with justified fear of messing it up. By all accounts the site was a success, but like all products it could still be improved. Metrics had shown that a growing number of users were visiting the site on tablet devices. User research confirmed that large numbers of developers were using their tablets to "second screen" MDN while they worked, and the site didn't have very good touch-screen support. In addition to making the site more small-screen and touch friendly, it was decided MDN would host the documentation for both FirefoxOS and Open Web Apps. The FirefoxOS and Open Web Apps initiatives complicated the redesign by introducing Mozilla-only technologies into MDN for the first time. To this point the site was primarily a source of core web technology documentation. 

There was a lot of cross-departmental coordination involved and the goals reflected that:

- Redesign the page templates to accommodate smaller touch-screen devices
- Redesign the IA to accurately reflect the overlap between Open Web Apps and FirefoxOS and standards-based technologies
- Redesign the IA to make it clear that Mozilla was not preferring our own technologies over open web standards
- Redesign the IA to adequately feature FirefoxOS and Open Web App content


## The Problem
While the rest of the team focused on redesigning the page templates to work better on touch devices, it was my job to tackle the information architecture issues. I took this on myself because it required a lot of negotiating among stakeholders across the company and in our community of thousands of contributors. The main problem I had to solve was figuring out how to create a structure that was intuitive to our tens of thousands of unique monthly visitors but that also allowed Mozilla product teams to add content like the FirefoxOS and Open Web Apps content to the site. This was complicated because MDN was seen as a neutral source of information by most of our community (and many inside Mozilla.) The inclusion of FirefoxOS was controversial, even though having a single source of developer resources was not. 

## Making a map so we could change it
While I had used MDN quite a bit, there was a lot of the site I wasn't familiar with. Additionally, I wanted to run a card sort with the community to get them involved in the process and be able to bring their voices into the negotiations with various stakeholders about the final form of the IA. That meant making a deck of cards for the site, and to do that I needed to map the site. MDN is very well written, every page has a descriptive title, so I asked the engineers if they could give me a dump of all the page titles on the site. It was a simple enough query to pull out of the database. I received a list of over 39,000 titles! This list was also accompanied with a warning that "a lot of these pages change regularly." Because it was a wiki, if you go two or three levels into the hierarchy pages (and even whole sub-catagories) were very volatile. I knew the site was big, but I was expecting thousands of pages, not tens of thousands! I decided to focus only on the top three levels of the site's hierarchy and widdled it down to a more "manageable" 93 cards to use for our study. 

## The most surreal card sort study of my career
{% case-summary-image, "left", "/portfolio/imgs/mdn/mdn_02_400px.jpg", "/portfolio/imgs/mdn/mdn_02_mobile.jpg" %} 
  A photograph of a similarity matrix from the card sort study we ran on the MDN site. The graph is printed out on 22 pieces of letter-sized paper and taped to a whiteboard. 
{% endcase-summary-image %}

I was not convinced anyone would make it through a card sort with 93 cards, but we couldn't all agree to remove anything else, so I decided to go with it. The original study design was an open sort with 20 participants using OptimalSort. We recruited for the study by putting a banner on the site as well as announcing it to our community mailing list. Our budget allowed for a $20 incentive, which we offered up in the traditional method of Amazon gift card. I opened the study and immediately starting trying to figure out how I was going to get enough people to complete it in time for our deadline. I was not convinced anyone would make it through a card sort with 93 cards. 

### Ten minutes later I got an email from a community member about the study.
He was angry. I figured people would be upset when they saw how many cards they had to drag into digital piles. That was not what he was angry about. He was upset that we were forcing him to take the $20 gift card. His was not the only email I received about this. I got five in the first hour and our community manager also received a few. It turned out a large segment of the community was upset that we felt we needed to pay them for their participation. After discussing it with one of our community managers, we drafted a followup message to the community explaining how incentives were a standard practice in research with human participants and informing them how they could ignore the gift code. We assured them we would just reuse them on another study so there would be no waste. 

### The next day, the study had closed&hellip; and I got hundreds of upset emails
The study closed over night, 10 hours after it launched to be exact. I was shocked. My inbox was overflowing with people who were upset that the study had closed before they could participate. Our community manager was also getting flooded with requests to participate. This outpouring of interest was unlike anything I'd ever seen. After a quick meeting to discuss the extra work we'd have to do if we increased the number of participants, I reopened the study with a total participant pool of 100. The study closed again 26 hours later, with an 11% abandonment rate. I haven't seen anything like it since.

## Flexible Catagories and Zones
{% case-summary-image, "center", "/portfolio/imgs/mdn/mdn_03.png", "/portfolio/imgs/mdn/mdn_03_sm.png" %} 
  A horizontal tree diagram, showing the final top-level organization of the new MDN information architecture. At the left, a root node titled "Home Page" is linked to five child nodes. From top to bottom the children are: Zones (a large node that contains the children Firefox, FirefoxOS, Marketplace, App Center, Add-ons, and Persona), Web Platform ( a large node that contains two smaller nodes Technology and Reference and Guides. The Technology child contains the items: HTML, CSS, Javascript, Graphics, DOM, Open Web Apps, and MathML. The References and Guides child contains the items: Tutorials, Reference, and Developer Guides), Tools, Demos, and Connect. The last three children are leaf nodes represented by an icon of a stack of papers. 
{% endcase-summary-image %}

Armed with our giant amount of card sort data I designed a structure for the site and refined it with our stakeholders. From the card sort, I saw that people didn't see as sharp a divide on the detailed FirefoxOS and Open Web Aps content from the rest of the content on MDN as some community members and stake holders had feared they would. However, anything that included the product names got sorted into a separate category, essentially splitting the related information across catagories. This gave me the idea that we could build a more fluid structure around the content, creating multiple paths to the same content to accommodate this splitting in the minds of our participants. The core of the MDN content became a section in itself called "Web Platform" that contained all the technical documents and that was organized by the standardized technology the documentation was about. This included large pieces of the documentation for Open Web Apps and FirefoxOS, because those pieces were themselves standards based web technology. To meet the needs of our stakeholders and also preserve the appearance of neutrality, anything that was specifically branded with a Mozilla product name would live in a new "Zone" created for that product inside MDN. Most of the content in a given zone was just a link to pages that were also part of the Web Platform, but the zones also created a space where product management and marketing could include product specific information. 

## A structure to build on
FirefoxOS and Open Web Apps would be the first two zones, but we'd later add zones for other Mozilla products because the new structure worked so well. The new IA design alleviated the tension between the core MDN team who saw themselves as neutral and the product teams inside Mozilla who didn't. It let the company leverage it's most valuable web property to serve as a single source of developer resources without alienating the large, very engaged community that had grown up around it and made it so successful.

## Related links
- [Mozilla Leadership Case Summary](/portfolio/mozilla)