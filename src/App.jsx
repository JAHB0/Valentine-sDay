import { Route,  BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AnimatedSunset from './pages/animatedSunset';
import Loading from './pages/loading';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AnimatedSunset />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </Router>
  )
}

export default App
