---
title: "Simppler Product Dev Team: Project Phoenix"
---

# Simppler Product Dev Team: Project Phoenix

Simppler was a seed-stage tech startup and I was employee number ten. The product, also called Simppler, was an employee referrals recommendation and management platform used primarily by recruiters in small to mid-sized companies. The company had raised seed funding two years before I was hired and shipped a v1 of the product: an application that gamified individual employees browsing their professional networks and recommending people to fill open roles at their company. Both the employee and recruiter applications sat atop a foundation of a machine learning system that took in the data provided by employees, built profiles, and made recommendations about the people in the larger "employee professional graph." My product development team, three engineers and a junior designer, was responsible for the user-facing parts of the Simppler applications until the company shut down operations. 

## Summary

Project Phoenix was an exercise in teaching, trust building, and compromise at every step of the product development process. It was also a complete overhaul of the Simppler product. The Simppler that existed when I started was a system that wasn't sure what it was about and who it was for. The focus of the early application was non-HR employees, having them do an HR task and trying to use basic gamification methods (score boards, badges, race-coverage reminders) to push them to regular use. This wasn't working and the company knew it before they hired me. Through qualitative user research (a first for most of the team), cross-functional ideation, and building tools that made us more productive we produced a redesigned Simppler that:

- increased new trial agreements
- increased user-sentiment of new and existing users
- taught a group of engineers that human-centered design methods are for them just as much as for designers

{% case-summary-image, "center", "/portfolio/imgs/simppler/simppler_recruiter.png", "/portfolio/imgs/simppler/simppler_recruiter_mobile.png" %} 
  A screen capture of the Simppler Recruiting application. A grid of cards representing individual prospective candidates surrounded by a navigational tab bar on top and a search and filtering controls menu on the right.
{% endcase-summary-image %}

## Goals
As a VC backed startup nearing the end of it's runway, our primary goal was to increase the metrics needed to raise an A-round of funding and continue growing. Annual reoccurring revenue (ARR) was our key metric. "Redesign the experience" was the mandate, in hopes of bumping ARR and moving on to other issues. 

To that end, as the head of the application group, I set the following goals for the team:

- build a better understanding of our recruiter and employee users
- remove features that do not directly align with user goals
- create a visual language for the application that sets us apart

These goals, which were initially only meant to be project goals, would turn out to be the goals of the team for my entire time at Simppler. 

## The Problem
{% case-summary-image, "left", "/portfolio/imgs/simppler/original_simppler_400px.png", "/portfolio/imgs/simppler/original_simppler_mobile.png" %} 
  A screen capture of the original Simppler Recruiting application. A list of prospective candidates stacked vertically, two of the candidates have an avatar image consisting of their initials in the top-left corner of the list entry. A single navigation bar is at the top of the page, with the list scrolling under it. 
{% endcase-summary-image %}

In the beginning everyone agreed that we needed more insights into what our users needed from our product. After some initial disagreements about how to go about learning what we needed to know, we used a combination of internal stakeholder interviews and on-site interviews with recruiters from companies who were already using Simppler to uncover the following problems we needed to solve:

- Recruiters biggest challenges are juggling conflicting requests from multiple internal stakeholders, not information management
- Sourcing takes up a lot of time for recruiters w/o dedicated sourcing specialists on staff, Simppler wasn't reducing task time
- Simppler was "too noisy" &mdash; too many employees "saying yes to everyone"
- Simppler referrals were hard to evaluate &mdash; recruiters forced to go to LinkedIn for details
- Some participants had stopped using Simppler despite their companies still paying for access

### Research Methods
{% case-summary-image, "right", "/portfolio/imgs/simppler/simppler_assumed_flows_400px.png", "/portfolio/imgs/simppler/simppler_assumed_flows_mobile.png" %} 
  A set of three swimlane diagrams labeled "Current referral process", "Simppler's ideal new referral Process A", and "Simppler's ideal new referral Process B" 
{% endcase-summary-image %}


A big challenge in leading this team was that it was the first time any of us truly worked in a cross-functional collaboration. Not only was I challenging the conventional wisdom of the startup world, I was asking them to do things they were all convinced were not for engineers. Conducting in-person user research was not an easy sell, in part because there wasn't broad agreement on either what we needed to learn nor the methods to go about learning it. Fundamentally, people were skeptical that one could learn about a problem without directly asking about it. 

I brokered a compromise around methods: I designed an in-person, semi-structured interview study that we conducted on-site with our existing customers. I helped the more skeptical members of the team to design a list of more direct questions they would ask in the last 15 minutes of the session. The interview prompt was:  

>You've won a week-long, all expenses paid dream vacation to wherever you want most want to go. The only catch: I have to replace you while you're gone and I have never worked in recruiting. In our time together, you need to show me everything I would need to know to fill-in for you for a week.

The the post-interview questions were too specific to post here. My team, including the engineers, helped me conduct the research and learned first hand how much one can learn without directly asking the questions one is trying to answer. It was not uncommon that most of the post-interview questions had been answered in the interview portion of the session. 

{% case-summary-image, "center", "/portfolio/imgs/simppler/recruiter_language.png", "/portfolio/imgs/simppler/recruiter_language_mobile.png" %} 
  A poster defining the language used by the Simppler application to discuss the people represented in the system. Prospect: Every non-user person in the Simppler system, Lead: a prospect identified as a potential candidate by the Simppler System, Endorsement: a prospect with an employee evaluation of fitness, Referral: a prospect with an employee evaluation of fitness, a resume on file, and who has given consent to be a candidate, Candidate: a prospect who had been formally moved into the hiring process by a recruiter. 
{% endcase-summary-image %}

