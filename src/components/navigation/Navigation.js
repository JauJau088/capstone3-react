import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { clearData } from '../../redux/jobs/jobs';

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBack = () => {
    dispatch(clearData());
    navigate('/');
  };

  return (
    <nav>
      {location.pathname === '/details'
        ? <button type="button" onClick={handleBack}>Back</button>
        : <div />}
      <div>Navigation</div>
    </nav>
  );
};

export default Navigation;
