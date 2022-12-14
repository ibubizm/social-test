import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Profile } from './pages/ProfilePage/Profile'
import { News } from './pages/newsPage/News'
import { Main } from './pages/Main/Main'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
