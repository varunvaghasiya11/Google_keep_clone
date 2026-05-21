import React from 'react'

function NoteCard({ note, onPin, onDelete, onEdit, isTrash, onRestore, onDeleteForever, onArchive }) {
  return (
    <div
      className="note-card"
      style={{ background: note.color || '#fff' }}
      onClick={() => {
        if (!isTrash && onEdit) onEdit(note.id)
      }}
    >
      {!isTrash && note.pinned && (
        <span className="note-pinned-icon" title="Pinned">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 12V4h1V2H7v2h1v8l-2 2v2h5v6l1 1 1-1v-6h5v-2l-2-2z" />
          </svg>
        </span>
      )}
      
      {note.title && <div className="note-title">{note.title}</div>}
      {note.body && <div className="note-body">{note.body}</div>}
      
      <div className="note-actions">
        {isTrash ? (
          <>
            <button
              className="note-action-btn"
              title="Restore"
              onClick={(e) => {
                e.stopPropagation()
                onRestore(note.id)
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 10h10a8 8 0 0 1 8 8v0a8 8 0 0 1-8 8H3" />
                <polyline points="7 6 3 10 7 14" />
              </svg>
            </button>
            <button
              className="note-action-btn"
              title="Delete forever"
              onClick={(e) => {
                e.stopPropagation()
                onDeleteForever(note.id)
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                <line x1="10" y1="11" x2="10" y2="17" />
                <line x1="14" y1="11" x2="14" y2="17" />
              </svg>
            </button>
          </>
        ) : (
          <>
            <button
              className="note-action-btn"
              title={note.pinned ? 'Unpin' : 'Pin'}
              onClick={(e) => {
                e.stopPropagation()
                onPin(note.id)
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill={note.pinned ? 'currentColor' : 'none'}
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M16 12V4h1V2H7v2h1v8l-2 2v2h5v6l1 1 1-1v-6h5v-2l-2-2z" />
              </svg>
            </button>
            
            <button
              className="note-action-btn"
              title="Delete note"
              onClick={(e) => {
                e.stopPropagation()
                onDelete(note.id)
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
              </svg>
            </button>

            <button
              className="note-action-btn"
              title={note.isArchive ? 'Unarchive' : 'Archive'}
              onClick={(e) => {
                e.stopPropagation()
                if (onArchive) onArchive(note.id)
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="21 8 21 21 3 21 3 8" />
                <rect x="1" y="3" width="22" height="5" />
                <line x1="10" y1="12" x2="14" y2="12" />
              </svg>
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default NoteCard
