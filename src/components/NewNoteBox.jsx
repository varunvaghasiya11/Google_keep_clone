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

function NewNoteBox({ onSave }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [selectedColor, setSelectedColor] = useState('#fff')
  const textareaRef = useRef(null)

  const handleExpand = () => {
    setIsExpanded(true)
  }

  const handleCollapse = () => {
    setIsExpanded(false)
    setTitle('')
    setBody('')
    setSelectedColor('')
  }

  const handleSave = () => {
    if (title.trim() || body.trim()) {
      onSave(title.trim(), body.trim(), selectedColor)
      handleCollapse()
    }
  }

  const autoResize = (e) => {
    const el = e.target
    el.style.height = 'auto'
    el.style.height = el.scrollHeight + 'px'
  }

  return (
    <div
      className="new-note-box"
      style={{ background: isExpanded ? selectedColor || '#fff' : '#fff' }}
    >
      {!isExpanded ? (
        <div className="new-note-collapsed">
          <input
            type="text"
            placeholder="Take a note..."
            onClick={handleExpand}
            onFocus={handleExpand}
            readOnly
          />
        </div>
      ) : (
        <div className="new-note-expanded">
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
            rows="3"
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
                title={color.id}
              />
            ))}
          </div>
          
          <div className="toolbar">
            <div className="tools"></div>
            <div className="button-group">
              <button className="close-btn" onClick={handleCollapse}>
                Close
              </button>
              <button className="save-btn" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default NewNoteBox
