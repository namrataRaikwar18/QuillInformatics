import { IoCloudyOutline } from "react-icons/io5";
import { BackToHome } from "../../../../Components";

const GoogleDev = () => {
  const cloudDevCategory = [
    "Customer is not required to deal with the back-end tasks like checking application status and handling the workflow.",
    "The spectrum of tools used for the development is available in a single integrated platform.",
    "The plan starts from free to the paid ones.",
    "The authentication tasks are dealt by the Google’s App Engine.",
  ];
  return (
    <main>
      <section className="pageSection">
        <div className="googleDevImg pageHeaderImg" />
        <div className=" imgText pagePadding">
          <BackToHome page="GOOGLE CLOUD DEVELOPMENT" />
        </div>
      </section>
      <section className="pagePadding  greyText">
        <small className="mobileDevBody lineHeight displayFlex">
          <p className="pageHeader bigText">
            <span className="primaryColorText"> GOOGLE </span> DEVELOPMENT
          </p>
          <div className="smallDivider"></div>
          <p>
            As Google is considered for managing the largest and the most
            reliable IT infrastructure, it provides the development
            opportunities as well. In accordance to meet your business needs
            tecHindustan provides custom development and support services for
            Google Cloud Platform. The thing sounds good; to see behind the
            world’s biggest cloud and get a chance to get engaged with the
            international cloud platform. The
            <span className="boldText"> Google Cloud Development </span>help
            users in turning their zero functional applications, to the fully
            functional ones.
          </p>
          <div className="mobileDevContainer displayFlex">
            <div className="mobileDevIcon displayFlex">
              <IoCloudyOutline className="mobileIcon" />
            </div>
            <h1 className="centerText">
              Profits of using Google’s Cloud Development
            </h1>

            <p>
              As the  <span className="boldText"> Google Cloud platform </span> offers a wide range of high ROI
              opportunities via flexibility, powerful tools, and simplified
              pricing. So, we suggest you to grab the opportunity and get ranked
              in the digital market today with our help. The profits of using
              the Google Cloud Development are listed as under:
            </p>
            <p>
              Contact us in accordance to know more on how we can guide you for
              a successful cloud based business.
            </p>
            <ul>
              {cloudDevCategory.map((category) => {
                return <li key={category}>{category}</li>;
              })}
            </ul>
          </div>
        </small>
      </section>
    </main>
  );
};

export { GoogleDev };
