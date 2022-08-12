import { BackToHome } from "../../../Components";
import { FaStarOfLife } from "react-icons/fa";

const ProductDev = () => {
  return (
    <main>
      <section className="pageSection">
        <div className="productDevImg pageHeaderImg" />
        <div className="imgText pagePadding">
          <BackToHome page="PRODUCT DEVELOPMENT" />
        </div>
      </section>
      <section className="pagePadding  greyText">
        <small className="mobileDevBody lineHeight displayFlex">
          <p className="pageHeader bigText">
            <span className="primaryColorText"> PRODUCT </span> DEVELOPMENT
          </p>
          <div className="smallDivider"></div>
          <h3>Are you looking for a growth?</h3>
          <p>
            Getting a new product in the market is a great challenge for the
            <span className="boldText"> Product Development </span> service
            providers. Designing, Creating, Examining, and Marketing new
            products or services benefiting the customers is the key feature for
            the worth product development. As productivity is the key ingredient
            for the success of any product’s development; in accordance to
            eliminate technical hurdles one should outsource a part of the
            product to a product development partner.
          </p>
          <p>
            We are providing you
            <span className="boldText"> Product Development Services </span>
            at reckon-able rates. Give us a chance, our Product Development team
            will rocket your business.
          </p>
          <div className="mobileDevContainer displayFlex">
            <div className="mobileDevIcon displayFlex">
              <FaStarOfLife className="mobileIcon" />
            </div>
            <h1>Our Heed for a Seamless Business Growth:</h1>
            <p>
              We at tecHindustan offer you the best Product Development
              opportunities; but in case you are looking up to outsource a part
              of the product to a product development partner then the following
              points must be kept as prime concern:
            </p>
            <p>
              Never make your outsourced partner responsible for future
              maintenance and ugradations. Look for a value-added partner if you
              do not pay off well they may blow at your face. Never tie-up with
              the ones who are not up to your requirements.
            </p>
          </div>
        </small>
      </section>
    </main>
  );
};

export { ProductDev };
