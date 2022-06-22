import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJobs } from '../../redux/jobs/jobs';
import Headline from './sub_components/Headline';

const HomePage = () => {
  const data = useSelector((state) => state.jobsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(data).length === 0) {
      dispatch(fetchJobs('frontend'));
    }
  }, []);

  return (
    <div>
      <Headline />
      <div>
        State =
      </div>
    </div>
  );
};

export default HomePage;
