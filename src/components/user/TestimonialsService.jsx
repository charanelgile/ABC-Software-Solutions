// Library Imports
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

const TestimonialsService = ({
  tsdAuthorName,
  tsdAuthorDescription,
  tsdRating,
  tsdComments,
  tsdImage,
}) => {
  // Calculate the number of filled stars (Whole number in the rating)
  const filledStars = Math.floor(tsdRating);

  // Check if there is a decimal part for a half star
  const halfStar = tsdRating % 1 !== 0;

  // Calculate the number of empty stars
  const emptyStars = 5 - filledStars - (halfStar ? 1 : 0);

  return (
    <div
      id="testimonialsService"
      className="bg-dark-midtone">
      <div className="flexColCenter">
        <div
          className="testimonialsServiceAuthor"
          style={{
            backgroundImage: tsdImage,
          }}></div>

        <div className="testimonialsServiceDetails bg-dark text-light rounded rounded-3">
          <div>
            <div className="testimonialsServiceStars text-center mt-2">
              {Array.from({ length: filledStars }, (_, index) => (
                <StarIcon
                  key={index}
                  className="homeTestimonialStars text-secondary"
                />
              ))}

              {halfStar && (
                <StarHalfIcon className="homeTestimonialStars text-secondary" />
              )}

              {Array.from({ length: emptyStars }, (_, index) => (
                <StarBorderOutlinedIcon
                  key={index}
                  className="homeTestimonialStars text-secondary opacity-50"
                />
              ))}
            </div>

            <p className="testimonialsServiceAuthorName text-center mt-2 mb-0 p-0">
              <b>{tsdAuthorName}</b>
            </p>

            <p className="text-center mb-3 p-0">{tsdAuthorDescription}</p>

            <p
              id="testimonialsServiceComments"
              className="text-center m-0 p-0">
              &nbsp;&nbsp;&nbsp;{tsdComments}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsService;
