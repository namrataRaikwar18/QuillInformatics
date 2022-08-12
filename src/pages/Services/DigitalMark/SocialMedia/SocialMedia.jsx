import { BackToHome } from "../../../../Components";
import { FaStarOfLife } from "react-icons/fa";

const SocialMedia = () => {
  const contentDevList = [
    "Extremely cost effective method of the promotion of your company or products.",
    "It delivers huge amount of traffic and a wider space of link buildings.",
    "It is an effective method that defines the way of communication amongst various people",
  ];

  const currentMonth = new Date();
  const currentDate = String(currentMonth).slice(4, 15);

  return (
    <main>
      <section className="pageSection">
        <div className="cmsDevImg" />
        <div className="imgText pagePadding displayFlex nodeJsHeader">
          <div className="displayFlex dataAndBackToHome">
            <BackToHome page="SOCIAL MEDIA MARKETING" />
            <small className="currentDate">{currentDate}</small>
          </div>
          <div className="nodeDevHeading displayFlex">
            <p className="bigText">Social Media Development</p>
          </div>
        </div>
      </section>
      <section className="pagePadding  greyText">
        <small className="mobileDevBody lineHeight displayFlex">
          <p>
            We implement the various social media networks in order to achieve
            marketing communication, and the branding goals. <span className="boldText"> The social media
            marketing </span> schemes primarily include the activities involving the
            social sharing of content, videos, and images as well as the paid
            advertising methods.
          </p>
          <em>
            We understand that relationships are backbone in the development of
            any business.
          </em>
          <p>
            Your company must be represented on the social media as a person
            then the entity. We, at tecHindustan help you in maintaining such an
            identity on the social media. As Social Media Development has become
            an important tool in the marketing of any online business. Hence, to
            establish a well known place in the market one should have a strong
            identity in the social media market.
          </p>
          <p>
            At tecHindustan we make a rocket growth in your business by
            establishing strong social networks. Linking on social media
            provides an opportunity to know about what the potential partners
            are doing firsthand. Undoubtedly, social media is not only an asset
            in the development of any business but somewhere it works as a touch
            point for the same.
          </p>
          <div className="mobileDevContainer displayFlex">
            <div className="mobileDevIcon displayFlex">
              <FaStarOfLife className="mobileIcon" />
            </div>
            <h1>Social Media Marketing Assets:</h1>
            <p>Social Media Marketing benefits in many ways:</p>
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

export { SocialMedia };
