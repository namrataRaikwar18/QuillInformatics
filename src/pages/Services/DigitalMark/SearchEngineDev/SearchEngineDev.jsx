import { BackToHome } from "../../../../Components";

const SearchEngineDev = () => {
  const searchDevCategory = [
    {
      title: "Analysis",
      feature: [
        "Clients Goals | Competitor Website",
        "Keyword Research | Client Website Research",
      ],
    },
    { title: "Strategy", feature: [" Link Building | Social Marketing"] },
    { title: "Implement", feature: [" Content Additions | Submissions"] },
    { title: "Manage", feature: ["Traffic Reports | Link Popularity Reports"] },
  ];

  const currentMonth = new Date();
  const currentDate = String(currentMonth).slice(4, 15);

  return (
    <main>
      <section className="pageSection">
        <div className="cmsDevImg cmsDevImg" />
        <div className="imgText pagePadding displayFlex nodeJsHeader">
          <div className="displayFlex dataAndBackToHome">
            <BackToHome page="SEARCH ENGINE OPTIMIZATION" />
            <small className="currentDate">{currentDate}</small>
          </div>
          <div className="nodeDevHeading displayFlex">
            <p className="bigText">Search Engine Optimization</p>
          </div>
        </div>
      </section>
      <section className="pagePadding  greyText">
        <small className="mobileDevBody lineHeight displayFlex">
          <p className="pageHeader bigText">
            CMS <span className="primaryColorText"> DEVELOPMENT </span>
          </p>
          <div className="smallDivider"></div>
          <p>
            Fed up of the old <span className="boldText"> SEO </span> bunch of
            nonsense the companies offered you till the date?
          </p>
          <p>The Backlinking techniques… Ah! They are all used in the 90’s</p>
          <p>
            Flush that all unwanted and outdated techniques out of your site
            right away!
          </p>
          <p>
            At <span className="boldText"> tecHindustan Solutions </span> we
            target the search engines directly as we believe "content is still
            the king" of the digital market. We help in maximizing the number of
            visitors to your website. We keep an eye on, for how long a customer
            stays up onto your site. And during this, we identify the wrong
            keywords on your site and the out-dated content, then…
          </p>
          <p>We throw the garbage out of your box!</p>
          <p>
            We focus on the keyword choices and their density that helps in
            making your site fall in rankings. We analyse your competitor’s site
            and accordingly, we stuff the best keywords to your site’s content.
            There we do not actually stop; we analyse your site and keep its{" "}
            <span className="boldText"> SEO </span>
            up to the date. And later on with our latest{" "}
            <span className="boldText"> SEO </span> trends we help you in
            turning your "visitors" to " customers".
          </p>
          <div className="mobileDevContainer displayFlex">
            <ul className="list">
              {searchDevCategory.map(({ title, feature }) => (
                <div key={title}>
                  <h4>{title}:</h4>
                  {feature.map((list) => (
                    <li key={list}>{list}</li>
                  ))}
                </div>
              ))}
            </ul>
          </div>
        </small>
      </section>
    </main>
  );
};

export { SearchEngineDev };
