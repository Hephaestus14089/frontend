// import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
  return (
    <div className="Banner">
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>
          <p>
            Just some random bullshit...
            which all the sales ads,
            in a way, actually is.
          </p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div>

        {/* <img src={BannerImg} alt="banner-im" /> */}
      </div>
    </div>
  );
};

export default Banner;
