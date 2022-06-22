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
    <button type="button" onClick={handleClick}>
      <div>{cardTitle}</div>
      <div>{numberOfJobs}</div>
    </button>
  );
};

Card.propTypes = {
  cardTitle: PropTypes.string.isRequired,
  numberOfJobs: PropTypes.number.isRequired,
};

export default Card;
