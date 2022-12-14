import { Routes, Route } from 'react-router-dom'

// styles
import './App.css'

//page components
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Search from './pages/search/Search'
import GuideData from './pages/guidedata/GuideData'
import Guide from './pages/guide/Guide'
import ThemeSelector from './components/ThemeSelector'
import Hero from './pages/hero/Hero'
import Heroes from './pages/heroes/Heroes'
import { useTheme } from './hooks/useTheme'


function App() {
  const { mode } = useTheme()

  return (
        <div className={`App ${mode}`}>
            <div className="content">
          <Navbar />
          <ThemeSelector />
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/heroes" element={<Heroes />}/>
            <Route path="/heroes/:name" element={<Hero />}/>
            <Route path="/create" element={<Create />} />
            <Route path="/search" element={<Search />} />
            <Route path="/guides/:id" element={<Guide />} />
            <Route path="/guidedata" element={<GuideData />} />
          </Routes>
          </div>
        </div>
  );
}

export default App
