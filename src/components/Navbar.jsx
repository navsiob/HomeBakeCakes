const Navbar = () => {
  return (
    <header>
      <div id="logo-contacts">
        <img id="logo" src={require("../images/logo.png")} alt="" />
        <div id="follow-us">
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
    </header>
  );
};

export default Navbar;
