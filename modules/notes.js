var fs = require('fs');
module.exports = class Note {
	constructor(title, description){
		this.title = title;
		this.description = description;
		this.note = {
			title : this.title,
			description : this.description
		}
		try{
			this.allNotes = JSON.parse(fs.readFileSync('./notes-data.json'));
		} catch (e){
			console.log('notes-data.json file do not exists');
			console.log('Creating new empty fiile..');
			this.allNotes = [];
		}
	}
	listAll(){
		console.log('Listing all notes\n');
		this.allNotes.forEach((note)=>{
			console.log(`Title: ${note.title}`);
			console.log(`Description: ${note.description}`);
			console.log(`\n`);
		});
	}
	add(){
		//check for duplicates
		var duplicates = this.allNotes.filter((note)=>this.title === note.title);
		if(duplicates.length !== 0){
			console.log(`Note: ${this.title} already exists`);
		} else {
			//add note to file
			console.log('Adding new note to notes-data.json');
			this.allNotes.push(this.note);
			var result = this.saveNotes(this.allNotes);
			if(result){
				console.log('Note successfully added!');
			}
		}
	}
	read(){
		console.log('Reading note ' + this.title);
		var title = this.title;
		var foundNote = this.allNotes.filter((note) => note.title === title);
		if(foundNote.length < 1){
			console.log('Note ' + title + ' not found');
		} else {
			console.log(`Description: ${foundNote[0].description}`);
		}
	}
	delete(){
		var title = this.title;
		var newArr = [];
		var notesExists = this.allNotes.filter(function(note){
			return note.title === title;
		});
		if(notesExists.length < 1) {
			console.log('Note '+ title +' do not exist');
			return;
		}
		var newArr = this.allNotes.filter((note)=> note.title !== title);
		this.saveNotes(newArr);
		console.log('Note successfully deleted');
	}
	saveNotes(notes){
		//save notes to notes-data.json file
		return fs.writeFileSync('./notes-data.json', JSON.stringify(notes));
	}
}
