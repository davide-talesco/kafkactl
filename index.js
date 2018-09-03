#!/usr/bin/env node

require('yargs')
  .command(require('./commands/consume'))
  .help()
  .argv