---
title: Overview
status: ready
---

## Purpose

- Document best practices.
- Outline **when**, **where**, **why**, and not just **how** to use these patterns.
- Provide a testing area for prototyping and building new patterns.


## Hierarchy

We use a hierarchy of patterns. Each layer is composed together to form patterns
at each higher layer. Here's an overview of these different patterns.

Together these can be used to prototype how new patterns (or pattern changes)
would affect the app from within the pattern library.


### Base
the low level variables (rules, essentially) that patterns are built from.
These low level variables are also expressed as utility classes. Utility
classes allow rapid prototyping without the necessity of altering existing
classes or creating new ones. It allows you to build new components without
altering the production CSS.<br/>
**Examples:** Height, width, color, typography, etc...

### Components
Components are small basic building blocks that are used to build larger
features.<br/>
**Examples:** Buttons, icons, loading action, etc...

### Features
Features are complete groups of functionality, built from multiple
components.<br/>
**Examples:** Panels and cards

### Pages
Complete views built from features and components.<br/>
**Examples:** Overview, dashboard, application page, etc...
