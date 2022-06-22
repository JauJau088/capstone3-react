import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailsPage from './components/details/DetailsPage';
import ErrorPage from './components/error/ErrorPage';
import HomePage from './components/home/HomePage';
import Navigation from './components/navigation/Navigation';

const App = () => (
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details" element={<DetailsPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Router>
);

export default App;
