---
title: Prose
lead: Format a block of running text.
---

{% include helpers/base-component.html component="prose" %}

# H1

A body paragraph: Login.gov encrypts the personal information of each user separately, using a unique value generated from each user’s password. Our encryption method works like a safe deposit box in a bank vault. Only the user has the key. Only the user can open the box to reveal the contents. Only the user knows the password, and only the user can decrypt their information

It’s hard to break into the “vault” or database. Login.gov implements the latest National Institute of Standards and Technology (NIST) standards for secure authentication and verification. Our plans for ongoing security include regular penetration testing and external security reviews.

## H2

Individual accounts get a double layer of security. We require two-factor authentication as well as strong passwords that meet new NIST requirements. Two factor authentication requires that you login with your password and a code that we send to your phone.

We will evaluate and implement new authentication methods as they become widely available to make sure that login.gov remains accessible and secure.

### H3

Encrypting personal data separately means that login.gov cannot share any information with other government entities without users’ permission. Not even database administrators can decrypt a user’s personal information without the user’s password.

#### H4

We welcome external review of our privacy-protection measures. All of our code is available for public inspection in an open-source repository. Our goal: make sure that at every step users know their privacy is being protected by design.

##### H5

For more information, please visit the Help Center or contact us. You can also visit our open-source repository.

###### H6

Dedicated teams of UX and security experts will continuously improve it.

This is an ordered list

1. This is the first item in an ordered list
2. This is the second item in an ordered list

This is an unordered list

- This is the first item in an unordered list
- This is the second item in an unordered list

This is a [text link](?{{ site.time | date: "%s%N" }}) on a light background, using the LDGS primary-blue color

This is a <a href="{{ site.baseurl }}" class="usa-link usa-link--visited">visited text link</a>, using the USWDS setting (#54278F)

This is a link that goes to an <a href="{{ site.baseurl }}" class="usa-link usa-link--external">external website</a>.

<div class="usa-section--dark padding-1">
  This is a <a href="?{{ site.time | date: '%s%N' }}" class="usa-link">text link</a> on a dark background
</div>
