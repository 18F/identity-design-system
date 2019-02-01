module.exports = {
  "defaults": {
    "chromeLaunchConfig": {
      "args": ["--no-sandbox"]
    },
    "concurrency": 10,
    "standard": "WCAG2AA",
    "hideElements": [
      // https://github.com/18F/identity-style-guide/issues/49
      ".usa-radio-input:disabled + .usa-radio-label",
      ".usa-checkbox-input:disabled + .usa-checkbox-label"
    ].join()
  }
}
