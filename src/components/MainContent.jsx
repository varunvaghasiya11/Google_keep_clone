import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addnote, pinnote, deletenote, editnote, togglearchive } from '../Redux/counterslice'
import NewNoteBox from './NewNoteBox'
import NotesGrid from './NotesGrid'
import EditModal from './EditModal'

function MainContent({ notes, searchTerm, isGrid }) {
  const dispatch = useDispatch()
  const [editingId, setEditingId] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const handleAddNote = (title, body, color) => {
    const newNote = {
      id: notes.length > 0 ? Math.max(...notes.map(n => n.id)) + 1 : 1,
      title,
      body,
      color,
      pinned: false,
      created: Date.now()
    }
    dispatch(addnote(newNote))
  }

  const handlePinNote = (id) => {
    dispatch(pinnote(id))
  }

  const handleDeleteNote = (id) => {
    dispatch(deletenote(id))
  }

  const handleEditNote = (id) => {
    setEditingId(id)
    setShowModal(true)
  }

  const handleSaveEdit = (title, body, color) => {
    dispatch(editnote({ id: editingId, title, body, color }))
    setShowModal(false)
    setEditingId(null)
  }

  const handleToggleArchive = (id) => {
    dispatch(togglearchive(id))
  }

  const filteredNotes = notes.filter(n => {
    if (n.isArchive) return false
    if (!searchTerm) return true
    return n.title.toLowerCase().includes(searchTerm) || n.body.toLowerCase().includes(searchTerm)
  })

  const pinnedNotes = filteredNotes.filter(n => n.pinned)
  const otherNotes = filteredNotes.filter(n => !n.pinned)

  return (
    <div className="main-content">
      <div className="content-wrapper">
        <NewNoteBox onSave={handleAddNote} />
        
        {filteredNotes.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📝</div>
            <div>No notes found</div>
          </div>
        ) : (
          <>
            {pinnedNotes.length > 0 && (
              <>
                <div className="section-label">Pinned</div>
                <NotesGrid
                  notes={pinnedNotes}
                  isGrid={isGrid}
                  onPin={handlePinNote}
                  onDelete={handleDeleteNote}
                  onEdit={handleEditNote}
                  onArchive={handleToggleArchive}
                />
              </>
            )}
            
            {otherNotes.length > 0 && (
              <>
                {pinnedNotes.length > 0 && <div className="section-label">Others</div>}
                <NotesGrid
                  notes={otherNotes}
                  isGrid={isGrid}
                  onPin={handlePinNote}
                  onDelete={handleDeleteNote}
                  onEdit={handleEditNote}
                  onArchive={handleToggleArchive}
                />
              </>
            )}
          </>
        )}
      </div>

      {showModal && editingId && (
        <EditModal
          note={notes.find(n => n.id === editingId)}
          onSave={handleSaveEdit}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  )
}

export default MainContent
