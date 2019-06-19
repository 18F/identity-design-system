---
title: 2 - Document Authentication
lead: >
  Recommendations from usability testing early prototypes of document authentication
---

## Summary

In May 2019 an we sent out an early version of our document authentication flow to a number of users along with some sample drivers licences that could be used to test the flow.

## Findings

We received feedback asynchronously about how the process went and made a couple of findings.


### Item 1 - Taking better photos
#### Observation
A number of users noted that while they were asked to provide a "good" photo of their drivers license, they didn't know what that meant and were not confident as to whether they provided would be accepted.

#### Potential Solution
Possibly give an example of what a "good photo" looks like in the interface. Indicate things like taking a photo on a dark background, position the camera to reduce glare, and others through written suggestions or illustrations before the user is asked to take the photo instead of waiting until a "bad photo" is uploaded and asking the user to correct it.

### Item 2 - Better photo uploads
#### Observation
If you're on a slow connection the drivers license upload process could take a while and there's currently no indication that the upload process is happening so users may think that it's not working.

#### Potential Solution
Create a progress indicator to show that an upload had started and is being processed. We currently have a "spinner" component that could serve this need but may want to develop something that indicates progress instead of just a binary "uploading" or "not uploading".

### Item 3 - Many steps, not sure when it may end
#### Observation
"There were a lot of questions and information to read and it was a bit time consuming"
#### Potential Solution
We could do a better job about setting expecations before users start their journey. Consider outlining the steps that they will be going through or have some kind of progress indicator to let users know how many more steps there will be.
