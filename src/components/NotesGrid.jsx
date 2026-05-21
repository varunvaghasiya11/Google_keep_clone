import React from 'react'
import NoteCard from './NoteCard'

function NotesGrid({ notes, isGrid, onPin, onDelete, onEdit, isTrash, onRestore, onDeleteForever, onArchive }) {
  return (
    <div className={isGrid ? 'notes-grid' : 'notes-list'}>
      {notes.map(note => (
        <NoteCard
          key={note.id}
          note={note}
          onPin={onPin}
          onDelete={onDelete}
          onEdit={onEdit}
          isTrash={isTrash}
          onRestore={onRestore}
          onDeleteForever={onDeleteForever}
          onArchive={onArchive}
        />
      ))}
    </div>
  )
}

export default NotesGrid
