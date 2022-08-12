import { BackToHome } from "../../../../Components";
import { FaStarOfLife } from "react-icons/fa";

const SugarDev = () => {
  const contentDevList = [
    "SugarCRM Customization",
    "SugarCRM implementation",
    "System integration",
    "Training users and administrators",
    "Development of CRM systems for business",
    "SugarCRM Custom module development",
  ];

  const currentMonth = new Date();
  const currentDate = String(currentMonth).slice(4, 15);

  return (
    <main>
      <section className="pageSection">
        <div className="cmsDevImg pageHeaderImg" />
        <div className="imgText pagePadding displayFlex nodeJsHeader">
          <div className="displayFlex dataAndBackToHome">
            <BackToHome page="SUGARCRM DEVELOPMENT" />
            <small className="currentDate">{currentDate}</small>
          </div>
        </div>
      </section>
      <section className="pagePadding  greyText">
        <small className="mobileDevBody lineHeight displayFlex">
          <p>
           <span className="boldText">  tecHindustan Solutions </span> offer you expert SugarCRM development
            services. The spectrums of technologies we cover in are JavaScript,
            Smarty, MySQL, Soap and REST. As it is an open-source web-based CRM
            Solution hence, is flexible and can be easily customized according
            to the needs of your business. For its commercial version, SugarCRM
            development owes a cloud based offering. If your CRM seems to be
            inflexible or doesn’t fits in your pocket then SugarCRM is the best
            solution for you.
          </p>
          <p>
            We have vast experience in customizing, migrating to SugarCRM and
            integrating the third party CRM with the 3rd party API’s and
            systems. We assist you via our team who has a number of years of
            experience. Let our <span className="boldText"> SugarCRM Developers </span> and consultants guide you
            towards your goal.
          </p>
          <div className="mobileDevContainer displayFlex">
            <div className="mobileDevIcon displayFlex">
              <FaStarOfLife className="mobileIcon" />
            </div>
            <h1>Our Competence Includes:</h1>
            <p>
              Services we offer for the SugarCRM Development Services as per the
              client’s requirements are:
            </p>
            <ul>
              {contentDevList.map((list) => (
                <li key={list}>{list}</li>
              ))}
            </ul>
          </div>
        </small>
      </section>
    </main>
  );
};

export { SugarDev };
