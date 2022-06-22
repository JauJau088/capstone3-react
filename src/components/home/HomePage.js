import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { aggregateFetch, clearData } from '../../redux/aggregate/aggregate';
import Headline from './sub_components/Headline';
import Card from './sub_components/Card';

const HomePage = () => {
  const dispatch = useDispatch();
  // Subscribe to aggregate store
  const data = useSelector((state) => state.aggregateReducer);
  // Categories to be shown in the home page
  const categories = ['frontend']; // , 'frontend remote', 'fullstack', 'fullstack remote', 'react developer', 'ruby developer'];
  // A helper variable to keep track of the number of categories that has been fetched
  const categoriesTracker = useRef(0);
  // On mount, clear the data in the aggregate store
  useEffect(() => {
    dispatch(clearData());
  }, []);
  // When data gets updated, fetch another one until all categories are fetched
  useEffect(() => {
    if (categoriesTracker.current < categories.length) {
      dispatch(aggregateFetch(categories[categoriesTracker.current]));
      categoriesTracker.current += 1;
    }
  }, [data]);

  return (
    <div>
      <Headline />
      <section>
        {categories.map((category) => (
          <Card
            key={category}
            cardTitle={category}
            numberOfJobs={data.filter((d) => d.keywords === category)[0]?.totalResults || 0}
          />
        ))}
      </section>
    </div>
  );
};

export default HomePage;
