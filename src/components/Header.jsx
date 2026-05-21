import React from 'react'

function Header({ searchTerm, setSearchTerm, isGrid, setIsGrid }) {
  return (
    <header className="keep-header">
      <a className="keep-logo" href="#">
        <div className="logo-icon">
          <svg viewBox="0 0 24 24" fill="white">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
        </div>
        Keep
      </a>
      
      <div className="search-bar">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5f6368" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        />
      </div>
      
      <div className="header-actions">
        <button className="tool-btn" title="Toggle view" onClick={() => setIsGrid(!isGrid)}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
          </svg>
        </button>
        <div className="avatar">U</div>
      </div>
    </header>
  )
}

export default Header
