
# Status

The **status** component is used throughout the app to indicate a status of
severity. They are used to assign a status related to CloudFoundry application
health or other status messages. Additionally, the status component will
capitalize it's text to ensure consistency in status messages.

| Status   | Description                                                    |
| ------   | -----------                                                    |
| inactive | Neutral state.                                                 |
| ok       | Things are at their best.                                      |
| warning  | Something is not right, might want to call attention.          |
| error    | Something is definitely not right and requires some attention. |


## Use

To use the **status** component, wrap the status message in any text tag, `span`,
`p`, `h`, with the `status` class and any appropriate modifier `status` class.

There are some "helper" modifiers that map to four core statuses for
convenience. For example, common application state values are mapped.
