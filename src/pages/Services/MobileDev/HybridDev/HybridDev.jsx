import { FaStarOfLife } from "react-icons/fa";
import { BackToHome } from "../../../../Components";

const HybridDev = () => {
  const hybridService = [
    "Multiple platforms of hybrid mobile app development are available to be chosen from",
    "platforms like IBM, Worklite, Ionic, Phonegap, and Xamarin.",
    "Hybrid apps costs lesser than the native apps; 50-70% of the native apps.",
    "As the development time reduced up to 40% hence, faster time-to-market as compared to",
    "the native app development time cycles.",
    "Dependency on native platforms is eliminated.",
  ];
  return (
    <main>
      <section className="pageSection">
        <div className="hybridDevImg pageHeaderImg" />
        <div className="imgText pagePadding">
          <BackToHome page="HYBRID APP DEVELOPMENT" />
        </div>
      </section>
      <section className="pagePadding  greyText">
        <small className="mobileDevBody lineHeight displayFlex">
          <p className="pageHeader bigText">
            <span className="primaryColorText"> HYBRID APP </span> DEVELOPMENT
          </p>
          <div className="smallDivider"></div>
          <p>
            Finding a cost effective way of developing an app that works on
            almost every platform has now become easier.
            <span className="boldText">Hybrid Mobile App Development</span>
            offers you a chance to reach wider audience. It is the best example
            of the solution that combines both the web-based and native
            applications.
          </p>
          <p>
            We make use of the most advanced platforms f the HTML to get best
            out of it. The Hybrid Apps Development is quite easy and are less
            time consuming as well. To avail the Hybrid Apps that functions
            flawlessly hire us today. Our team is highly experienced and
            technically savvy, who develop innovative mobile apps using hybrid
            platform on cost effective ways and time-to-market delivery reaching
            high volume of audiences.
          </p>
          <div className="mobileDevContainer displayFlex">
            <div className="mobileDevIcon displayFlex">
              <FaStarOfLife className="mobileIcon" />
            </div>
            <h1>Our Savvy Comprises:</h1>
            <p className="mobileDevPara">
              In today’s modern development landscape we cover the following
              competencies:
            </p>
            <ul className="list">
              {hybridService.map((category) => {
                return <li key={category}>{category}</li>;
              })}
            </ul>
          </div>
        </small>
      </section>
    </main>
  );
};

export { HybridDev };
