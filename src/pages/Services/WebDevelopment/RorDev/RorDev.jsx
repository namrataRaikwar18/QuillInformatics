import { BackToHome } from "../../../../Components";
import "./RorDev.css";

const RorDev = () => {
  const rightService = [
    "Web Development using jQuery, JavaScript, Ruby, and CoffeScript.",
    "RoR based CMS Development",
    " Support and Maintenance for RoR Development",
  ];
  const leftService = [
    "Porting and Migration",
    "RoR based web application for product development",
    "Q/A Testing Services",
  ];

  return (
    <main>
      <section className="pageSection">
        <div className="rorDevImg" />
        <div className="imgText pagePadding">
          <BackToHome page="RUBY ON RAILS DEVELOPMENT" />
        </div>
      </section>
      <section className="pagePadding">
        <small className="pageBody lineHeight displayFlex greyText">
          <p className="bigText">
            <span className="primaryColorText"> RUBY ON RAILS </span>
            DEVELOPMENT
          </p>
          <div className="smallDivider"></div>
          <p>
            One of our expertise includes application
            <span className="boldText"> developments </span> on the
            <span className="boldText"> Ruby Programming </span> Language. We
            have experts team of
            <span className="boldText"> RoR programmers </span> who are
            conversant in working with this popular framework. We use several
            tools for the enhanced <span className="boldText"> RoR </span>
            outputs.
          </p>
          <p>
            We are focused on delivering sustained solutions that stands in
            quality. Our experts can handle all most all the spectrum of
            <span className="boldText"> RoR </span> variations as per the
            customer’s requirement.
          </p>
          <div className="centerText displayFlex javaOfferContainer">
            <h2 className="primaryColorText">OUR OFFERINGS</h2>
            <h3>
              We have worked all over the globe and we understand what matters
              to our clients. So do we provide the following services:
            </h3>
          </div>
        </small>
      </section>
      <div className="pageServiceContainer greyText">
        <div className="rorDevBgImg" />
        <div className="pageService displayFlex">
          <div className="serviceContainer displayFlex rightServiceDiv">
            {rightService.map((service) => (
              <h4 key={service}>{service}</h4>
            ))}
          </div>
          <div>
            <h4>RoR Application Development</h4>
            <img
              src="https://techindustan.com/wp-content/uploads/2016/03/ruby_on_rails.png"
              alt="rails"
              className="responsiveImg"
            />
            <h4>RoR e-commerce application development</h4>
          </div>
          <div className="serviceContainer displayFlex leftServiceDiv">
            {leftService.map((service) => (
              <h4 key={service}>{service}</h4>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export { RorDev };
