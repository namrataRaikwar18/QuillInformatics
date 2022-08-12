import "./Drawer.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Drawer = ({ setOpenDrawer }) => {
  const [subcategory, setSubcategory] = useState({
    service: false,
    webDev: false,
    mobileDev: false,
    cmsDev: false,
    eComDev: false,
    cloudDev: false,
    digitalDev: false,
    crmDev: false,
    productDev: false,
    uxDev: false,
  });

  const { service } = subcategory;

  const closeDrawerHandler = () => {
    setOpenDrawer(false);
  };

  const Back = ({ category }) => {
    return (
      <div
        className="closeDrawer displayFlex"
        onClick={() => setSubcategory({ ...subcategory, [category]: false })}
      >
        <span className="backIcon"></span>
        <p className="back">Back</p>
      </div>
    );
  };

  const drawerData = [
    {
      to: "#",
      page: "Service",
      isService: service,
      category: [
        {
          toCategory: "/web-development",
          categoryPage: "Web Development",
          isPage: "webDev",
          subCategory: [
            {
              toSubCategory: "/php-development",
              subCategoryPage: "PHP Development",
            },
            {
              toSubCategory: "/asp-net-development",
              subCategoryPage: "ASP.Net Development",
            },
            {
              toSubCategory: "/java-web-development",
              subCategoryPage: "JAVA Web Development",
            },
            {
              toSubCategory: "/python-web-development",
              subCategoryPage: "Python Web Development",
            },
            {
              toSubCategory: "/ruby-on-rails-development",
              subCategoryPage: "Ruby on Rails Development",
            },
            {
              toSubCategory: "/node-js-development",
              subCategoryPage: "Node js Development",
            },
            {
              toSubCategory: "/html5-canvas-development",
              subCategoryPage: "HTML5 CANVAS Development",
            },
          ],
        },
        {
          toCategory: "/mobile-app-development",
          categoryPage: "Mobile App Development",
          isPage: "mobileDev",
          subCategory: [
            {
              toSubCategory: "/iphone-app-development",
              subCategoryPage: "iPhone App Development",
            },
            {
              toSubCategory: "/ipad-app-development",
              subCategoryPage: "iPad App Development",
            },
            {
              toSubCategory: "/android-app-development",
              subCategoryPage: "Android App Development",
            },
            {
              toSubCategory: "/hybrid-app-development",
              subCategoryPage: "Hybrid App Development",
            },
          ],
        },
        {
          toCategory: "/cms-development",
          categoryPage: "CMS Development",
          isPage: "cmsDev",
          subCategory: [
            {
              toSubCategory: "/wordpress-development",
              subCategoryPage: "WordPress Development",
            },
            {
              toSubCategory: "/drupal-development",
              subCategoryPage: "Drupal Development",
            },
            {
              toSubCategory: "/moodle-development",
              subCategoryPage: "Moodle Development",
            },
            {
              toSubCategory: "/joomla-development",
              subCategoryPage: "Joomla Development",
            },
          ],
        },
        {
          toCategory: "/e-commerce-development",
          categoryPage: "E-commerce Development",
          isPage: "eComDev",
          subCategory: [
            {
              toSubCategory: "/magento-development",
              subCategoryPage: "Magento Development",
            },
            {
              toSubCategory: "/custom-e-commerce-development",
              subCategoryPage: "Custom E-Commerve Development",
            },
            {
              toSubCategory: "/prestashop-development",
              subCategoryPage: "Prestashop Development",
            },
            {
              toSubCategory: "/shopify-development",
              subCategoryPage: "Shopify Development",
            },
            {
              toSubCategory: "/bigcommerce-development",
              subCategoryPage: "BigCommerve Development",
            },
            {
              toSubCategory: "/opencart-development",
              subCategoryPage: "Opencart Development",
            },
          ],
        },
        {
          toCategory: "/cloud-saas-development",
          categoryPage: "Cloud Saas Development",
          isPage: "cloudDev",
          subCategory: [
            {
              toSubCategory: "/saas-application-development",
              subCategoryPage: "Saas Application Development",
            },
            {
              toSubCategory: "/google-cloud-development",
              subCategoryPage: "Google Cloud Development",
            },
            {
              toSubCategory: "/aws-development",
              subCategoryPage: "Aws Development",
            },
          ],
        },
        {
          toCategory: "/digital-marketing",
          categoryPage: "Digital Marketing",
          isPage: "digitalDev",
          subCategory: [
            {
              toSubCategory: "/search-engine-optimization",
              subCategoryPage: "Search Engine Optimization",
            },
            {
              toSubCategory: "/content-development",
              subCategoryPage: "Content Development",
            },
            {
              toSubCategory: "/social-media-marketing",
              subCategoryPage: "Social Media Marketing",
            },
          ],
        },
        {
          toCategory: "/crm-development",
          categoryPage: " CRM Development",
          isPage: "crmDev",
          subCategory: [
            {
              toSubCategory: "/sugarcrm-development",
              subCategoryPage: "SugarCRM Development",
            },
            {
              toSubCategory: "/zoho-crm-development",
              subCategoryPage: "Zoho CRM Development",
            },
            {
              toSubCategory: "/vtigercrm-development",
              subCategoryPage: "Vtiger CRM Marketing",
            },
          ],
        },
        {
          toCategory: "/product-development",
          categoryPage: "Product Development",
        },
        {
          toCategory: "/user-experience-ux-design",
          categoryPage: "User Experience(UX) Design",
        },
      ],
    },
    { to: "/about-us", page: "About Us" },
    { to: "/contact-us", page: "Contact Us" },
  ];

  return (
    <div className="drawer">
      <ul className="alldrawerList lightGreyText">
        {drawerData.map(({ to, page, category, isService }) => {
          return (
            <section className="allCategoryDrawer" key={page}>
              {page === "Service" ? (
                <div
                  className="closeDrawer displayFlex"
                  onClick={() => setOpenDrawer(false)}
                >
                  <span className="backIcon"></span>
                  <p className="back">Back</p>
                </div>
              ) : null}
              <div className={category ? "nextCategory" : null}>
                <Link to={to} className="link">
                  <li className="list drawerList" onClick={closeDrawerHandler}>
                    {page}
                  </li>
                </Link>
                {category ? (
                  <span
                    className="drawerCategory"
                    onClick={() =>
                      setSubcategory({ ...subcategory, service: true })
                    }
                  ></span>
                ) : null}
              </div>
              {isService ? (
                <div className="categoryDrawer">
                  {category?.map(
                    ({ toCategory, categoryPage, subCategory, isPage }) => (
                      <div key={toCategory}>
                        {categoryPage === "Web Development" ? (
                          <Back category={"service"} key={categoryPage} />
                        ) : null}
                        <div className={subCategory ? "nextCategory" : null}>
                          <Link to={toCategory} className="link">
                            <li
                              className="list drawerList"
                              onClick={closeDrawerHandler}
                            >
                              {categoryPage}
                            </li>
                          </Link>
                          {subCategory ? (
                            <span
                              className="drawerCategory"
                              onClick={() =>
                                setSubcategory({
                                  ...subcategory,
                                  [isPage]: true,
                                })
                              }
                            ></span>
                          ) : null}
                        </div>
                        {subcategory[isPage] ? (
                          <div className="categoryDrawer pageSubCategory">
                            {subcategory[isPage] ? (
                              <Back category={isPage} key={isPage} />
                            ) : null}
                            {subCategory?.map(
                              ({ toSubCategory, subCategoryPage }) => {
                                return (
                                  <div key={toSubCategory}>
                                    <Link to={toSubCategory} className="link">
                                      <li
                                        className="list drawerList"
                                        onClick={closeDrawerHandler}
                                      >
                                        {subCategoryPage}
                                      </li>
                                    </Link>
                                  </div>
                                );
                              }
                            )}
                          </div>
                        ) : null}
                      </div>
                    )
                  )}
                </div>
              ) : null}
            </section>
          );
        })}
      </ul>
    </div>
  );
};

export { Drawer };
