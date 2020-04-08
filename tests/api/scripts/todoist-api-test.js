const newman = require('newman');
const collections = require('../collections/todoist.collection.json');
const environments = require('../collections/todoist.environment.json');

newman.run(
  {
    collection: collections,
    environment: environments,
    reporters: ['cli', 'html'],
    reporter: {
      html: {
        export: './tests/reports/api/todoist-report.html',
      },
    },
  },
  function results(err) {
    if (err) {
      throw err;
    }
  },
);
