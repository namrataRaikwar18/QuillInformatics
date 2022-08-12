import { BackToHome } from "../../../Components";

const DigitalMark = () => {
  return (
    <main>
      <section className="pageSection">
        <div className="cmsDevImg pageHeaderImg" />
        <div className="imgText pagePadding">
          <BackToHome page="DIGITAL MARKETING" />
        </div>
      </section>
      <section className="pagePadding  greyText">
        <small className="mobileDevBody lineHeight displayFlex">
          <p className="pageHeader bigText">
            <span className="primaryColorText"> DIGITAL </span> MARKETING
          </p>
          <div className="smallDivider"></div>
          <p>
            {" "}
            <span className="boldText"> tecHindustan Solutions</span>offer
            complete digital marketing services; establishing an efficient and
            effective online presence within the digitized market all over the
            globe.
          </p>
          <p>
            {" "}
            <span className="boldText">
              tecHindustan’s digital marketing services{" "}
            </span>{" "}
            are designed to extend the reach of marketing and sales of your
            goods and services. At{" "}
            <span className="boldText"> tecHindustan, </span>
            we understand that digital marketing is all about getting the right
            audience to your website. Our{" "}
            <span className="boldText"> digital marketers </span> have hands on
            experience; they utilize the right strategy, and tools that
            increases your online reach by delivering a rocket growth in your
            business.
          </p>
        </small>
      </section>
    </main>
  );
};

export { DigitalMark };
