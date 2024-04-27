import { Routes, Route } from 'react-router-dom';
import * as Pages from './pages'


function App() {
  return (
    <div className='flex justify-center items-center h-full'>
      <Routes>
        <Route path="/" index element={<Pages.HomePage/>}/>
        <Route path="/:id" element={<Pages.UserPage/>}/>
      </Routes>
    </div>
  )
}

export default App
