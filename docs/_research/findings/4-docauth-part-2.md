---
title: 4 - DocAuth Part 2
lead: >
  Testing the IAL2 account creation process
---

## Background

In July 2019, users were asked to go to [the sandbox server](https://sp-rails.int.identitysandbox.gov/?ial=2) and create an IAL2 login.gov account. This included the create an account process and the identity verification process.

## Observations

### Create an account
- The create an account link is not easy to find.
  - Four of six users had trouble finding the “Create an account” link
  - One user tried to create an account with the “Use government employee ID” link
  - One user was distracted by the many other links on the sign in page
- Users were not sure what the 2FA options meant.
  - “It would’ve been nice to have examples of the authentication app so I knew what it was”
- The first 2FA confirmation screen prepared users for the second 2FA.
  - Users read the screen and knew that they needed a second 2FA next.
- The backup codes warning screen was confusing.
  - Some users thought it was a bug.
  - One user read through the content and still clicked on the button thinking it was to continue, not go back.

### Verify your identity
- Users don’t differentiate the IAL1 and IAL2 processes.
  - Users relate what they did to set up their 2FA with what they do for IAL2 and think they are doing duplicative work when entering their phone number and password again.
  - It’s not clear that they have an IAL1 account if they reach the IAL2 process and leave without finishing it.
    - They don’t know what will happen if they leave and come back. Some users think that they are canceling the whole account creation if they close out during the IAL2 process. One user had different expectations for saved progress depending on the government application they were creating an account for.
    - One thought that they set up four or five MFAs, but also said it was all to verify their identity. “I verified my identity too many times.”
    - It was unclear if “Start over” meant restarting the whole process of or just the identity verification process.
  - After scanning the IAL2 introductory page, one user thought they’d either upload their ID or enter their SSN, but not both.
  - This made the process feel longer to users.
- Users understand that they have to upload an image of their state ID.
  - Users understood that choosing computer would mean using a file picker to upload images of their ID.

- Users don’t know what to expect with the phone option, but some would choose it anyways.
  - Two of six users would choose the phone option even though they didn’t understand what the process would be.
    - The users that would choose phone expected it to be easier and safer. “I don’t keep files of my ID on my computer, so I would need to take a picture with my phone.” “It’s too hard to get something from my phone to the computer.”
  - One user thought they’d receive a text to the phone number that they set up for 2FA.
  - One user thought choosing phone let them use their computer camera, since they’re on their computer and not their phone.
  - One user thought they had to choose computer because that’s what they were already using.
- The ‘upload from your computer’ flow was intuitive.
  - “This looks like what I would expect.”
  - They would use their phones to take a picture of their ID and transfer it to their computer by airdrop or email.
  - They expect to be able to upload a .jpg or .png and expect it to be read by a computer, not a person.
- The preview image of the document was helpful to users.
 - “I like that it is showing me the image of what I uploaded before I click continue.”
 - Seeing the image allowed users to make sure it was the right document.
- The progress indicator was helpful for one user with low upload speed.
  - On the upload screen, they clicked on the tips to see what it says about uploading.
  - I would use my phone to take a picture and the photo would automatically sync to the cloud. Then I can pull it from the cloud over. \
- All users took the time to read their information on the personal information page and make sure it was right.
  - Users understood that “Change” will let them edit a field. One user expected to use it if their driver’s license has an old address.
  - One user wondered how login extracted the information. “Is it from the driver’s licence or OCR?”
- The success page makes users think that they’re all done with identity verification.
 - Users expressed excitement that they were done and later surprised to go through three more screens.
- Users liked that their 2FA phone number was pre-populated, but the screen was confusing.
  - Users did not understand why they were being asked for their phone number.
  - One user thought it was asking for the same number they entered for 2FA. “It can’t be a web phone number. This is a google voice number, but why didn’t you tell me that earlier.”
  - “That’s nice that they pulled my phone number forward”
  - “‘We found records matching your phone of record’ made me think that there was already an account on login.gov that has my phone number.
- Users understood that they needed to re-enter their password.
  - Users didn’t understand why they were asked to do this, but it didn’t matter to them.
  - Some users just wanted to get to the end so they were not paying attention to details.
  - “I’m not sure how confirming my password will help encrypt it.”
- The personal key screen is confusing and users don’t expect to type it in after clicking continue.
  - Most users did not read the personal key screen.
  - One user read it and was not sure what it was for. They expect to be asked for it every time they sign in.
  - One user said they only keep personal keys 30-40% of the time. Others saved it with their passwords and backup codes as secured notes or screenshots (in password managers or folders on their computer).
- Users don’t know what will happen when they click “Cancel” or “Start over”
  - Users didn’t know how to go back to a previous screen. They wondered if clicking “Cancel” would take them backwards or cancel out.

### Prototype
- Uploading the front and back of the ID on the same page felt more seamless.
  - “It feels like fewer steps. If I am already going through the MFA, SSN, etc., fewer steps feels better for me.”
  - “When they are both on one page, it seemed clear that you needed both the front and the back. When they are not on the same page, I don’t expect you to ask for the back.”
- Clicking on the image to remove an image was not intuitive.
  - Users thought they needed to click on “Cancel”
  - Some users accidentally saw the hover state and realized that they could click on any part of the image. “Ooh, I would not expect that! I would expect an X on the right side or something.”
