import { BackToHome } from "../../../../Components";
import { FaStarOfLife } from "react-icons/fa";

const ZohoDev = () => {
  const contentDevList = [
    "Custom Software Development",
    "PHP, .NET Programming, application re-engineering",
  ];

  const currentMonth = new Date();
  const currentDate = String(currentMonth).slice(4, 15);

  return (
    <main>
      <section className="pageSection">
        <div className="cmsDevImg pageHeaderImg" />
        <div className="imgText pagePadding displayFlex nodeJsHeader">
          <div className="displayFlex dataAndBackToHome">
            <BackToHome page="ZOHO CRM DEVELOPMENT" />
            <small className="currentDate">{currentDate}</small>
          </div>
        </div>
      </section>
      <section className="pagePadding  greyText">
        <small className="mobileDevBody lineHeight displayFlex">
          <p>
            <span className="boldText"> Zoho CRM </span> provides Application
            Programming Interface (API) for integrating the CRM modules with the
            third party applications such as e-commerce, self-service portals
            and many more. Using the Zoho CRM API one can extract CRM data in
            XML or JSON format and develop new applications or can integrate
            with the existing one. tecHindustan Solutions provide customized
            applications for each of your business and the payment processing
            that perfectly organize your organization. While delivering your
            enhanced application our experts keep your data secured and make the
            management of your organization easier.
          </p>
          <div className="mobileDevContainer displayFlex">
            <div className="mobileDevIcon displayFlex">
              <FaStarOfLife className="mobileIcon" />
            </div>
            <h1>Our Expertise Includes:</h1>
            <p>
              <span className="boldText"> tecHindustan Solutions </span> employs
              a select pool of software engineers of diversified backgrounds who
              offer you the following services:
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

export { ZohoDev };
