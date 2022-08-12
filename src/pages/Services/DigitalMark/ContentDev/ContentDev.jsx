import { BackToHome } from "../../../../Components";
import { FaStarOfLife } from "react-icons/fa";

const ContentDev = () => {
  const contentDevList = [
    "Press release writing",
    "Content marketing",
    "Search Engine Optimized Content",
    "Blog post",
    "Ghost writing",
    "Writing and editing the webpage content",
  ];

  const currentMonth = new Date();
  const currentDate = String(currentMonth).slice(4, 15);

  return (
    <main>
      <section className="pageSection">
        <div className="cmsDevImg" />
        <div className="imgText pagePadding displayFlex nodeJsHeader">
          <div className="displayFlex dataAndBackToHome">
            <BackToHome page="CONTENT DEVELOPMENT" />
            <small className="currentDate">{currentDate}</small>
          </div>
          <div className="nodeDevHeading displayFlex">
            <p className="bigText">Content Development</p>
          </div>
        </div>
      </section>
      <section className="pagePadding  greyText">
        <small className="mobileDevBody lineHeight displayFlex">
            <p className="boldText">Content Is The King!</p>
          <p>
            It’s not all about the content. It is about, how the way you manage
            to speak with your visitors by utilizing your words. This creativity
            is accomplished out here at{" "}
            <span className="boldText"> tecHindustan </span> , we write the
            stories that delight your customers; leaving behind the footprints
            of strong memories.
          </p>
          <p>
            For an ever growing growth in the business; one needs to create a
            content that is consistent, authoritative, relevant and tailored. We
            write content that helps your business in improving by the on-page
            relevancy signals. Our experts write content in such a way that it
            blends up with the requirements of your customer. A search engine
            friendly content gives a boon to your business growth. As content is
            vital for the promotion of your products and services you are
            dealing in; so do we make it simple as possible.
          </p>
          <p>
            The audience sticks on your website for the things like information,
            entertainment, and guidance. In accordance to make your website a
            successful marketing tool; you are required to develop the content
            strategically. We help in editing your content, and writing it in a
            way that it meshes up with your designs easily.
          </p>
          <div className="mobileDevContainer displayFlex">
            <div className="mobileDevIcon displayFlex">
              <FaStarOfLife className="mobileIcon" />
            </div>
            <h1>Our services:</h1>
            <p>We write awesome content for the following services:</p>
            <ul>
              {contentDevList.map((list) => (
                <li key={list}>{list}</li>
              ))}
            </ul>
          </div>
        </small>
      </section>
    </main>
  );
};

export { ContentDev };
