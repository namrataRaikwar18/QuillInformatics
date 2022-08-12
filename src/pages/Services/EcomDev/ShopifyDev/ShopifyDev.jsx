import { BackToHome } from "../../../../Components";
import { FaStarOfLife } from "react-icons/fa";

const ShopifyDev = () => {
  const moodleDevService = [
    "Shopify Theme and App Design",
    "Shopify Theme and App Customization",
    "Shopify API Development",
    "Shopify SEO",
    "Data Migration to Shopify.",
    "Migration to Shopify From Other Platforms",
  ];

  const currentMonth = new Date();
  const currentDate = String(currentMonth).slice(4, 15);

  return (
    <main>
      <section className="pageSection">
        <div className="cmsDevImg pageHeaderImg" />
        <div className="imgText pagePadding displayFlex nodeJsHeader">
          <div className="displayFlex dataAndBackToHome">
            <BackToHome page="SHOPIFY DEVELOPMENT" />
            <small className="currentDate">{currentDate}</small>
          </div>
          <div className="nodeDevHeading displayFlex">
            <p className="bigText">Shopify Development</p>
          </div>
        </div>
      </section>
      <section className="pagePadding  greyText">
        <small className="mobileDevBody lineHeight displayFlex">
          <p>
            Shopify is a SAAS based highly versatile{" "}
            <span className="boldText"> e-commerce web development </span>{" "}
            platform. tecHindustan Solutions offer you services for crea ting
            highly functional and feature rich Shopify Developed e-commerce
            sites. Our experts have hands experience of creating the Shopify
            e-commerce websites, that results in quick ROI. Shopify is a tool
            that offers simple, quick and easy to set up online store and our
            experts are well versed with the tool; they help you in developing
            the best e-commerce store.
          </p>
          <div className="mobileDevContainer displayFlex">
            <div className="mobileDevIcon displayFlex">
              <FaStarOfLife className="mobileIcon" />
            </div>
            <h1>Why tecHindustan?</h1>
            <p>
              Our experts are keen on providing the premium design and
              development services. We ensure your online store to be compatible
              with the latest web standards and are also SEO friendly. Our
              experts provide assistance from gestating the project to the
              delivery of the project. The services we offer on the Shopify
              platform are:
            </p>
            <ul>
              {moodleDevService.map((list) => (
                <li key={list}>{list}</li>
              ))}
            </ul>
          </div>
        </small>
      </section>
    </main>
  );
};

export { ShopifyDev };
