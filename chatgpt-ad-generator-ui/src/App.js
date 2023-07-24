import React from 'react'; // or remove this line if you're using the new JSX transform
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import FacebookAd from './pages/FacebookAd';
import GoogleAd from './pages/GoogleAd';
import InstagramBio from './pages/InstagramBio';
import InstagramCaption from './pages/InstagramCaption';
import EmailAnswer from './pages/EmailAnswer';
import TeacherElementaryLesson from './pages/TeacherElementaryLesson';
import TeacherHighSchoolLesson from './pages/TeacherHighSchoolLesson';
import CocktailDrink from './pages/CocktailDrink';
import Meal from './pages/Meal';

function App() {
  return (
    <Router>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ flexGrow: 1, padding: '16px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/facebook-ad" element={<FacebookAd />} />
            <Route path="/google-ad" element={<GoogleAd />} />
            <Route path="/instagram-bio" element={<InstagramBio />} />
            <Route path="/instagram-caption" element={<InstagramCaption />} />
            <Route path="/email-answer" element={<EmailAnswer />} />
            <Route path="/teacher-elementary-lesson" element={<TeacherElementaryLesson />} />
            <Route path="/teacher-high-school-lesson" element={<TeacherHighSchoolLesson />} />
            <Route path="/cocktail-drink" element={<CocktailDrink />} />
            <Route path="/meal" element={<Meal />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App;

