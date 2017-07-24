'use strict';

const fractal = module.exports = require('@frctl/fractal').create();
const mandelbrot = require('@frctl/mandelbrot');

const customTheme = mandelbrot({
  skin: 'blue',
  panels: ['notes', 'html', 'view', 'context', 'resources', 'info'],
  styles: [
    'default',
    '/css/identity-style.css',
    '/css/identity-style-min.css',
    '/css/main.css'
  ]
});

fractal.set('project.title', 'login.gov pattern library');

fractal.components.set('path', __dirname + '/docs/src/components');
fractal.components.set('default.preview', '@preview');
fractal.components.set('statuses', {
  brianhurst: {
    label: "Blocked – for Brian Hurst review",
    description: "Brian Hurst should review.",
    color: "#be4900"
  },
  review: {
    label: "Ready for review",
    description: "Ready for another team member to review.",
    color: "#f4b400"
  },
  draft: {
    label: "In progress",
    description: "Work in progress. Use with caution.",
    color: "#ccc"
  },
  ready: {
    label: "Ready",
    description: "Accessibility review finished, usability review finished, documentation complete.",
    color: "#0baf00"
  },
  deprecated: {
    label: "Deprecated",
    description: "Component exists only for backwards compatibility and will be removed in the near future.",
    color: "#8e8e8e"
  }
});

fractal.docs.set('statuses', {
  draft: {
    label: "Draft",
    description: "Work in progress. There may be gaps in this documentation.",
    color: "#f4b400"
  },
  ready: {
    label: "Ready",
    description: "Reviewed and considered reasonably complete.",
    color: "#0baf00"
  }
});

fractal.docs.set('path', __dirname + '/docs/src/docs');

fractal.web.set('static.path', __dirname + '/docs/assets');
fractal.web.set('builder.dest', __dirname + '/docs/build');

fractal.components.engine('@frctl/nunjucks');
fractal.components.set('ext', '.html');

fractal.web.theme(customTheme);
