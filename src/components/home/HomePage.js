import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { aggregateFetch } from '../../redux/aggregate/aggregate';
import Headline from './sub_components/Headline';
import Card from './sub_components/Card';

const HomePage = () => {
  const data = useSelector((state) => state.aggregateReducer);
  const dispatch = useDispatch();
  const categories = ['frontend', 'frontend remote', 'fullstack', 'fullstack remote', 'react developer', 'ruby developer'];
  // A helper variable to keep track of the number of categories that has been fetched
  const categoriesTracker = useRef(data.length);
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
