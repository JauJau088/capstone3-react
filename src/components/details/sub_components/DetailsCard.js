import PropTypes from 'prop-types';

const DetailsCard = ({
  jobTitle, employerName, locationName, minimumSalary, maximumSalary, currency, date,
}) => {
  const dateParts = date.split('/');
  const dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
  const days = Math.floor(((Date.now()) - dateObject) / (1000 * 3600 * 24));

  return (
    <button type="button" className="details-card-container">
      <div className="job-info1">
        <div className="job-info1-left">
          <div className="job-info1-employer">
            {employerName}
            {` (${locationName})`}
          </div>
          <div className="job-info1-title">{jobTitle}</div>
        </div>
        <span className="material-symbols-outlined icon-arrow-right">arrow_circle_right</span>
      </div>
      <div className="job-info2">
        {(minimumSalary > 0 && maximumSalary > 0)
          ? (
            <div>
              {minimumSalary}
              &nbsp;
              {currency}
              &nbsp;-&nbsp;
              {maximumSalary}
              &nbsp;
              {currency}
            </div>
          )
          : (<div />)}
        <div className="job-info2-day">
          {days === 0
            ? 'Today'
            : `${days} d`}
        </div>
      </div>
    </button>
  );
};

DetailsCard.propTypes = {
  jobTitle: PropTypes.string.isRequired,
  employerName: PropTypes.string.isRequired,
  locationName: PropTypes.string.isRequired,
  minimumSalary: PropTypes.number.isRequired,
  maximumSalary: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default DetailsCard;
