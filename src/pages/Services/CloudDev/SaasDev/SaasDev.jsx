import { FaStarOfLife } from "react-icons/fa";
import { BackToHome } from "../../../../Components";

const SaasDev = () => {
  const mobileDevCategory = [
    "It helps in improving efficiency and collaboration as everything is on cloud.",
    "As zero maintenance is needed hence total cost of ownership are lowered down.",
    "Low upfront cost in the form of monthly subscriptions.",
  ];
  return (
    <main>
      <section className="pageSection">
        <div className="saasDevImg pageHeaderImg" />
        <div className="imgText pagePadding">
          <BackToHome page="SAAS APPLICATION DEVELOPMENT" />
        </div>
      </section>
      <section className="pagePadding  greyText">
        <small className="mobileDevBody lineHeight displayFlex">
          <p className="pageHeader bigText">
            <span className="primaryColorText"> SAAS </span>
            APPLICATION DEVELOPMENT
          </p>
          <div className="smallDivider"></div>
          <p>
            It is a way of delivering applications over the internet as a
            service. It let people create
            <span className="boldText"> web development </span> in which one
            doesn’t need to worry for the complexities of the hardware and the
            software management.
          </p>
          <p>
            Especially, if you are a startup SaaS model can be ingenious for the
            business growth. It takes off all your worries and concentrations
            from the core business functionalities.
          </p>
          <p>
            All these above mentioned points help companies in broadening their
            user base by making services much more affordable and easily
            accessible.
          </p>
          <p>
            Taking an example of a bank, as it protects the privacy of the
            customer at the same time providing them the relevant and reliable
            services. SaaS works in the same way as a bank do, it provides the
            reliable information on the web while securing the privacy at the
            same time as everything is on cloud.
          </p>
          <div className="mobileDevContainer displayFlex">
            <div className="mobileDevIcon displayFlex">
              <FaStarOfLife className="mobileIcon" />
            </div>
            <h1>Turnouts of using SaaS</h1>
            <p className="mobileDevPara">
              We are offering a wide range of services to our customers; we
              craft experience that fit your needs. Advantages of using the
              <span className="boldText"> SaaS Application Development </span>
              are:
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

export { SaasDev };
