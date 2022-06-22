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
        <div>
          {data?.keywords}
          &nbsp;jobs
        </div>
        <div>{data?.totalResults}</div>
      </section>
      <section>
        {data?.results?.slice(page.current, page.current + 10)
          .map((s) => (
            <DetailsCard
              key={s.jobId}
              jobTitle={s.jobTitle}
              employerName={s.employerName}
              locationName={s.locationName}
              minimumSalary={s.minimumSalary || 0}
              maximumSalary={s.maximumSalary || 0}
              currency={s.currency || ''}
              date={s.date}
            />
          ))}
      </section>
    </div>
  );
};

export default DetailsPage;
