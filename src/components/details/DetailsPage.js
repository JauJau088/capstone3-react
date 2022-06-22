import { useRef } from 'react';
import { useSelector } from 'react-redux';
import DetailsCard from './sub_components/DetailsCard';

const DetailsPage = () => {
  const data = useSelector((state) => state.jobsReducer);
  const page = useRef(0);
  console.log(data);

  return (
    <div>
      <section>
        Details
      </section>
      <section>
        {data?.results?.slice(page.current, page.current + 10)
          .map((s) => (
            <DetailsCard
              key={s.jobId}
              jobTitle={s.jobTitle}
              employerName={s.employerName}
              locationName={s.locationName}
              minimumSalary={s.minimumSalary}
              maximumSalary={s.maximumSalary}
              currency={s.currency}
              date={s.date}
            />
          ))}
      </section>
    </div>
  );
};

export default DetailsPage;
