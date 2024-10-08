import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavigationMenu } from './components/NavigationMenu';
import AllCourses from './pages/AllCourses';
import FullStack from './pages/FullStack';
import DataScience from './pages/DataScience';
import CyberSecurity from './pages/CyberSecurity';
import Career from './pages/Career';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationMenu />
        <Routes>
          <Route path="/" element={<AllCourses />} />
          <Route path="/fullstack" element={<FullStack />} />
          <Route path="/datascience" element={<DataScience />} />
          <Route path="/cybersecurity" element={<CyberSecurity />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
