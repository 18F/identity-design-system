---
title: 1 - Flow diagrams
lead: >
  Recommendations from usability testing some user flow diagrams
---

## Summary

In an effort to better communicate how the login.gov service communicates with third party providers and managers user data, the team created two different graphics to demonstrate how the login services work. We tested these two diagrams with a few users to see if they would be understandable to various stakeholders.

![data flow model](/post-images/login--data-flow-model.svg)

![data flow model](/post-images/login--iam-model.svg)

## High level diagram
### Overall
- While engineers recognized that this was likely for a stakeholder audience, one of the PMs found that the language was too jargony to understand the process. To improve the utility of this document to a high-level audience we should ensure the use of concise plain language.
- Viewers wanted to the diagram to better communicate the value to the end-users, as it wasn’t clear why an end-user would prefer login over another approach to authentication. We recommend that we visually communicate the opportunity of Login.gov to improve the user-experience of the public.

### Visual Communication
- For a few viewers, the document was busy which deterred them from wanting to look at the document more clearly. We should utilize more white space, remove as much text as possible, and use a concrete point of focus to bring the viewers eye to the start of the process, and create a visual hierarchy to separate important information from ancillary information.
- The iconography used (the locks) do not immediately convey that the user is unauthenticated/ and then authenticated. Moreover the use of color throughout the document was not consistent and was distracting to the viewers.
- The term relying party perceived as jargony and a few people thought it might be a typo for “relaying”. Another commented that was not clear that this was the potential partner.
- Login.gov wheel/ shield icon did intuitively convey to the viewers that Login.gov sent the users back to the relying party.
- Not all users understood that the returning user was authenticated.

### Other Comments
- People were not sure why this was included: “We deliver world-class identity management and authentication by leveraging a vendor agnostic approach for key Software as a Service (SaaS) providers. Today we use Twilio, but tomorrow may use PinPoint for OTPs.” It appears that this might have conflated some of the discussion of the how with Login.gov which specifics that are too detailed for the intended audience.
- Some viewers appreciated that the diagram differentiated between the partner responsibility of authorization and authentication duty of Login.gov, and we should continue to refine this language as we iterate on the design.
- As a promotional asset we should align this within the Login.gov style guide.

## Data Flow
_This was only shown to the engineers_

### Overall
- Overall developers found this image more confusing and overwhelming than valuable to help them better understand how to use Login.gov
- They thought, however, that this might only be useful as an artifact for an SSP to be included as part of an ATO rather than as a document to help them understand dataflow.
- Viewers were more interested in the basics of what information did they need to supply to Login.gov and what information came back and whether that was configurable.

### Sequencing
- None of the engineers knew where in the diagram to start, only after a few minutes did they find the “1” to find where to start looking at the diagram, we recommend either flushing out the sequence with visual hierarchy or leveraging multiple views of the process unfolding.

### Notation
- Given that the viewers had to reference the legend, we should work toward a diagram that is intuitively understandable with the user of a legend (even if it is still included).
- The Legend states that H is used to mean HTTPS connections, while separately saying that there were TLS connections. This made an engineer uncertain that login.gov was taking security seriously since it suggested that the connections were just over HTTP not HTTPS.
- The zigzaging lines caused viewers to lose sight of where in the flow they were and asked that we remove those additional lines.
- The multiple tables labelled UUID were confusing (especially the 2 on both sides of the data store).

## Both
- Engineers shown both understand that there are different levels for the diagrams and state that the first diagram would be for an executive of stakeholder audience.
