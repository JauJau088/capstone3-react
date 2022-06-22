import { useLocation, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleBack = () => {
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
