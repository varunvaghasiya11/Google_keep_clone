import { createSlice } from '@reduxjs/toolkit'
import { getdata, setdata } from './local-storage'

const counterSlice = createSlice({
    name: 'Notes',
    initialState: {
        notes: getdata('notes'),
        trashNotes: getdata('trashNotes'),
        note: null
    },
    reducers: {
        addnote: (state, action) => {
            state.notes.push(action.payload);
            setdata('notes', state.notes);
        },
        deletenote: (state, action) => {
            const noteToTrash = state.notes.find(note => note.id === action.payload);
            if (noteToTrash) {
                state.trashNotes.push(noteToTrash);
                state.notes = state.notes.filter(note => note.id !== action.payload);
                setdata('notes', state.notes);
                setdata('trashNotes', state.trashNotes);
            }
        },
        editnote: (state, action) => {
            state.notes = state.notes.map(note => note.id === action.payload.id ? { ...note, ...action.payload } : note);
            setdata('notes', state.notes);
        },
        pinnote: (state, action) => {
            state.notes = state.notes.map(note => note.id === action.payload ? { ...note, pinned: !note.pinned } : note);
            setdata('notes', state.notes);
        },
        restorenote: (state, action) => {
            const noteToRestore = state.trashNotes.find(note => note.id === action.payload);
            if (noteToRestore) {
                state.notes.push(noteToRestore);
                state.trashNotes = state.trashNotes.filter(note => note.id !== action.payload);
                setdata('notes', state.notes);
                setdata('trashNotes', state.trashNotes);
            }
        },
        deleteforever: (state, action) => {
            state.trashNotes = state.trashNotes.filter(note => note.id !== action.payload);
            setdata('trashNotes', state.trashNotes);
        },
        setnote: (state, action) => {
            state.note = action.payload;
        },
        togglearchive: (state, action) => {
            state.notes = state.notes.map(note => note.id === action.payload ? { ...note, isArchive: !note.isArchive } : note);
            setdata('notes', state.notes);
        }
    }
})

export const {addnote, deletenote, editnote, pinnote, restorenote, deleteforever, setnote, togglearchive} = counterSlice.actions;
export default counterSlice.reducer;