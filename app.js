console.log('Starting App');
const fs = require('fs');
const yargs = require('yargs');
const Note = require('./modules/notes.js');

var argsv = yargs.argv;

var command = process.argv[2];
if(command === undefined){
	console.log('No command');
}
if(command === 'add'){
	var newNote  = new Note(argsv.title, argsv.description);
	newNote.add();
} else if(command === 'read'){
	var newNote = new Note(argsv.title);
	newNote.read();
} else if(command === 'delete'){
	var newNote = new Note(argsv.title);
	newNote.delete();
} else if(command === 'list'){
	notes = new Note();
	notes.listAll();
} else {
	if(command){
		console.log('command not recognized');
	}
}
let d = new Date();
console.log(d.getDate() +"-"+ d.getMonth() + "-" + d.getFullYear());
console.log('Happy New Year Today');
