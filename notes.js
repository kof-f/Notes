const fs = require('fs') 
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes() 
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        }) 
        saveNotes(notes) 
        console.log(chalk.green('New note added!'))
    } else {
        console.log(chalk.red('Note title taken!')) 
    }
}

const removeNote = (title) => {
    const notes = loadNotes() 
    const remainingNotes = notes.filter((note) => note.title !== title )
    console.log(remainingNotes)

    if (remainingNotes.length === notes.length){
        console.log(chalk.red('That note does not exist! Please check the title.'))
    } else {
        saveNotes(remainingNotes)    
        console.log(chalk.green('The note ' + chalk.bold(title) + ' has been removed!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.bgCyan('Your notes...'))
    notes.forEach( (note) => {
        console.log(note.title)
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    foundNote = notes.find((note) => note.title === title)

    if (!foundNote){
        console.log(chalk.red('That note does not exist! Please check the title.'))
    } else {
        console.log(chalk.cyan(foundNote.title))
        console.log(foundNote.body)
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes) 
    fs.writeFileSync('notes.json', dataJSON) 
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json') 
        const dataJSON = dataBuffer.toString() 
        return JSON.parse(dataJSON) 
    } catch (e) {
        return [] 
    }

}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
} 