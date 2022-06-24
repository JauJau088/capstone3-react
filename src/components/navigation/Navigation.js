import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { clearData } from '../../redux/jobs/jobs';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBack = () => {
    dispatch(clearData());
    navigate('/');
  };

  return (
    <nav className="nav">
      {location.pathname === '/'
        ? <div />
        : (
          <button className="nav-button" type="button" onClick={handleBack}>
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </button>
        )}
      {location.pathname === '/'
        ? <div className="nav-title font-lato">Reed Job Search</div>
        : <div className="nav-title font-lato">Search results</div>}
    </nav>
  );
};

export default Navigation;
