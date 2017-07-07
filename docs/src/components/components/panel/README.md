# Panel

Panels are visually separated blocks of information, usually relating to a specifc
Cloud Foundry Entity or a set of Cloud Foundry entities. They are white, set on
a gray background and have space between them top and bottom. They also include
, but don't require, panel headers, a panel title  and panel actions.

## How to use

### Panel header

The panel header is a header bar placed at the top of the panel to display the
panel title along with any support information or actions which relate to the
content in the panel. To use a panel header:

- Create a `header` or other HTML element with a class of `panel-header`.
- Add a Panel title.
- If there is supporting content or actions, add them after the Panel title
  under a `div` with a class of `panel-header-content`. This will ensure these
  items always appear aligned right from the title, but will grow to the left
  depending until they reach eachother.

### Panel title

The panel title is differently styled `h` tag specficially meant to fit within
a panel. It should not be used outside of a panel and should always be used
when naming a panel. To use, simply put the title in an `h2` or lower HTML
element with a class of `panel-title` within the Panel header.

### Panel actions

Panel actions are one or multiple sets of actions that are meant to be performed
on content of the panel. An example would be a "Add new service" button on the
services panel. To use the panel actions, create a `section` or `div` HTML
element with the `panel-actions` class and any modifier panel action classes.
The modifier classes are as follows:

- `panel-actions-right`: Aligns all actions to the right of the panel.
- `panel-actions-both`: Aligns items both to the left and right of the panel.
