import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchJobs } from '../../../redux/jobs/jobs';

const Headline = () => {
  const formInput = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchJobs(formInput.current.value));
    navigate('/details');
    e.target.reset();
  };

  return (
    <section className="headline">
      <form onSubmit={handleSubmit}>
        <input
          ref={formInput}
          type="text"
          placeholder="e.g. frontend react remote"
          maxLength="50"
          required
        />
        <button type="submit">SEARCH</button>
      </form>
    </section>
  );
};

export default Headline;
