import "./CarouselSlide.css";

const CarouselSlide = ({
  imageUrl,
  heading1,
  heading2,
  heading2Red,
  buttonText,
}) => {
  return (
    <div
      className="carousel-slide-container"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="carousel-slide-wrapper">
        <div className="title-1">{heading1}</div>
        <div className="title-2">{heading2}</div>
        <div className="title-2 red">{heading2Red}</div>
        <button className="button-carousel-slide">
          <i className="fas fa-cart-plus"></i>
          <span>{buttonText}</span>
        </button>
      </div>
    </div>
  );
};

export default CarouselSlide;
