import { BackToHome } from "../../../../Components";
import { FaStarOfLife } from "react-icons/fa";

const VtigerDev = () => {
  const contentDevList = [
    "Vtiger Integration Services",
    "Vtiger Customization Services",
    "Vtiger LMS Development",
    "Vtiger Web Services",
    "Vtiger Theme Design",
    "Vtiger Plug-in Development",
  ];

  const currentMonth = new Date();
  const currentDate = String(currentMonth).slice(4, 15);

  return (
    <main>
      <section className="pageSection">
        <div className="cmsDevImg" />
        <div className="imgText pagePadding displayFlex nodeJsHeader">
          <div className="displayFlex dataAndBackToHome">
            <BackToHome page="VTIGER CRM DEVELOPMENT" />
            <small className="currentDate">{currentDate}</small>
          </div>
        </div>
      </section>
      <section className="pagePadding  greyText">
        <small className="mobileDevBody lineHeight displayFlex">
          <p>
            Vtiger is an open source and free CRM solution that provides product
            support at lower costs and is considered ideal for all the small and
            medium scale businesses. tecHindustan provides impressive Vtiger CRM
            Development solutions. Vtiger offers an opportunity that enables
            user to manage the CRM and the inventory activities like the
            marketing automation, customer support and services, and force
            automation. We deliver the next generation Vtiger CRM Solutions,
            delivering with awesomeness in every second to our clients over the
            globe. Our experts embed it with some additional features to make it
            remarkably functional.
          </p>
          <p className="boldText">Why Us?</p>
          <p>
            Hiring tecHindustan for your Vtiger CRM Development has its own set
            of asset. Our experts have hands on the Vtiger CRM Development and
            customization. Our experts ensure clients a cost effective service
            for quick ROI.
          </p>
          <div className="mobileDevContainer displayFlex">
            <div className="mobileDevIcon displayFlex">
              <FaStarOfLife className="mobileIcon" />
            </div>
            <h1>Our Vtiger CRM Solutions</h1>
            <p>
              We offer the following Vtiger CRM Solutions to our esteemed
              clients across the industry spectrum:
            </p>
            <ul>
              {contentDevList.map((list) => (
                <li>{list}</li>
              ))}
            </ul>
          </div>
        </small>
      </section>
    </main>
  );
};

export { VtigerDev };
