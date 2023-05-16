import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Wanderlust</h1>
          <p>home is where your heart is</p>
        </div>

        <div>
          <a href="https://www.facebook.com/" target="_blank">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="https://twitter.com/i/flow/login" target="_blank">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <i className="fa-brands fa-youtube-square"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
        </div>
      </div>
      <h4>©Ena, Wanderlust 2023</h4>
    </div>
  );
};

export default Footer;
