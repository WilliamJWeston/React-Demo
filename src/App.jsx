import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './Components/Layout'
import { Home } from './Pages/Home'
import { Page1 } from './Pages/Page1' 
import { Page2 } from './Pages/Page2'

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/Page1" element={<Page1/>}/>
          <Route path="/Page2" element={<Page2/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
