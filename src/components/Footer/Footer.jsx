import "./Footer.css";

const dataScheduleTimeList = [
  { date: "Sunday", start: "...", end: "All day" },
  { date: "Monday", start: "8.00", end: "20.00" },
  { date: "Tuesday", start: "10.00", end: "5.00" },
  { date: "Wednesday", start: "12.00", end: "9.00" },
  { date: "Friday", start: "7.00", end: "1.00" },
  { date: "Saturday", start: "9.00", end: "12.00" },
];

const addressList = [
  {
    fontAwesomeClassName: "fas fa-phone-volume",
    text: "+449 888 666 0000",
  },
  {
    fontAwesomeClassName: "fas fa-envelope-square",
    text: "foodg@gmail.com",
  },
  {
    fontAwesomeClassName: "far fa-id-card",
    text: "855 Hoi An, Viet Nam",
  },
];

const socialWeb = [
  {
    className: "fab fa-facebook-square",
    style: {
      color: "rgb(81, 81, 255)",
      margin: 0,
    },
  },
  {
    className: "fab fa-twitter-square",
    style: {
      color: "aqua",
    },
  },
  {
    className: "fab fa-instagram",
    style: {
      color: "red",
    },
  },
  {
    className: "fab fa-youtube",
    style: {
      color: "red",
    },
  },
];
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-schedule">
          <div className="date-week-schedule">
            <h2>Schedule</h2>
            {dataScheduleTimeList.map(({ date},key) => (
              <div key={key}>{date}</div>
            ))}
          </div>
          <div className="time-start-schedule">
            <h2>Start</h2>
            {dataScheduleTimeList.map(({ start },key) => (
              <div key={key}>{start}</div>
            ))}
          </div>
          <div className="time-close-schedule">
            <h2>Close</h2>
            {dataScheduleTimeList.map(({ end },key) => (
              <div key={key}>{end}</div>
            ))}
          </div>
          <div className="address-contact-container">
            <h2>Address</h2>
            <div>
              {addressList.map(({ fontAwesomeClassName, text },key) => (
                <div className="address-contact-item" key={key}>
                  <i className={fontAwesomeClassName}></i>
                  <span>{text}</span>
                </div>
              ))}
              <div className="social-web-container">
                {socialWeb.map(({ className, style }, key) => (
                  <span key={key}>
                    <i className={className} style={style}></i>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="footer-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1864.0568347757392!2d108.34615808661933!3d15.890428922499089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31420d9e24aab795%3A0x28e64d847e6eba35!2sHoi%20An%20Golden%20Rice%20Villa!5e0!3m2!1sen!2s!4v1624506959425!5m2!1sen!2s"
            frameBorder="0"
            title="address"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Footer;
