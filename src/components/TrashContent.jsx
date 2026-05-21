import React from 'react'
import { useDispatch } from 'react-redux'
import { restorenote, deleteforever } from '../Redux/counterslice'
import NotesGrid from './NotesGrid'

function TrashContent({ trashNotes, searchTerm, isGrid }) {
  const dispatch = useDispatch()

  const handleRestoreNote = (id) => {
    dispatch(restorenote(id))
  }

  const handleDeleteForever = (id) => {
    dispatch(deleteforever(id))
  }

  const filteredNotes = trashNotes.filter(n => {
    if (!searchTerm) return true
    return n.title.toLowerCase().includes(searchTerm) || n.body.toLowerCase().includes(searchTerm)
  })

  return (
    <div className="main-content">
      <div className="content-wrapper">
        <div style={{ padding: '0 16px 16px', fontStyle: 'italic', color: '#5f6368', textAlign: 'center' }}>
          Notes in Trash are kept around until you delete them forever.
        </div>
        
        {filteredNotes.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">🗑️</div>
            <div>No notes in Trash</div>
          </div>
        ) : (
          <NotesGrid
            notes={filteredNotes}
            isGrid={isGrid}
            isTrash={true}
            onRestore={handleRestoreNote}
            onDeleteForever={handleDeleteForever}
          />
        )}
      </div>
    </div>
  )
}

export default TrashContent
