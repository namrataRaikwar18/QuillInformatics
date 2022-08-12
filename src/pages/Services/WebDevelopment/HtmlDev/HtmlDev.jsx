import { BackToHome } from "../../../../Components";
import { FaStarOfLife } from "react-icons/fa";

const HtmlDev = () => {
  const htmlList = [
    "Client focused and transparent approach.",
    "Deep talent and expertise in the CSS3 and JavaScript.",
    "Proven track record of successful HTML5 project delivery.",
    "Rigorous quality assurance.",
    "Number of layout and styles are followed in CSS3 and jQuery.",
  ];

  return (
    <main>
      <section className="pageSection">
        <div className="cmsDevImg pageHeaderImg" />
        <div className="imgText pagePadding displayFlex nodeJsHeader">
          <BackToHome page="HTML5 CANVAS DEVELOPMENT" />
          <div className="nodeDevHeading displayFlex">
            <p className="bigText">HTML5 CANVAS Development</p>
          </div>
        </div>
      </section>
      <section className="pagePadding  greyText">
        <small className="mobileDevBody lineHeight displayFlex">
          <p className="pageHeader bigText">
            HTML5 CANVAS <span className="primaryColorText"> DEVELOPMENT </span>
          </p>
          <div className="smallDivider"></div>
          <p>
            Developing the
            <span className="boldText"> Customized Canvas Developments </span>by
            following the “AppNovation” is our prime concern. We are keen on
            delivering exalted sites successively. Here your dreams of providing
            your customers a fast and responsive product over multiple platforms
            come true. <span className="boldText"> tecHindustan </span> is the
            right place to avail a website that delivers full customer
            satisfaction. Our team of experts has all the expertise and delivery
            excellence of effectively executing all kinds of projects. Our
            skilful developers have built excellent
            <span className="boldText"> websites </span>
            and applications, that are consistent across all browsers.
          </p>
          <div className="mobileDevContainer displayFlex">
            <div className="mobileDevIcon displayFlex">
              <FaStarOfLife className="mobileIcon" />
            </div>
            <h1>Our Competence Includes:</h1>
            <ul className="list">
              {htmlList.map((list) => (
                <li key={list}>{list}</li>
              ))}
            </ul>
          </div>
        </small>
      </section>
    </main>
  );
};

export { HtmlDev };
