import PropTypes from 'prop-types';

const DetailsCard = ({
  jobTitle, employerName, locationName, minimumSalary, maximumSalary, currency, date,
}) => {
  const dateParts = date.split('/');
  const dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
  const daysLeft = Math.ceil(((Date.now()) - dateObject) / (1000 * 3600 * 24));

  return (
    <div>
      <div>
        <div>{employerName}</div>
        <div>{jobTitle}</div>
        <div>{locationName}</div>
      </div>
      <div>
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
        <div>
          {daysLeft}
          &nbsp;days left
        </div>
      </div>
    </div>
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
