import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchJobs } from '../../../redux/jobs/jobs';

const Card = ({ cardTitle, numberOfJobs }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(fetchJobs(cardTitle));
    navigate('/details');
  };

  return (
    <button className="card-container" type="button" onClick={handleClick}>
      <div className="card-bg">{cardTitle.match(/\b(\w)/g)}</div>
      <div className="card">
        <span className="material-symbols-outlined icon-arrow-right">arrow_circle_right</span>
        <div className="card-title">{cardTitle}</div>
        <div className="card-numberofjobs">
          {numberOfJobs}
          &nbsp;jobs
        </div>
      </div>
    </button>
  );
};

Card.propTypes = {
  cardTitle: PropTypes.string.isRequired,
  numberOfJobs: PropTypes.number.isRequired,
};

export default Card;
