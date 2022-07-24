import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Header from './components/Header'

function App() {
  return (
    <div className='scroll-smooth'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
