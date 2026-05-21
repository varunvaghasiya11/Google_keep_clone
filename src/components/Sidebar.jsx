import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setnote } from '../Redux/counterslice'

function Sidebar() {
  const dispatch = useDispatch();
  return (
    <aside className="sidebar">
      <NavLink to="/" className={({ isActive }) => `sidebar-btn ${isActive ? 'active' : ''}`} title="Notes">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      </NavLink>
      
      <NavLink to="/reminders" className={({ isActive }) => `sidebar-btn ${isActive ? 'active' : ''}`} title="Reminders">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      </NavLink>
      
      <NavLink to="/archive" className={({ isActive }) => `sidebar-btn ${isActive ? 'active' : ''}`} title="Archive">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="21 8 21 21 3 21 3 8" />
          <rect x="1" y="3" width="22" height="5" />
          <line x1="10" y1="12" x2="14" y2="12" />
        </svg>
      </NavLink>
      
      <NavLink to="/trash" className={({ isActive }) => `sidebar-btn ${isActive ? 'active' : ''}`} title="Trash">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
        </svg>
      </NavLink>
    </aside>
  )
}

export default Sidebar
