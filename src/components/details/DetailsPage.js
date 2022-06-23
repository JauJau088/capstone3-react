import { useRef } from 'react';
import { useSelector } from 'react-redux';
import DetailsCard from './sub_components/DetailsCard';
import './DetailsPage.css';

const DetailsPage = () => {
  const data = useSelector((state) => state.jobsReducer);
  const page = useRef(0);
  console.log(data);

  return (
    <div>
      <section className="details-headline-container">
        <div className="details-headline">
          <div className="details-headline-bg">{data?.keywords?.match(/\b(\w)/g)}</div>
          <div className="details-headline-group">
            <div className="details-headline-keywords">{data?.keywords}</div>
            <div>
              {data?.totalResults}
              &nbsp;jobs found
            </div>
          </div>
        </div>
      </section>
      <div className="section-title">SEARCH RESULT</div>
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
