import { useState } from "react";
import { Link } from "react-router-dom";
import { Subcategory } from "../index";
import "./Popover.css";

const Popover = ({ scrollNav, drawerSubcategory, setPopover }) => {
  const [subcategory, setSubcategory] = useState({
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

  const { webDev, mobileDev, cmsDev, eComDev, cloudDev, digitalDev, crmDev } =
    subcategory;

  const webDevList = [
    { to: "/php-development", page: "PHP Development" },
    { to: "/asp-net-development", page: "ASP.Net Development" },
    { to: "/java-web-development", page: "JAVA Web Development" },
    { to: "/python-web-development", page: "Python Web Development" },
    { to: "/ruby-on-rails-development", page: "Ruby on Rails Development" },
    { to: "/node-js-development", page: "Node js Development" },
    { to: "/html5-canvas-development", page: "HTML5 CANVAS Development" },
  ];

  const mobileDevList = [
    { to: "/iphone-app-development", page: "iPhone App Development" },
    { to: "/ipad-app-development", page: "iPad App Development" },
    { to: "/android-app-development", page: "Android App Development" },
    { to: "/hybrid-app-development", page: "Hybrid App Development" },
  ];

  const cmsDevList = [
    { to: "/wordpress-development", page: "WordPress Development" },
    { to: "/drupal-development", page: "Drupal Development" },
    { to: "/moodle-development", page: "Moodle Development" },
    { to: "/joomla-development", page: "Joomla Development" },
  ];

  const eComDevList = [
    { to: "/magento-development", page: "Magento Development" },
    {
      to: "/custom-e-commerce-development",
      page: "Custom E-Commerve Development",
    },
    { to: "/prestashop-development", page: "Prestashop Development" },
    { to: "/shopify-development", page: "Shopify Development" },
    { to: "/bigcommerce-development", page: "BigCommerve Development" },
    { to: "/opencart-development", page: "Opencart Development" },
  ];

  const cloudDevList = [
    {
      to: "/saas-application-development",
      page: "Saas Application Development",
    },
    { to: "/google-cloud-development", page: "Google Cloud Development" },
    { to: "/aws-development", page: "Aws Development" },
  ];

  const digitalDevList = [
    { to: "/search-engine-optimization", page: "Search Engine Optimization" },
    { to: "/content-development", page: "Content Development" },
    { to: "/social-media-marketing", page: "Social Media Marketing" },
  ];

  const crmDevList = [
    { to: "/sugarcrm-development", page: "SugarCRM Development" },
    { to: "/zoho-crm-development", page: "Zoho CRM Development" },
    { to: "/vtigercrm-development", page: "Vtiger CRM Marketing" },
  ];

  const closePopOver = () => {
    setPopover(false);
  };

  return (
    <div
      className={`${drawerSubcategory ? "subcategoryDrawer" : "popover"}  ${
        scrollNav ? " stickyNavPopover" : "normalNav"
      }`}
    >
      <ul className="list greyText">
        <small className="categoryList displayFlex">
          <li
            className="category "
            onMouseOver={() =>
              setSubcategory({
                ...subcategory,
                webDev: true,
                mobileDev: false,
                cmsDev: false,
                eComDev: false,
                cloudDev: false,
                digitalDev: false,
                crmDev: false,
              })
            }
          >
            <Link
              onClick={closePopOver}
              to="/web-development"
              className="categoryActive link popoverCategory categoryWithSubCategory"
            >
              Web Development
            </Link>
            {webDev ? (
              <Subcategory
                closePopOver={closePopOver}
                subcategoryList={webDevList}
                
              />
            ) : null}
          </li>
          <li
            className="category "
            onMouseOver={() =>
              setSubcategory({
                ...subcategory,
                mobileDev: true,
                webDev: false,
                cmsDev: false,
                eComDev: false,
                cloudDev: false,
                digitalDev: false,
                crmDev: false,
              })
            }
          >
            <Link
              onClick={closePopOver}
              to="/mobile-app-development"
              className="categoryActive link popoverCategory categoryWithSubCategory"
            >
              Mobile App Development
            </Link>
            {mobileDev ? (
              <Subcategory
                closePopOver={closePopOver}
                subcategoryList={mobileDevList}
                
              />
            ) : null}
          </li>
          <li
            className="category "
            onMouseOver={() =>
              setSubcategory({
                ...subcategory,
                cmsDev: true,
                mobileDev: false,
                eComDev: false,
                cloudDev: false,
                digitalDev: false,
                crmDev: false,
                webDev: false,
              })
            }
          >
            <Link
              onClick={closePopOver}
              to="/cms-development"
              className="categoryActive link popoverCategory categoryWithSubCategory"
            >
              CMS Development
            </Link>
            {cmsDev ? (
              <Subcategory
                closePopOver={closePopOver}
                subcategoryList={cmsDevList}
                
              />
            ) : null}
          </li>
          <li
            className="category"
            onMouseOver={() =>
              setSubcategory({
                ...subcategory,
                eComDev: true,
                mobileDev: false,
                cmsDev: false,
                cloudDev: false,
                digitalDev: false,
                crmDev: false,
                webDev: false,
              })
            }
          >
            <Link
              onClick={closePopOver}
              to="/e-commerce-development"
              className="categoryActive link popoverCategory categoryWithSubCategory"
            >
              E-commerce Development
            </Link>
            {eComDev ? (
              <Subcategory
                closePopOver={closePopOver}
                subcategoryList={eComDevList}
                
              />
            ) : null}
          </li>
          <li
            className="category"
            onMouseOver={() =>
              setSubcategory({
                ...subcategory,
                cloudDev: true,
                eComDev: false,
                mobileDev: false,
                cmsDev: false,
                digitalDev: false,
                crmDev: false,
                webDev: false,
              })
            }
          >
            <Link
              onClick={closePopOver}
              to="/cloud-saas-development"
              className="categoryActive link popoverCategory categoryWithSubCategory"
            >
              Cloud Saas Development
            </Link>
            {cloudDev ? (
              <Subcategory
                closePopOver={closePopOver}
                subcategoryList={cloudDevList}
                
              />
            ) : null}
          </li>
          <li
            className="category"
            onMouseOver={() =>
              setSubcategory({
                ...subcategory,
                digitalDev: true,
                cloudDev: false,
                mobileDev: false,
                cmsDev: false,
                eComDev: false,
                crmDev: false,
                webDev: false,
              })
            }
          >
            <Link
              onClick={closePopOver}
              to="/digital-marketing"
              className="categoryActive link popoverCategory categoryWithSubCategory"
            >
              Digital Marketing
            </Link>
            {digitalDev ? (
              <Subcategory
                closePopOver={closePopOver}
                subcategoryList={digitalDevList}
                
              />
            ) : null}
          </li>
          <li
            className="category"
            onMouseOver={() =>
              setSubcategory({
                ...subcategory,
                crmDev: true,
                mobileDev: false,
                cmsDev: false,
                eComDev: false,
                cloudDev: false,
                digitalDev: false,
                webDev: false,
              })
            }
            onMouseOut={() => setSubcategory({ ...subcategory, crmDev: false })}
          >
            <Link
              onClick={closePopOver}
              to="/crm-development"
              className="categoryActive link popoverCategory categoryWithSubCategory"
            >
              CRM Development
            </Link>
            {crmDev ? (
              <Subcategory
                closePopOver={closePopOver}
                subcategoryList={crmDevList}
                
              />
            ) : null}
          </li>
          <li className="category">
            <Link
              onClick={closePopOver}
              to="/product-development"
              className="categoryActive link popoverCategory"
            >
              Product Development
            </Link>
          </li>
          <li className="category">
            <Link
              onClick={closePopOver}
              to="user-experience-ux-design"
              className="categoryActive link popoverCategory"
            >
              User Experience(UX) Design
            </Link>
          </li>
        </small>
      </ul>
    </div>
  );
};

export { Popover };
