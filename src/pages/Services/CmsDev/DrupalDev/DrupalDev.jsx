import "./DrupalDev.css";
import { BsFillDropletFill } from "react-icons/bs";
import { BackToHome } from "../../../../Components";

const DrupalDev = () => {
  const drupalDevService = [
    "We offer ease of cross browser functionalities and multiple operating systems as well.,",
    "Light weight and user friendly architecture to achieve rapid business growth.",
    "Our Drupal developers are capable of delivering 100% tailored Drupal Solutions with measurable results.",
    "The Drupal platform works with optimum efficiency and effectiveness.",
  ];
  return (
    <main>
      <section className="pageSection">
        <div className="drupalDevImg" />
        <div className="imgText pagePadding">
          <BackToHome page="DRUPAL DEVELOPMENT" />
        </div>
      </section>
      <section className="pagePadding  greyText">
        <small className="mobileDevBody lineHeight displayFlex">
          <p className="pageHeader bigText">
            <span className="primaryColorText"> DRUPAL </span> DEVELOPMENT
          </p>
          <div className="smallDivider"></div>
          <p>
            Drupal is the best known{" "}
            <span className="boldText"> Content Management System (CMS) </span>{" "}
            ; is robust, powered with rich features, and we deliver custom
            Drupal Solutions that perfectly meet your requirements. tecHindustan
            delivers an integration of a wonderful theme and feature that
            renders 100% customer satisfaction. The punch of using a Drupal site
            is that, it is SEO friendly, highly secured, and mobile optimized.
          </p>
          <p>
            We design flawless Drupal based websites that contain products for
            purchase, maintain invoice records, payments, checkout processes,
            and offers ability of handling other things based on the requirement
            of your <span className="boldText"> e-commerce </span> business.
          </p>
          <p>
            We are always working to mark your website up to the “WOW Factor”.
          </p>
          <div className="mobileDevContainer displayFlex">
            <div className="mobileDevIcon displayFlex">
              <BsFillDropletFill className="mobileIcon" />
            </div>
            <h1>Its opportune developing on the Drupal Platform:</h1>
            <p className="mobileDevPara">
              Advantages of developing with techindustan’s Drupal Development
              services:
            </p>
            <ul className="list">
              {drupalDevService.map((category) => {
                return <li key={category}>{category}</li>;
              })}
            </ul>
          </div>
        </small>
      </section>
    </main>
  );
};

export { DrupalDev };
