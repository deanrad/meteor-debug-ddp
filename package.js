Package.describe({
  name: 'deanius:debug-ddp',
  version: '1.0.5',
  summary: 'Shows all of your DDP Messages in your browser console.',
  git: 'https://github.com/chicagogrooves/meteor-debug-ddp.git',
  documentation: 'README.md',
  debugOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.5');
  api.addFiles('meteor-debug-ddp.js', ['client']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('deanius:debug-ddp');
  api.addFiles('meteor-debug-ddp-tests.js');
});
