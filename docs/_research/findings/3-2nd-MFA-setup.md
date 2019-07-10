---
title: 3 - Two MFA Setup
lead: >
  MFA setup process when creating an account
---

## Background

In June 2019, users were asked to go to https://idp.int.identitysandbox.gov/ and create a login.gov account. This included entering and confirming an email, creating a password, and choosing and setting up two 2-factor authentication methods (one primary and one backup).

## Observations

### Create an account process
- **Sign in page**
  - Users had trouble finding the create an account link.
  - One user clicked on the privacy statement and noted that it is not clear if this policy is for  login.gov or the government application they were signing in to.
- **Entering and confirming email address**
  - Entering an email address was intuitive to users.
  - Waiting for the email address confirmation email took a long time and caused one user to lose focus.
  - In the email address confirmation email, the button looked non-clickable plain text to users.
  - One user mentioned that confirming their email address before all of the other steps, rather than at the end of the process, was an unusual experience. They noted that usually, confirming an email signifies that the process is done and recommended sending the confirmation email at the beginning but not requiring users to confirm it until the end of the account creation process.
- **Creating a strong password**
  - When creating a password, users did not see help info that was hidden in the accordion and had trouble creating a strong password.
  - Only one user used a password manager (Keypass).

### First 2FA set up
- **General**
  - All users understood what the first 2FA screen was and what they were supposed to do.
  - Users made decisions based on the idea that it was the only 2FA they could set up.
    - One user was concerned that the first 2FA they chose had to be an item they’d always have access to in the future (including having cell phone service when abroad).
    - One user didn’t choose to use their PIV/CAC card because they don’t carry it with them outside of a work setting.
- **Phone option**
  - Three of the four users chose phone because it’s
    - At the top of the list
    - Pre-selected (it must be the best option since login.gov is suggesting it)
    - Convenient - they already have a phone on them
    - Familiar (they’ve used it before or have not heard of the others)
    - One user was weary of choosing phone because they worried that they would not be able to sign in if they did not have service in the future (they set it up anyways)
  - One user did not choose phone because
    - They knew it wasn’t one of the most secure methods of authentication
    - They had other more secure options in their possession (PIV/CAC and security key)
  - Setting up phone was generally intuitive for users except for the following:
    - One user saw the default check box and did not understand why it was there or what it meant in the context.
    - When entering their security code, one user did not understand the “Remember this browser” check box in this context.
- **Authentication application option**
  - No user chose authentication application because they
    - Didn’t know what it is or are not comfortable using it
    - Opted for other options instead
- **Security key option**
  - Three of the four users did not know what a security key is.
    - One user who knew what a security key is, had one and was excited to use it because
  - It is reliable -- they will always have it with them and it’s not something that changes easily.
  - The user who had a security key was able to set it up easily.
- **PIV/CAC card option**
  - One user chose PIV/CAC card because it was already connected to their laptop.
  - One user decided not to use their PIV/CAC card because it is not something they have with them outside of a work setting.
  - One user did not want to use their PIV/CAC card because they wanted to keep things separate from work.
- **Backup codes option**
  - No users chose backup codes
    - One user noted that they will lose their backup codes

### Backup 2FA set up
- **General**
  - All users had to take time to read the page and understand that they were not taken back to the first 2FA setup screen again. The initial feeling was that the first 2FA set up did not work and they were stuck in a loop.
  - When users realized that they were setting up a backup 2FA
    - Two users were happy to have the backup in case they ever can’t use the first one
    - One user didn’t like this because they did not want to set up a second 2FA
  - One user just clicked Continue trying to skip this step. Since phone was pre-selected, they unknowingly started the phone 2FA setup flow. They entered the same phone number that they just set up. They got confused about why they couldn’t continue and mentioned that they’d like to use text as the first 2FA and voice as the backup 2FA, with the same phone number.
  - One user asks if the method they choose here will be required every time they sign in or only when they don’t have the first 2FA (the backup codes generation page says each time they sign in).
- **Backup codes option**
  - Two users chose backup codes because they are familiar with using them on other applications (like GitHub and Twitter).
  - One user has a designated folder for backup codes on their laptop and save them there.