## A new way to work
{% case-summary-image, "right", "/portfolio/imgs/simppler/card_modules_400px.png", "/portfolio/imgs/simppler/card_modules_mobile.png" %} 
  A screen capture of the Card Modules page from the SandwichUI design system. The page describes and shows examples of Action Bar components used in the Simppler prospect cards when those cards are in different states. The examples shown are: Action Bar Employee Contacted bar, Action Bar Employee Recommend bar, Action Bar Employee Referral Request, Action Bar Employee Referred bar, Action Bar Message bar
{% endcase-summary-image %}

My team at Simppler wasn't a traditional design or engineering team. Because we were so small, I had to find a way to get the most out of the five of us. One thing a lot of companies don't realize is having a single, siloed designer is a terrible way to get good design work, yet that is often the setup at most small companies. I brought the engineering team into the research ideation process, taking advantage of their experience and insights. This meant we broke with their expected system of "design draws a picture of it, engineering builds the picture." I did this because the team's ideas were stronger than any individual's and because it was simply not possible to move as quickly as we needed when design was a bottleneck on the process. Design-driven means everyone is designing to drive the process. To support this, I quickly put together a very lean, simple design system, SandwichUI. It allowed design to work quickly and at low fidelity outside creating new patterns for the system and let engineers make their own UI decisions with design reviewing instead of dictating. SandwichUI allowed us move faster than any team I've ever worked on, because we fully utilized every team member's expertise. 

## Research-backed changes
The whole team, including engineers, worked in the ideation phase of the process to form the design we would take to the other internal stakeholders. Our research lead us to propose three major changes to the new Simppler application. 

### Focus on Recruiters
{% case-summary-image, "left", "/portfolio/imgs/simppler/employee_mobile_500px.png", "/portfolio/imgs/simppler/employee_mobile_mobile.png" %} 
  A screen capture of the Simppler employee referral application in it's mobile phone-sized view. A menu bar consisting of the company logo and a stacked "dot menu" at the top, a single prospect card is scrolled into view in the middle area, which makes up most of the image, a tab bar showing the options "Recommendations" and "Referrals" is at the bottom of the image. 
{% endcase-summary-image %}

This was a fairly controversial decision. Recruiters loved the access to the shared social graph of everyone in the company, but they didn't feel like having the employees pick people was worthwhile to them. Simppler initially made it too easy for employees to dump hundreds of unqualified referrals on a recruiting team all at once. To my team, shifting focus to recruiters seemed like an obvious change. Everyone else was not so convinced. The employee aspect of the system was considered to be Simppler's key differentiator. It was the part of the pitch that got investors excited. It had been there from the beginning and it was hard to let go of. We compromised. We deemphasize the employee tools instead of removing them outright. This took the form of optimizing the employee application for connecting to social networks and displaying notifications about activity with people in an employee's network. In the recruiter application, we refocused our recommendations engine to create a new "Leads" section that provided recommendations from the combined network of all the employees in the company.

### Change the presentation of referrals

In the conversations we had with recruiters, one of the most consistent things we heard about Simppler was: "I've stopped using it because I just ended up on LinkedIn anyway." When we dug into this it turned out that the recruiters were all trying to answer these questions as quickly as possible:

- "Have they done this job before?"
- "Are they on an upward career trajectory?"
- "Are they a job hopper?"
- "Did they go to a top-tier school for their field?"

We decided this information needed to be what we showed first about every candidate we displayed. We landed on the idea of presenting each candidate as a "mini-resume card" and developed a set of metrics we could calculate and display to answer the recruiter's questions at first glance. This was also a controversial decision. Some in the company were not comfortable with these questions and felt they were unfair. After much discussion across the whole company, we came to a design everyone could get on board with: We would display raw job data: where someone had worked, what their title was, how long they had worked there, where they went to school. This left the judgement to the recruiters, which addressed the concerns about fairness internally.

{% case-summary-image, "center", "/portfolio/imgs/simppler/card_wires.png", "/portfolio/imgs/simppler/card_wires_mobile.png" %} 
  A wireframe image showing the simplified design artifacts used. The wireframe consists of simple rectangular boxes and red text describing the makeup of the four recruiter application prospect card types. The cards are all different heights and laid out horizontally. 
{% endcase-summary-image %}

### Change the organization of the app
{% case-summary-image, "left", "/portfolio/imgs/simppler/new_IA_400px.png", "/portfolio/imgs/simppler/new_IA_mobile.png" %} 
  A wireframe showing the organization of the Simppler Recruiter application. The wireframe consists of three rectangular boxes labled: Talent, Jobs, and Reports. Each box contains smaller boxes representing the sub-sections of the application.
{% endcase-summary-image %}

The original Simppler application was organized like an email inbox, with newly referred candidates on the top of the list and older ones below. This contributed to the feeling that the app was too noisy and it made it hard to understand where a referral was coming from or where they were in the process. We decided to make the organization of the app mirror the life cycle of a referral candidate. This made it easy to know the status of a candidate and  gave everyone a clear view of the referral pipeline that ran through Simppler and into the Applicant Tracking System (ATS). 

## Unexpected outcomes
By it's original goals, Project Phoenix was a success. The changes we made to the Simppler app extended our runway another nine months. Unexpectedly, we uncovered deeper problems that we couldn't solve before we ran out of funding. Despite those failures, I am exceptionally proud of the team, the work we did, and the processes I designed to get us designing together. We embraced being design-driven by including everyone in the design process and playing to their strengths. 

## Related links
- [SandwichUI system archive](http://sandwich.njpp.co/)
- [SandwichUI case summary](/portfolio/sandwich-ui/)