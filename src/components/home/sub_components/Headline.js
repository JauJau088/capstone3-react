import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { fetchJobs } from '../../../redux/jobs/jobs';

const Headline = () => {
  const formInput = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchJobs(formInput.current.value));
    e.target.reset();
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          ref={formInput}
          type="text"
          placeholder="e.g frontend react remote"
          required
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default Headline;
