Package.describe({
  name: 'deanius:debug-ddp',
  version: '1.0.5',
  // Brief, one-line summary of the package.
  summary: 'Shows all of your DDP Messages in your browser console.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.5');
  api.addFiles('meteor-debug-ddp.js', ['client']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('meteor-debug-ddp');
  api.addFiles('meteor-debug-ddp-tests.js');
});
