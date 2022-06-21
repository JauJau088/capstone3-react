import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJobs } from '../../redux/jobs/jobs';

const HomePage = () => {
  const data = useSelector((state) => state.jobsReducer);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchJobs('frontend')), []);
  console.log(data);

  return (
    <div>
      <div>Home</div>
      <div>
        State =
      </div>
    </div>
  );
};

export default HomePage;
