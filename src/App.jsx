import { Routes, Route } from 'react-router-dom';
import * as Pages from './pages'


function App() {
  return (
    <Routes>
      <Route path="/" index element={<Pages.HomePage/>}/>
      <Route path="/:id" element={<Pages.UserPage/>}/>
    </Routes>
  )
}

export default App
