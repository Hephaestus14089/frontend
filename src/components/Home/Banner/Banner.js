import BannerImg from "../../../assets/banner-img.png";
import './Banner.scss';

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>
          <p>
            Just some random nonsense...
            which all the sales ads,
            in a way, actually is.
          </p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div>

        <img className="banner-img" src={BannerImg} />
      </div>
    </div>
  );
};

export default Banner;
