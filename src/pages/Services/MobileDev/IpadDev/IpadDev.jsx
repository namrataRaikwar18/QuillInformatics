import { GoDeviceMobile } from "react-icons/go";
import { BackToHome } from "../../../../Components";
import "./IpadDev.css";

const IpadDev = () => {
  const ipadDevService = [
    " Social Networking iPad Apps",
    "Health and Medical iPad Apps",
    "Enterprise Product based iPad Apps",
    "Productivity iPad Apps",
    "Recreational iPad Apps",
    "m-commerce Apps",
    "GPS Enabled iPad Apps",
  ];
  return (
    <main>
      <section className="pageSection">
        <div className="iPadDevImg" />
        <div className="imgText pagePadding">
          <BackToHome page="IPAD APP DEVELOPMENT" />
        </div>
      </section>
      <section className="pagePadding  greyText">
        <small className="mobileDevBody lineHeight displayFlex">
          <p className="pageHeader bigText">
            IPAD APP <span className="primaryColorText"> DEVELOPMENT </span>
          </p>
          <div className="smallDivider"></div>
          <p>
            With the advancement in the technologies, changing trends in the
            iPad applications have brought up a boom in the industry as iPads
            are as much popular as the iPhones. Our experts have experience of
            over ten years of experience in the field; the development with us
            is as simple as cutting a cube of butter with a hot knife.
          </p>
          <p>
            As iPads are mainly used by the businessmen and the end consumers,
            you must not lag behind in experiencing the best application ever
            created. Our team of expert renders the best of services and caters
            all the basic needs of the user.
          </p>
          <div className="mobileDevContainer displayFlex">
            <div className="mobileDevIcon displayFlex">
              <GoDeviceMobile className="mobileIcon" />
            </div>
            <h1>Our Services Include:</h1>
            <p className="mobileDevPara">
              We develop in the following fields of applications:
            </p>
            <ul className="list">
              {ipadDevService.map((category) => {
                return <li key={category}>{category}</li>;
              })}
            </ul>
          </div>
          <p>
            The development doesn’t ends up here; a lot is yet to be developed.
          </p>
        </small>
      </section>
    </main>
  );
};

export { IpadDev };
