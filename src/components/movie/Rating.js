import { useEffect, useState, useMemo } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const toOneDecimal = (number) => Math.round(number * 10) / 10;

export default function MovieRating({
  value,
  maxValue = 100,
  displayStars,
  maxStars = 10,
}) {
  const [random] = useState(Math.random());
  const [stars, setStars] = useState();

  const starsOneDecimal = useMemo(
    () => toOneDecimal(maxStars * (value / maxValue)),
    [maxStars, value, maxValue]
  );

  useEffect(() => {
    setStars(calculateRenderedStars(value, maxValue, maxStars));
  }, [value, maxValue, maxStars]);

  if (displayStars) {
    return (
      <OverlayTrigger
        key={`rating-${random}`}
        placement="top"
        overlay={
          <Tooltip id={`tooltip-rating-${random}`}>
            {starsOneDecimal} Stars
          </Tooltip>
        }
      >
        <span>
          <span className="text-secondary">
            {value} / {maxValue}
          </span>{" "}
          |<span className="text-warning"> {stars}</span>
        </span>
      </OverlayTrigger>
    );
  }

  return (
    <span className="text-secondary">
      {value}/{maxValue} Rating Score
    </span>
  );
}

function calculateRenderedStars(value, maxValue, maxStars) {
  const renderedIcons = [];
  const totalStars = maxStars * (value / maxValue);
  const totalStarsRounded = Math.round(totalStars);

  for (let i = 0; i < totalStarsRounded; i++)
    renderedIcons[i] = <i className="fas fa-star" />;

  if (totalStarsRounded > totalStars)
    renderedIcons[totalStarsRounded - 1] = (
      <i className="fas fa-star-half-alt" />
    );

  if (totalStarsRounded < maxStars)
    for (let i = totalStarsRounded; i < maxStars; i++)
      renderedIcons[i] = <i className="far fa-star" />;

  return renderedIcons;
}
