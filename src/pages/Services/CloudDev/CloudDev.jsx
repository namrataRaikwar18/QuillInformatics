import { BackToHome } from "../../../Components";
import { IoCloudyOutline } from "react-icons/io5";

const CloudDev = () => {
  const cloudDevCategory = [
    "Cloud Assessment Consulting",
    "Cloud Application Development",
    "Cloud Application Migration",
    "Cloud Application Integration",
  ];
  return (
    <main>
      <section className="pageSection">
        <div className="cloudDevImg pageHeaderImg" />
        <div className=" imgText pagePadding">
          <BackToHome page="CLOUD SAAS DEVELOPMENT" />
        </div>
      </section>
      <section className="pagePadding  greyText">
        <small className="mobileDevBody lineHeight displayFlex">
          <p className="pageHeader bigText">
            CLOUD SAAS<span className="primaryColorText"> DEVELOPMENT </span>
          </p>
          <div className="smallDivider"></div>
          <p>
            Whether you are in a need of a web or a service application on the
            cloud; our <span className="boldText"> SaaS Developers </span> will
            help you out. Our developers will drive your{" "}
            <span className="boldText"> cloud application </span> initiatives in
            the right direction.
          </p>
          <p>
            We assist you in choosing the appropriate suited cloud (public,
            private or hybrid) platform. Our post-deployment and existing
            applications will help you to manage your application
            infrastructure.
          </p>
          <div className="mobileDevContainer displayFlex">
            <div className="mobileDevIcon displayFlex">
              <IoCloudyOutline className="mobileIcon" />
            </div>
            <h1 className="centerText">
              Working with tecHindustan is advantageous
            </h1>
            <p className="mobileDevPara">
              Our cloud development offering includes:
            </p>
            <ul className="list">
              {cloudDevCategory.map((category) => {
                return <li key={category}>{category}</li>;
              })}
            </ul>
            <p>
              Our Cloud Developers are well versed and experienced in{" "}
              <span className="boldText"> cloud application development </span>{" "}
              on the Microsoft Windows Azure, Google Apps, and Force.com. Their
              skills and knowledge have been nourished through several
              successful projects.
            </p>
            <p>
              Contact us in accordance to know more on how we can guide you for
              a successful cloud based business.
            </p>
          </div>
        </small>
      </section>
    </main>
  );
};

export { CloudDev };
