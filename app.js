// core modules --> npm packages --> local files
const yargs = require('yargs') 
const chalk = require('chalk') 
const notes = require('./notes.js') 

// Customize yargs version
yargs.version('2.0.0') 

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => { notes.addNote(argv.title, argv.body) }
}) 

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => { notes.removeNote(argv.title) }
}) 

yargs.command({
    command: 'list',
    describe: 'Listing a note',
    handler: () => { notes.listNotes() }
}) 

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => { notes.readNote(argv.title) }
}) 

yargs.parse() 
