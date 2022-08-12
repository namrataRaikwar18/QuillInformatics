import { BackToHome } from "../../../../Components";
import { FaStarOfLife } from "react-icons/fa";
import "./MoodleDev.css";

const MoodleDev = () => {
  const moodleDevService = [
    "Custom payment gateway",
    "Moodle Customization",
    "Learning System Development",
    "eLearning with Moodle",
    "Plugin Developments",
    "Module developments",
    "Website maintenance",
  ];

  const currentMonth = new Date();
  const currentDate = String(currentMonth).slice(4, 15);

  return (
    <main>
      <section className="pageSection">
        <div className="cmsDevImg cmsDevImg" />
        <div className="imgText pagePadding displayFlex nodeJsHeader">
          <div className="displayFlex dataAndBackToHome">
            <BackToHome page="MOODLE DEVELOPMENT" />
            <small className="currentDate">{currentDate}</small>
          </div>
          <div className="nodeDevHeading displayFlex">
            <p className="bigText">Moodle Development</p>
          </div>
        </div>
      </section>
      <section className="pagePadding  greyText">
        <small className="mobileDevBody lineHeight displayFlex">
          <div className="smallDivider"></div>
          <p>
            <span className="boldText"> Moodle Development </span>
            ranks high in the top brackets of the Learning Management System on
            the web. Moodle can be used in the development of the e-learning
            sites and as Moodle is an open source platform and it can be easily
            customized. Whether it is about the existing features in Moodle or
            writing a separate additional functionality on Moodle as Plugin,
            Moodle makes it as simple as possible.
          </p>
          <p>
            <span className="boldText"> tecHindustan </span> Solutions is highly
            resourced to deliver highly customizable Moodle Solutions as per the
            client’s requirements. Our team of experts have deep knowledge of
            the Moodle platform and a vast experience of working in the
            educational domain as well.
          </p>
          <div className="mobileDevContainer displayFlex">
            <div className="mobileDevIcon displayFlex">
              <FaStarOfLife className="mobileIcon" />
            </div>
            <h1>Our Services:</h1>
            <p>We offer the following services for Moodle Development:</p>
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

export { MoodleDev };
