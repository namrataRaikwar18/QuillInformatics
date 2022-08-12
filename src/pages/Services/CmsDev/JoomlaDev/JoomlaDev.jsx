import { BackToHome } from "../../../../Components";
import { FaStarOfLife } from "react-icons/fa";

const JoomlaDev = () => {
  const moodleDevService = [
    " MYSQL",
    "PHP",
    "Apache Webserver",
    "Ajax/jQuery",
    "Joomla Development Plugins",
    "XML/Webservice",
  ];

  const currentMonth = new Date();
  const currentDate = String(currentMonth).slice(4, 15);

  return (
    <main>
      <section className="pageSection">
        <div className="cmsDevImg" />
        <div className="imgText pagePadding displayFlex nodeJsHeader">
          <div className="displayFlex dataAndBackToHome">
            <BackToHome page="JOOMLA DEVELOPMENT" />
            <small className="currentDate">{currentDate}</small>
          </div>
          <div className="nodeDevHeading displayFlex">
            <p className="bigText">Joomla Development</p>
          </div>
        </div>
      </section>
      <section className="pagePadding  greyText">
        <small className="mobileDevBody lineHeight displayFlex">
          <div className="smallDivider"></div>
          <p>
            Either you are willing to start up with a brand new professional
            theme or looking to add features to the existing one.
            <span className="boldText"> tecHindustan </span> is expert in Joomla
            developments and developing the Joomla portals, focused on the User
            Experience and we are keep on revealing the best solutions for our
            clients.
          </p>
          <p>
            Our team of experts is capable of promptly providing you Joomla
            related services like CMS and E-Commerce developments. If you are
            planning to switch your website to Joomla or just willing of some
            tweaking, we can help you out. We create user friendly, simple,
            reliable, and economical Joomla websites, as Joomla has wide
            assortment of the built in plug-ins so it makes the development
            process simpler.
          </p>
          <p>Please do share your extension requirements with us.</p>
          <div className="mobileDevContainer displayFlex">
            <div className="mobileDevIcon displayFlex">
              <FaStarOfLife className="mobileIcon" />
            </div>
            <h1>Our Competence Includes</h1>
            <p>
              Our experts are well versed and have hands on the Joomla
              Development. The Joomla technologies we are expertise at are:
            </p>
            <ul className="list">
              {moodleDevService.map((list) => (
                <li key={list}>{list}</li>
              ))}
            </ul>
          </div>
        </small>
      </section>
    </main>
  );
};

export { JoomlaDev };
