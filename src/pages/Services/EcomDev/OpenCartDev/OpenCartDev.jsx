import { BackToHome } from "../../../../Components";
import { HiOutlineShoppingCart } from "react-icons/hi";
import '../../serviceSubCategory.css';

const OpenCartDev = () => {
  const magentoDevList = [
    "It is a robust platform that offers options for the modification in the default modules based your business requirements.",
    "Offers liberty to develop extensions as per your requirements.",
    "Opencart offers effective e-commerce business solutions that helps in generating seamless business growth.",
    "E-commerce cart can be easily optimized for SEO through opencart’s inbuilt features like product related URL’s, etc",
  ];

  return (
    <main>
      <section className="pageSection">
        <div className="openCartDevImg pageHeaderImg" />
        <div className="imgText pagePadding displayFlex nodeJsHeader  ">
          <BackToHome page="OPENCART DEVELOPMENT" />
        </div>
      </section>
      <section className="pagePadding  greyText">
        <small className="mobileDevBody lineHeight displayFlex">
          <p className="bigText">
            <span className="primaryColorText "> OPENCART </span>
            DEVELOPMENT
          </p>
          <div className="smallDivider"></div>
          <p>
            <span className="boldText"> Opencart </span> is a feature rich and
            user friendly open source e-commerce business solution. It offers
            e-commerce merchants an online shopping business opportunity at
            minimal costs with robustness. Our opencart developers are well
            versed with the platform and offer you a site that is feature rich;
            delivering quicker and convenient ways of shopping.
          </p>
          <p>
            <span className="boldText"> tecHindustan Solutions </span>{" "}
            understand the need of your e-commerce business site, hence our
            opencart developers utilize the platform resulting in a rocket
            business growth.
          </p>
          <div className="mobileDevContainer displayFlex">
            <div className="mobileDevIcon displayFlex">
              <HiOutlineShoppingCart className="mobileIcon" />
            </div>
            <h1>It’s advantageous utilizing the platform</h1>
            <p>
              Profits of using the{" "}
              <span className="boldText"> opencart e-commerce </span> business
              solution platform:
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

export { OpenCartDev };
