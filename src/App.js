import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './page/home';
import AboutPage from './page/about';
import EducationPage from './page/education';
import SkillsPage from './page/skills';
import ExperiencePage from './page/Experience';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/education' element={<EducationPage/>} />
        <Route path='/skills' element={<SkillsPage />} />
        <Route path='/experience' element={<ExperiencePage />} />
      </Routes>
    </Router>
  );
}

export default App;
