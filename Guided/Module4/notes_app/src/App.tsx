import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import { data } from "./data"
import Split from "react-split"
import {nanoid} from "nanoid"

export default function App() {
    
    const [notes, setNotes] = React.useState<any[]>(() => JSON.parse(localStorage.getItem("Notes")!) || [])
    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ""
    )

    React.useEffect(() =>{
        localStorage.setItem("Notes", JSON.stringify(notes))
    }, [notes])
    
    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here"
        }
        setNotes(prevNotes => [newNote, ...prevNotes])
        setCurrentNoteId(newNote.id)
    }
    
    //update the body with the next text and put the most recently modified note to the top of the list.
    function updateNote(text: String) {
        setNotes(oldNotes => {
            let tempArray = []
            for(let i = 0; i < oldNotes.length; i++){
                const oldNote = oldNotes[i]
                if(oldNote.id === currentNoteId){
                    tempArray.unshift({ ...oldNote, body: text })
                } else{
                    tempArray.push(oldNote)
                }
            }
            return tempArray
        })
    }
    
     function deleteNote(event: { stopPropagation: () => void }, noteId: any) {
        event.stopPropagation()

        //look at all oldNotes, and we are going to filter that array. If the note that we are looking at is NOT the one we are looking to
        //delete, then we keep it in the array.
        setNotes(oldNotes => oldNotes.filter((note) => note.id !== noteId))

        //also works but longer and takes more time.
        // setNotes(oldNotes => {
        //     let tempArray: any[] = []
        //     for(let i = 0; i < oldNotes.length; i++){
        //         const oldNote = oldNotes[i]
        //         if(oldNote.id === noteId){
        //             continue
        //         }else{
        //             tempArray.push(oldNote)
        //         }
        //     }
        //     return tempArray
        // })
    }
    
    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }
    
    return (
        <main>
        {
            notes.length > 0 
            ?
            <Split 
                sizes={[30, 70]} 
                direction="horizontal" 
                className="split"
            >
                <Sidebar
                    notes={notes}
                    currentNote={findCurrentNote()}
                    setCurrentNoteId={setCurrentNoteId}
                    newNote={createNewNote}
                    deleteNote={deleteNote}
                />
                {
                    currentNoteId && 
                    notes.length > 0 &&
                    <Editor 
                        currentNote={findCurrentNote()} 
                        updateNote={updateNote} 
                    />
                }
            </Split>
            :
            <div className="no-notes">
                <h1>You have no notes</h1>
                <button 
                    className="first-note" 
                    onClick={createNewNote}
                >
                    Create one now
                </button>
            </div>
            
        }
        </main>
    )
}
