import { GiCheckMark } from "react-icons/gi";
import { BackToHome } from "../../../../Components";
import "./AndroidDev.css";

const AndroidDev = () => {
  const ipadDevService = [
    "m-commerce",
    "Enterprise App Development",
    "Location based apps",
    "Entertainment and News apps",
    "Social Networking Apps",
  ];
  return (
    <main>
      <section className="pageSection">
        <div className="androidDevImg" />
        <div className="imgText pagePadding">
          <BackToHome page="ANDROID APP DEVELOPMENT" />
        </div>
      </section>
      <section className="pagePadding  greyText">
        <small className="mobileDevBody lineHeight displayFlex">
          <p className="pageHeader bigText">
            ANDROID APP <span className="primaryColorText"> DEVELOPMENT </span>
          </p>
          <div className="smallDivider"></div>
          <p>
            Android App Development is very crucial to any business in the era.
            Our custom Android App Development can do wonders to your business
            growth. Our team apart from the traditional app development
            methodologies delivers you such an application that incorporates the
            changing trend’s fashion. We are delivering apps since the early
            times of the introduction of android in the market. Our portfolio is
            continuously widening for successful android developments and happy
            customers as well.
          </p>
          <p>
            We are one of the leading Android App Development Service providers
            in the suburb. tecHindustan is composed of highly experienced
            Android Developers who are capable of delivering the “wow factor” in
            their developments.
          </p>
          <div className="androidField displayFlex">
            <div className="mobileDevContainer displayFlex">
              <p className="mobileDevPara primaryColorText">
                We are dealing in the following fields:
              </p>
              <ul className="list">
                {ipadDevService.map((category) => {
                  return (
                    <li key={category}>
                      <GiCheckMark className="checkIcon" />
                      {category}
                    </li>
                  );
                })}
              </ul>
            </div>
            <img
              src="https://techindustan.com/wp-content/uploads/2016/02/03_img-580x380.jpg"
              alt="content strategy"
              className="responsiveImg"
            />
          </div>
        </small>
      </section>
    </main>
  );
};

export { AndroidDev };
