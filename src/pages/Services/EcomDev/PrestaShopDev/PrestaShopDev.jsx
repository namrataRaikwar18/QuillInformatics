import { BackToHome } from "../../../../Components";
import { FaStarOfLife } from "react-icons/fa";
import '../../serviceSubCategory.css';

const PrestaShopDev = () => {
  const magentoDevList = [
    " PrestaShop is advantageous for those who are facing problems with their higher speed internet connectivity; allowing them to attain faster access to their e-commerce site than anyone else could.",
    "The PrestaShop designed sites are smooth and robust as they are compatible for the usage over any browser or any device.",
    "PrestaShop offers a wide range of themes that renders conveniences for the user to shape the site as per their requirements and ease.",
  ];

  return (
    <main>
      <section className="pageSection">
        <div className="prestaShopDevImg pageHeaderImg" />
        <div className="imgText pagePadding displayFlex nodeJsHeader">
          <BackToHome page="PRESTASHOP DEVELOPMENT" />
        </div>
      </section>
      <section className="pagePadding  greyText">
        <small className="mobileDevBody lineHeight displayFlex">
          <p className="bigText">
            <span className="primaryColorText "> PRESTASHOP </span> DEVELOPMENT
          </p>
          <div className="smallDivider"></div>
          <p>
            tecHindustan’s in-house
            <span className="boldText"> PrestaShop Designers </span> and
            Developers have strong experience on the field. The PrestaShop is
            offered for the companies ranging from medium to small scale
            businesses to help them in designing a website that is customized
            for e-commerce business. The PrestaShop Development is creating a
            buzz in the e-commerce business guild. We are not only providing you
            highly qualified skills; but many years of experience to ensure you
            derive the best for what you are paying.
          </p>
          <div className="mobileDevContainer displayFlex">
            <div className="mobileDevIcon displayFlex">
              <FaStarOfLife className="mobileIcon" />
            </div>
            <h1>Its beneficial using PrestaShop Development</h1>
            <p>
              The Advantages of using PrestaShop platform are here as under:
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

export { PrestaShopDev };
