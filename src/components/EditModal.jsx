import React, { useState, useRef } from 'react'

const COLORS = [
  { id: 'default', bg: '#fff', border: '#e0e0e0', value: '' },
  { id: 'tomato', bg: '#F28B82', border: '#F28B82', value: '#F28B82' },
  { id: 'banana', bg: '#FBBC04', border: '#FBBC04', value: '#FBBC04' },
  { id: 'citron', bg: '#FFF475', border: '#FFF475', value: '#FFF475' },
  { id: 'sage', bg: '#CCFF90', border: '#CCFF90', value: '#CCFF90' },
  { id: 'basil', bg: '#A8DAB5', border: '#A8DAB5', value: '#A8DAB5' },
  { id: 'peacock', bg: '#CBF0F8', border: '#CBF0F8', value: '#CBF0F8' },
  { id: 'blueberry', bg: '#AECBFA', border: '#AECBFA', value: '#AECBFA' },
  { id: 'lavender', bg: '#D7AEFB', border: '#D7AEFB', value: '#D7AEFB' },
  { id: 'eucalyptus', bg: '#E6C9A8', border: '#E6C9A8', value: '#E6C9A8' }
]

function EditModal({ note, onSave, onClose }) {
  const [title, setTitle] = useState(note.title)
  const [body, setBody] = useState(note.body)
  const [selectedColor, setSelectedColor] = useState(note.color)
  const textareaRef = useRef(null)

  const handleSave = () => {
    onSave(title, body, selectedColor)
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const autoResize = (e) => {
    const el = e.target
    el.style.height = 'auto'
    el.style.height = el.scrollHeight + 'px'
  }

  return (
    <div className="modal-overlay show" onClick={handleOverlayClick}>
      <div className="modal-note" style={{ background: selectedColor || '#fff' }}>
        <input
          type="text"
          className="title-input"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <textarea
          ref={textareaRef}
          placeholder="Take a note..."
          value={body}
          onChange={(e) => {
            setBody(e.target.value)
            autoResize(e)
          }}
        />
        
        <div className="color-picker">
          {COLORS.map(color => (
            <div
              key={color.id}
              className={`color-dot ${selectedColor === color.value ? 'selected' : ''}`}
              style={{
                background: color.bg,
                border: selectedColor === color.value ? '2px solid #202124' : `1.5px solid ${color.border}`
              }}
              onClick={() => setSelectedColor(color.value)}
            />
          ))}
        </div>
        
        <div className="toolbar">
          <div></div>
          <button className="save-btn" onClick={handleSave}>
            Done
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditModal
