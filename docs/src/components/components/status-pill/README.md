
# Status Pill

The **status pill** component is a way to communicate status of various application functions.

## Use

To use the **status pill** component, use the @extend `.status-pill` within the SCSS.

```scss
.stat-error,
.stat-warning {
  &::before {
    @extend .status-pill;
  }
}

.stat-error {
  &::before {
    border-color: $color-error;
  }
}

.stat-warning {
  &::before {
    border-color: $color-warning;
  }
}
```
