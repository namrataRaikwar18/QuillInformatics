import { BackToHome } from "../../../../Components";
import { HiOutlineShoppingCart } from "react-icons/hi";
import "../../serviceSubCategory.css";

const CustomEcomDev = () => {
  const magentoDevList = [
    "A robust and reliable e-commerce platform.",
    "Ongoing maintenances and support services.",
  ];

  return (
    <main>
      <section className="pageSection">
        <div className="customEcomDevImg pageHeaderImg" />
        <div className="imgText pagePadding displayFlex nodeJsHeader">
          <BackToHome page="CUSTOM E-COMMERCE DEVELOPMENT" />
        </div>
      </section>
      <section className="pagePadding  greyText">
        <small className="mobileDevBody lineHeight displayFlex">
          <p className="bigText">
            <span className="primaryColorText "> CUSTOM E-COMMERCE </span>
            DEVELOPMENT
          </p>
          <div className="smallDivider"></div>
          <p>
            Creating more than an
            <span className="boldText"> e-commerce website </span>. The business
            starts with us! Seeking for a seamless growth in the E-Commerce
            market? Tying up with a strong e-commerce partner can do wonders in
            the growth of your business. In establishing a profitable online
            enterprise the basic requirements are a smartly developed and
            designed e-cart site, flawless payment pylon, and of course the
            ongoing maintenances.
          </p>
          <p>
            Helping you with your{" "}
            <span className="boldText"> digital marketing </span> campaign as
            well; we are delivering a complete package that leads to a
            profitable business growth.
          </p>
          <div className="mobileDevContainer displayFlex">
            <div className="mobileDevIcon displayFlex">
              <HiOutlineShoppingCart className="mobileIcon" />
            </div>
            <h1>Our Resources:</h1>
            <p>
              We at tecHindustan Solutionsprovide all those requirements needed
              for the design and development of your e-commerce business. We
              render solutions for all the unsolved puzzles of your e-commerce
              business. The competencies we deliver are:
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

export { CustomEcomDev };