- **PIV/CAC option**
  - One user wanted to use PIV/CAC but didn’t have a card reader
  - One user chose PIV/CAC because they have it easily available and it is what they use to sign in to their computer. They find the setup process “smoother than expected”.
- **Authenticator application option**
  - One user chose authenticator app but later found it confusing and gave up.
  - They clicked on the learn more link and read the FAQ page and downloaded an authenticator app onto their laptop. When the app asked them to scan the QR code, they could not find it because it was hidden in the accordion. It took them some time to understand how to type in the code instead. Then, they gave up and went back to choose another method.

### New recommended 2FA screen
- **Recommended tags**
  - Users liked the recommended tags. It made it easier for them to evaluate and make a decision.
  - One user noted that the term “Recommended” may not be strong enough.
- **Tooltips**
  - One user expected the tooltips to give more information on how you can actually use something rather than why it’s recommended or what it is.
  - Two user expected the tooltip to answer why it was recommended
  - One user noted that the tooltips have too much text.
- **Learn more**
  - One user stated that the “learn more” link was confusing because it linked out to another page. They expected it to open up as an accordion.
- **Detected platform**
  - One user suggested showing only the detected platform and hiding all of the other options.
  - Users were confused by the detected platform. One suggested changing the text to “Use your connected ______” so users understand that the device is the one they have.
  - One user found it confusing to see the detected security key and also the general security key option next to it. “What if I choose the general option? Will I be able to use this?”
- **Additional feedback**
  - Users think about their accounts as work vs personal. They keep their work and personal phone numbers, email addresses, and PIV/CAC cards separate from each other (example: their work account uses their work email address, work phone, and work PIV/CAC card; their personal account does not use their work PIV/CAC card).
  - Users would have liked to see steps on the pages or a progress bar so they knew where they were in the process.

## Actionable Improvements
- **Create an account process**
  - Make the “Create an account” link more noticeable.
  - Be clear about the difference in roles between login.gov and the government application the user is signing in to (both in terms of privacy and general purpose).
  - Explore ways to move the email address confirmation step so users don’t have to click out of the create an account process.
    - Potentially have them enter their email address in the same place, but allow them to confirm at the end (after backup 2FA setup)
  - Improve email address confirmation email so the “Confirm email” button looks like a button.
  - Make password tips always visible and prevalent, and make them more scannable.
  - Add steps or a progress bar to the entire create an account flow.
  - When we add multiple email addresses, make it clear to users that they can have a single login.gov account that still keeps their personal and work information separate within the government applications they are signing in to.
- **2FA set up**
  - Make it clear up front that users will be able to set up more than one 2FA, so that they can more easily make a decision for their first 2FA and to encourage them to use the safer options that may they may not always carry with them.
  - Be more informative and educational about each 2FA option
    - What is a security key? What is an authentication app?
    - How do I set up/obtain a security key? How do I set up/obtain an authentication app?
  - Stop auto-selecting phone so users don’t think it is the preferred option.
  - Consider moving the more secure options to the top of the page.
  - Make it clear that the user successfully completed the first 2FA set up and that they must now set up a backup 2FA, so that they do not think that they are in a loop.
  - On backup 2FA page, disable the “Continue” button until they select an option OR allow users to continue without a backup 2FA.
- **Individual authentication method set up flows**
  - Review the phone set up flow’s “Default” and “Remember this browser” check boxes to see if they are helpful or confusing
  - Don’t hide the authentication app QR code in an accordion.
  - Improve backup codes generation screen so users do not think they will always have to enter a code, even when it is their backup 2FA. (Make sure that this confusion does not occur in other flows.)
- **New recommended 2FA page**
  - Implement the “Recommended” tag as-is.
  - Edit the tooltip content to answer “Why is this recommended?”. Consider using “Most secure” as simplified text.
  - Consider making the “Learn more” link an accordion instead of a link-out. Also consider remaining it “What is this?”.
  - Consider adding a separate screen for detected platforms that appears before the first 2FA set up screen: "We noticed you have this available, do you want to use it?", “Yes” to set it up and “No” to go to the first 2FA options screen.
