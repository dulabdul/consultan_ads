import './index.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import LandingPages from './pages/LandingPages';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            element={<LandingPages />}
            exatch
            path='/'
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
