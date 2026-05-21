import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './css/App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import TrashContent from './components/TrashContent'
import ArchiveContent from './components/ArchiveContent'

function App() {
  const notes = useSelector(state => state.counter.notes);
  const trashNotes = useSelector(state => state.counter.trashNotes);

  const [searchTerm, setSearchTerm] = useState('')
  const [isGrid, setIsGrid] = useState(true)
  

  return (
    <div className="keep-app">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} isGrid={isGrid} setIsGrid={setIsGrid} />
      <div className="keep-body">
        <Sidebar />
        <Routes>
          <Route path="/" element={<MainContent notes={notes} searchTerm={searchTerm} isGrid={isGrid} />} />
          <Route path="/reminders" element={<div className="main-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div className="empty-state"><div className="empty-icon">🔔</div><div>Reminders coming soon</div></div></div>} />
          <Route path="/archive" element={<ArchiveContent notes={notes} searchTerm={searchTerm} isGrid={isGrid} />} />
          <Route path="/trash" element={<TrashContent trashNotes={trashNotes} searchTerm={searchTerm} isGrid={isGrid} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App