import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { pinnote, deletenote, editnote, togglearchive } from '../Redux/counterslice'
import NotesGrid from './NotesGrid'
import EditModal from './EditModal'

function ArchiveContent({ notes, searchTerm, isGrid }) {
  const dispatch = useDispatch()
  const [editingId, setEditingId] = useState(null)
  const [showModal, setShowModal] = useState(false)

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

  const archivedNotes = notes.filter(n => n.isArchive).filter(n => {
    if (!searchTerm) return true
    return n.title.toLowerCase().includes(searchTerm) || n.body.toLowerCase().includes(searchTerm)
  })

  return (
    <div className="main-content">
      <div className="content-wrapper">
        {archivedNotes.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📥</div>
            <div>Your archived notes appear here</div>
          </div>
        ) : (
          <NotesGrid
            notes={archivedNotes}
            isGrid={isGrid}
            onPin={handlePinNote}
            onDelete={handleDeleteNote}
            onEdit={handleEditNote}
            onArchive={handleToggleArchive}
          />
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

export default ArchiveContent
