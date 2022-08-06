import { BackToHome } from "../../../../Components";
import "./JavaDev.css";

const JavaDev = () => {
  return (
    <main>
      <section className="pageSection">
        <div className="javaDevImg" />
        <div className="imgText pagePadding">
          <BackToHome page="JAVA WEB DEVELOPMENT" />
        </div>
      </section>
      <section className="pagePadding">
        <small className="pageBody lineHeight displayFlex greyText">
          <p className="bigText">
            <span className="primaryColorText"> JAVA </span> DEVELOPMENT
          </p>
          <div className="smallDivider"></div>
          <p>
            <span className="boldText"> tecHindustan Solutions </span>
            Is potent In creating fast, reliable, and appealing applications and
            Products. Investing on advanced
            <span className="boldText"> Java development </span> over decades is
            our competence. We provide the best of services of
            <span className="boldText"> Java Technologies </span>that enables us
            to provide our clients full Returns on Investments.
          </p>
          <p>
            We create secured,<span className="boldText"> Java website </span>{" "}
            and applications keeping in mind the highest standard of quality on
            budget. We have dedicated team of
            <span className="boldText"> Java Developers </span> who render
            quality <span className="boldText"> Java Developments </span> . Our
            team of professionals is expertise in creating both the generic as
            well as enterprise Java Solutions (J2EE).
          </p>
          <div className="centerText displayFlex javaOfferContainer">
            <h3 className="primaryColorText">OUR OFFERINGS</h3>
            <h3>
              We optimize the way you desire your product to be. Our services
              include:
            </h3>
            <ul className="list javaServices displayFlex boldText">
              <li className="javaService">
                Customised Java J2EEE Application Development
              </li>
              <li className="javaService">
                Enterprise Java J2EEE Application Development
              </li>
              <li className="javaService">
                Java Architecture & Design Evalutation
              </li>
              <li className="javaService">Responsive Web Protals </li>
              <li className="javaService">Integration of payment gateways</li>
              <li className="javaService">Application Maintenance</li>
              <li className="javaService">Bulk Malling Systems</li>
              <li className="javaService">E-Commerce Websites</li>
            </ul>
          </div>
        </small>
      </section>
    </main>
  );
};

export { JavaDev };
