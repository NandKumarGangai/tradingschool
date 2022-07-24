import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
