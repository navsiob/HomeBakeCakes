const Header = () => {
  return (
    <div id="header">
      <img id="logo" src={require("../images/logo.png")} alt="" />
      <div id="contact-search">
        <div id="contact-follow">
          <p>
            Call us at<a href="tell:8130206964">8130206964</a>
          </p>
          <p>Follow us on:</p>
          <a href="https://facebook.com">
            <img src={require("../images/Facebook_Logo_2023.png")} alt="" />
          </a>
          <a href="https://instagram.com">
            <img src={require("../images/instagram logo.avif")} alt="" />
          </a>
        </div>
        <div id="search">
          <form action="#" method="GET">
            <label htmlFor="header-search">
              Search Cake Designs | 5000+ Cakes
            </label>
            <input
              type="search"
              name="search"
              id="header-search"
              placeholder="Search cakes..."
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
