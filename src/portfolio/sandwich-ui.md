---
title: "SandwichUI"
---
# SandwichUI 
I'm a big proponent of design systems, in general. They enhance creativity by clearly marking where the existing boundaries are, so you know what you have to push against. SandwichUI was a system I built to make my small team of engineers and designers more productive. 

## Summary
{% case-summary-image, "right", "/portfolio/imgs/sandwichui/sandwich_01_400px.png", "/portfolio/imgs/sandwichui/sandwich_01_mobile.png" %} 
  A screen capture of the SandwichUI design system showing the Design Principles: Simplicity, Data over Decoration, Interactive Content, and Trust in Experts. The first portion of the next section, Styling your Sass for Sandwich is below the Design Principles. 
{% endcase-summary-image %}

My product development team at Simppler was made up of three engineers and, eventually, another designer and we needed to move very quickly. In order to meet our goals and maintain a high level of quality, we had to find new ways to work with our limited resources. One of the ways I accomplished this was focusing my UI work on creating a design system. This allowed the engineers to make a first pass at new UIs using the predefined components, relying on design for the components themselves and review. This allowed me (and later the other designer) to focus on research, task design, information architecture, and designing the design system. With this tool, we were able to move much faster than a team of five otherwise would have. This system helped us:

- Complete a massive redesign of the entire Simppler app
- Add mobile views to the application
- Have the whole team engaged in the ideation phase of design

{% case-summary-image, "center", "/portfolio/imgs/sandwichui/smpp_08.png", "/portfolio/imgs/sandwichui/smpp_08_mobile.png" %} 
  A screen capture of the SandwichUI design system showing the top of the Card Modules page. A paragraph of text describing the content of the section is followed by a wireframe of card configurations used in the Simppler application. The wireframe consists of grey and white rectangular boxes with red text inside them. The text describes the modules each section of the card is made of.
{% endcase-summary-image %}

## Goals
My goals for SandwichUI were fairly simple: I needed a way to spread the work of UI design among the team enough that I could focus on user research and the other higher level design tasks. This meant that I needed a tool that accomplished two goals:

- Allow design to work in low fidelity outside the design system
- Empower the engineers on the team to compose UIs and utilize the expertise of the designers without relying on the designers to do all the composition

## The Problem
My initial mandate at Simppler was to completely redesign the company's signature application before we ran out of seed funding. That effort required me to spend a lot of time doing research and higher level product design, with not a lot of time to spend on the UI. I also had a team of engineers who expected to be receiving a steady stream of finished designs that they could be building. It wasn't realistic that I would be able to keep a steady stream of finished designs flowing to three engineers while also conducting and analyzing user research and trying to make the decisions needed about how to redesign the Simppler application. It was also incredibly wasteful to have three smart, creative engineers just sitting around waiting for things to build. I needed a way to keep myself from being a bottleneck and also fully utilize the engineers beyond just being builders.

## Providing the tools for composition
{% case-summary-image, "left", "/portfolio/imgs/sandwichui/styleguide_400px.png", "/portfolio/imgs/sandwichui/styleguide_mobile.png" %} 
  The first version of the Simppler style guidelines, a single page document that shows the two typefaces we would use: Open Sans and Francois One, with short descriptions on how to use each one. The middle section of the document is the largest, and consists of a table of typeface treatments listing: the name of the treatment, the size and leading of the treatment, and which of the two typefaces the treatment uses. At the bottom the color pallets for the company are displayed in a horizontal list of circles. The Primary Palette is slightly larger circles than the Secondary Palette. The Primary Palette consists of 4 shades of blue. The Secondary Palette consists of purple, red-orange, a light green, and a golden yellow.
{% endcase-summary-image %}

What I needed more than anything was another designer, but I wouldn't get that for a few more months. What I had was a team of engineers, all of whom had ideas about what made for a good UI. What they lacked was the practice most designers get identifying the ways things can go wrong in a given UI and how to solve them. They also lacked confidence in their ability to design the UI as well as I could. One of the first things I made at Simppler was a style guide to make it clear how we were going to decorate the application. How colors and typefaces were to be used, what the spacing rules around the logo and certain type styles was, etc. Armed with this guide, people stopped asking me what color things should be, or what size this or that text should be. I had embedded my expertise in the style guide and that let them tap into it whenever they needed it. For me, it meant I could stop doing full-color drawings of things, they knew the rules so I didn't have to constantly demonstrate them. They could make those decisions themselves. From there, my next logical step was to break individual parts of the UI down and define similar rules around them. Once our initial set of components was defined, I stopped doing any drawings of screens except wireframes. I could create entirely new components, like variations of our prospect cards, with named boxes and the team knew what I meant. More importantly, the other members of the team could make similar drawings to sketch out ideas they had, and everyone on the team could imagine them in hi-fi detail. 

{% case-summary-image, "center", "/portfolio/imgs/sandwichui/components.png", "/portfolio/imgs/sandwichui/components_mobile.png" %} 
  A screen capture of the SandwichUI design system showing part of the Modules section. The modules shown on the screen are the "Filter Title", "Nav Bar", and "Pagination Controls." 
{% endcase-summary-image %}

## Mental model alignment
{% case-summary-image, "right", "/portfolio/imgs/sandwichui/wireframe_400px.png", "/portfolio/imgs/sandwichui/wireframe_mobile.png" %} 
  A wireframe document describing a screen, consisting of grey rectangular boxes with red text. The Boxes are titled (from top to bottom): Nav Bar, Page title tab bar, Filter title, Button list and to the right of it Search Input, and Accordion table. Each box contains smaller text describing what data each component should show.
{% endcase-summary-image %}

An unintended benefit of my move to designing this way was aligning the way we thought about the design of the system with the way we thought about building the system. Under the hood, we were moving to a componentized, React-based architecture. That's how the engineers though about the application, as those pieces of UI and the services they were building to power that UI. By breaking the design process into similar chunks, we avoided all the common arguments about minor inconsistencies between screens, because everyone involved thought of those screens as made up of smaller, reusable pieces. This alignment is undoubtedly what allowed us to move as fast as we did. 

## Making everyone part of design
"Everyone is a designer" is a very popular sentiment these days. While it's a nice idea, it's not as simple as just letting everyone make decisions about things. Using the design system, I created the tools to empower the engineers on my team to participate in parts of the process that they didn't think were for them. Building a tool that gave them the help they needed to make good design decisions by building on the expertise they already had was essential to our ability to ship as much as we did. It simply wouldn't have been possible without building the right tool for our team. 

## Related links
- [SandwichUI system archive](http://sandwich.njpp.co/)
- [Simppler Leadership Case Summary](/portfolio/simppler)