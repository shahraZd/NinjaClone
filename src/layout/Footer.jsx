const Footer = () => {
  return (
    <footer className=" footer bg-primary-300 w-full ">
      <div className="footer_container bg-black">
        <div className="footer_links">
          <div>
            <p className="footer__subtitle">Subscribe to Our newsletter</p>

            <div className="footer__form">
              <div className="blog-hero__form">
                <div className="stc-subscribe-wrapper well"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_copy">
          <p>© 2017-2023 Ninjapromo.io</p>
          <ul id="menu-footer-copy-menu" className="">
            <li
              id="menu-item-5266"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5266"
            >
              <a href="https://ninjapromo.io/privacy-policy">Privacy Policy</a>
            </li>
            <li
              id="menu-item-5267"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5267"
            >
              <a href="https://ninjapromo.io/delivery-policy">
                Terms &amp; Conditions
              </a>
            </li>
          </ul>{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
