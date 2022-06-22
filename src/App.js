import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailsPage from './components/details/DetailsPage';
import ErrorPage from './components/error/ErrorPage';
import HomePage from './components/home/HomePage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details" element={<DetailsPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Router>
);

export default App;
