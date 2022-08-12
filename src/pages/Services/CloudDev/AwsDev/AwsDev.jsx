import { FaStarOfLife } from "react-icons/fa";
import { BackToHome } from "../../../../Components";

const AwsDev = () => {
  const mobileDevCategory = [
    "Deriving the best from the architecture provided by the AWS so that your product can run efficiently.",
    "In case the service level degrades; one can monitor the health of AWS infrastructure.",
    "Budgeting the cost of hosting and bandwidth, and Predicting as well.",
  ];
  return (
    <main>
      <section className="pageSection">
        <div className="awsDevImg pageHeaderImg" />
        <div className="imgText pagePadding">
          <BackToHome page="AWS DEVELOPMENT" />
        </div>
      </section>
      <section className="pagePadding  greyText">
        <small className="mobileDevBody lineHeight displayFlex">
          <p className="pageHeader bigText">
            <span className="primaryColorText"> AWS </span>
            APPLICATION DEVELOPMENT
          </p>
          <div className="smallDivider"></div>
          <p>
            <span className="boldText"> Amazon Web Services </span> have become
            the collection of cloud computing services that offer users a
            platform of cloud computing. Amazon offers computing capacities at a
            quicker pace and at reckon-able rates.{" "}
            <span className="boldText"> Amazon’s </span> cloud computing brought
            a boom, for the companies who were willing to launch a product or a
            service online. AWS provides cost effective services hence, it is a
            profitable and useful resource for the enterprises and the start-ups
            too. Unless, on takes care of the above mentioned points, the best
            out of AWS cannot be achieved. Our team at tecHindustan of IT
            professionals is proficient and they assist you with the optimum
            results.
          </p>
          <div className="mobileDevContainer displayFlex">
            <div className="mobileDevIcon displayFlex">
              <FaStarOfLife className="mobileIcon" />
            </div>
            <h1>Challenges faced while working with AWS are:</h1>
            <p className="mobileDevPara">
              Developing on AWS is very different from normal product
              architecture and the customer may face the challenges like:
            </p>
            <ul>
              {mobileDevCategory.map((category) => {
                return <li key={category}>{category}</li>;
              })}
            </ul>
          </div>
        </small>
      </section>
    </main>
  );
};

export { AwsDev };
