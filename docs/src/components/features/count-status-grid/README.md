# Count Status Grid

### Why is this pattern needed?
A more descriptive count status would give a better quick read of the status of entities within a parent. It would more clearly show the number of entities in error.

### Description
This is a prototype for a more descriptive count status. It displays bars equal to the count of the specific entity (space, app, service) and color-codes by `error` and `ok` status for apps and services. The icon is red if there are errors, otherwise it is green.

Spaces are shown as black bars with a black icon.

If there are none of a specific `entityType`, the count status gets a single cream-colored bar and the icon is black.

### Variables
This component accepts the following values:
- **entityType** (the kind of entity; `service`, `app`, or `space`)
- **entityCount** (the number of entities in the parent container)
- **errors** (the number of entities in an error state)

### Variants shown
- **default** A space count of 1
- **space** A multiple space count
- **app-none** An app count with no apps
- **app-ok** An app count with no apps in error
- **app-error** An app count with some apps in error
- **app-error-xxl** An app count with many apps in the parent
- **service-none** A service count with no services
- **service-ok** A service count with no services in error
- **service-error** A service count with some services in error

### Known issues
The pattern begins to break down at ~20 entities, when the bars get very narrow.

### Additional elements for development
None
