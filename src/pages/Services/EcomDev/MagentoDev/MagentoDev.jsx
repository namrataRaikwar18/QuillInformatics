import { BackToHome } from "../../../../Components";
import { FaStarOfLife } from "react-icons/fa";
import '../../serviceSubCategory.css';

const MagentoDev = () => {
  const magentoDevList = [
    " Proficient with all editions of MAGENTO comprising community, Go (Professional), enterprise, and the latest version v1.8",
    "Web design, development and customization; focusing on the UI/UX.",
    "Development of extension and plugin.",
    "Omni-Channel strategic planning.",
    "MAGENTO Mobile Commerce.",
    "Our developers are experts in Magento Plugin Development with several plugins like shop by brand, order Tracking, check availability by zip code and much more.",
    "We have in-house certified Magento Developers and UX experts for better e-commerce user experience,/b>.",
  ];

  return (
    <main>
      <section className="pageSection">
        <div className="magentoDevImg pageHeaderImg" />
        <div className="imgText pagePadding displayFlex nodeJsHeader">
          <BackToHome page="MAGENTO DEVELOPMENT" />
        </div>
      </section>
      <section className="pagePadding  greyText">
        <small className="mobileDevBody lineHeight displayFlex">
          <p className="bigText">
            <span className="primaryColorText "> MAGENTO </span> DEVELOPMENT
          </p>
          <div className="smallDivider"></div>
          <p>
            Our <span className="boldText"> MAGENTO developers </span> have
            years of experience in working on the various versions of MAGENTO.
            If you are in a search of a MAGENTO Developer or looking for an
            E-commerce Website Development Service, the reasons to tie-up with
            us are as under:
          </p>
          <p>Please do share your extension requirements with us.</p>
          <div className="mobileDevContainer displayFlex">
            <div className="mobileDevIcon displayFlex">
              <FaStarOfLife className="mobileIcon" />
            </div>
            <h1>Our Proficiency:</h1>
            <p>
              In the competitive world, being proficient in the field particular
              is something that results in better ROI. We have proficient
              developers who render the following services:
            </p>
            <ul>
              {magentoDevList.map((list) => (
                <li key={list}>{list}</li>
              ))}
            </ul>
          </div>
        </small>
      </section>
    </main>
  );
};

export { MagentoDev };
