import "./WordPressDev.css";
import { FaWordpressSimple } from "react-icons/fa";
import { BackToHome } from "../../../../Components";

const WordPressDev = () => {
  const wordPressDevService = [
    "The WordPress Developments are dynamic, attractive and moves your business growth with great celerity.",
    " By the time as your business flourishes; you can add more pages to your website without compromising with the speed.",
    "The WordPress sites are SEO optimized and the community forums always push you up whenever you are stuck.",
  ];
  return (
    <main>
      <section className="pageSection">
        <div className="wordPressImgDevImg" />
        <div className="imgText pagePadding">
          <BackToHome page="WORDPRESS DEVELOPMENT" />
        </div>
      </section>
      <section className="pagePadding  greyText">
        <small className="mobileDevBody lineHeight displayFlex">
          <p className="pageHeader bigText">
            WORDPRESS <span className="primaryColorText"> DEVELOPMENT </span>
          </p>
          <div className="smallDivider"></div>
          <p>
            At <span className="boldText"> tecHindustan </span> ; we believe
            that a pinch of craziness can set everything aligned!
          </p>
          <p>
            We create websites beautifully, so that you would love to call it as
            your own. Our WordPress developers splash your website with all the
            interactive, responsive, and dynamic elements; they bring it to
            kudos. We always double-check our work before delivering it to our
            customers.
          </p>
          <p>
            We are always working to mark your website up to the “WOW Factor”.
          </p>
          <div className="mobileDevContainer displayFlex">
            <div className="mobileDevIcon displayFlex">
              <FaWordpressSimple className="mobileIcon" />
            </div>
            <h1>It’s expedient using WordPress in many ways:</h1>
            <p className="mobileDevPara">Advantages of using WordPress:</p>
            <ul className="list">
              {wordPressDevService.map((category) => {
                return <li key={category}>{category}</li>;
              })}
            </ul>
          </div>
        </small>
      </section>
    </main>
  );
};

export { WordPressDev };
