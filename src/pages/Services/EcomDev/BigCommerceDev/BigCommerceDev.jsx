import { BackToHome } from "../../../../Components";
import { FaStarOfLife } from "react-icons/fa";

const BigCommerceDev = () => {
  const bigCommerceDevList = [
    {
      title:"Store Design", feature : [
        "Easily customizable",
        "Responsive Design Themes",
        "HTML and CSS editable in browser",
        "Works in all popular web browsers",
      ],
    },
    {
     title: 'SEO', feature: [
        "Custom Product URLs",
        "Custom Category URLs",
        "Custom Web Page URLs",
        "Correct use of robots.txt file",
        "Page Rank not passed to irrelevant pages",
        "Page title and meta details are as per page requirements",
        "XML sitemap for Google Webmaster",
      ],
    },
    {
       title: "Hosting and Security", feature :['Shared SSL certificate',
            'Hacker-deterrent security provision',
            'Multiple Public Peers',
            'Level1 certified PCI compliant',
            'Product Options and Bundling:',
            'Product options: sizes, colors, configurations, etc.',
            'Unlimited options for each product',
            'Option Filtering']
    }
  ];

  const currentMonth = new Date();
  const currentDate = String(currentMonth).slice(4, 15);

  return (
    <main>
      <section className="pageSection">
        <div className="cmsDevImg" />
        <div className="imgText pagePadding displayFlex nodeJsHeader">
          <div className="displayFlex dataAndBackToHome">
            <BackToHome page="BIGCOMMERCE DEVELOPMENT" />
            <small className="currentDate">{currentDate}</small>
          </div>
          <div className="nodeDevHeading displayFlex">
            <h1 className="">BigCommerce Development</h1>
          </div>
        </div>
      </section>
      <section className="pagePadding  greyText">
        <small className="mobileDevBody lineHeight displayFlex">
          <p className="pageHeader bigText">
            BIGCOMMERCE <span className="primaryColorText"> DEVELOPMENT </span>
          </p>
          <div className="smallDivider"></div>
          <p>
            Selecting the most responsive
            <span className="boldText"> e-commerce </span> platform can be
            sometimes very tiresome. Hence, to take you out of the confusion
            tecHindustan Solutions offers you “the best” assistance. Bigcommerce
            platform is profitable for those who have small online businesses.
            As <span className="boldText"> e-commerce </span>
            is a multifunctional platform hence is best suited for the beginners
            in the field.
          </p>
          <p className="boldText">Why us?</p>
          <p>
            With tecHindustan Solutions you can build your very own powerful
            <span className="boldText"> e-commerce </span> site on the
            Bigcommerce platform. Our experts can deliver you comprehensive
            services and solutions in a short span of time. Our developments
            help in minimizing overheads, maximizing ROI.
          </p>
          <div className="mobileDevContainer displayFlex">
            <div className="mobileDevIcon displayFlex">
              <FaStarOfLife className="mobileIcon" />
            </div>
            <h1>Our Trait Includes</h1>
            <p>We absorb the following features in our developments:</p>
            <ul>
              {bigCommerceDevList.map(({title, feature}) => (
                <div key={title}>                
                <h4>{title}:</h4>
                {feature.map(list =>  <li key={list}>{list}</li>)}
                </div>
              ))}
            </ul>
            <p>The story doesn’t ends up here; we consume much more things in our black box.</p>
          </div>
        </small>
      </section>
    </main>
  );
};

export { BigCommerceDev };
