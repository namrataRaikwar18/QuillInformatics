import { BackToHome } from "../../../Components";
import { FaStarOfLife } from "react-icons/fa";

const CmsDev = () => {
  const mobileDevCategory = ["WordPress", "Drupal", "Kentico"];
  return (
    <main>
      <section className="pageSection">
        <div className="cmsDevImg pageHeaderImg" />
        <div className="imgText pagePadding">
          <BackToHome page="CMS DEVELOPMENT" />
        </div>
      </section>
      <section className="pagePadding  greyText">
        <small className="mobileDevBody lineHeight displayFlex">
          <p className="pageHeader bigText">
             <span className="primaryColorText">CMS </span> DEVELOPMENT

          </p>
          <div className="smallDivider"></div>
          <p>
            A CMS or
            <span className="boldText"> Content Management System </span> allows
            you to manage the content within your website; without any technical
            training. Using the platform one can easily add images; edit the
            text contained in the website and much more.
          </p>
          <p>
            It offers those who have no experience of HTML language; a great
            opportunity to manage the content on their own. Editing with CMS can
            be done from anywhere in the world or from any browser or device.
          </p>
          <div className="mobileDevContainer displayFlex">
            <div className="mobileDevIcon displayFlex">
              <FaStarOfLife className="mobileIcon" />
            </div>
            <h1>Why tecHindustan?</h1>
            <p className="mobileDevPara">
              We are offering services in the following fields:
            </p>
            <ul className="list">
              {mobileDevCategory.map((category) => {
                return (
                  <li key={category}>
                    <span className="boldText">{category}</span> Development
                  </li>
                );
              })}
            </ul>
          </div>
        </small>
      </section>
    </main>
  );
};

export { CmsDev };
