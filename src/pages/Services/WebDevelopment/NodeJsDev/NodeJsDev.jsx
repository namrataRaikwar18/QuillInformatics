import { BackToHome } from "../../../../Components";
import { FaStarOfLife } from "react-icons/fa";
import "./NodeJsDev.css";

const NodeJsDev = () => {
  return (
    <main>
      <section className="pageSection">
        <div className="cmsDevImg" />
        <div className="imgText pagePadding displayFlex nodeJsHeader">
          <BackToHome page="NODE JS DEVELOPMENT" />
          <div className="nodeDevHeading displayFlex">
            <p className="bigText">Node JS Development</p>
          </div>
        </div>
      </section>
      <section className="pagePadding  greyText">
        <small className="mobileDevBody lineHeight displayFlex">
          <p className="pageHeader bigText">
            NODE JS <span className="primaryColorText"> DEVELOPMENT </span>
          </p>
          <div className="smallDivider"></div>
          <p>
            tecHindustan Solutions provide comprehensive approach towards
            development, designing and consultation of the Node JS Development.
            It is a server side JavaScript, the platform helps in development
            and deployment of network and applications. One of the major
            advantages of using the Node JS is code reuse and its faster speed
            as compared to PHP. Development with Node.js is undoubtedly
            advantageous as it can handle a huge amount of connections.
          </p>
          <p className="boldText">
            Hire Us For Your Next Node.JS Project because:
          </p>
          <p>
            <span className="boldText">tecHindustan’s </span>dedicated
            <span className="boldText"> developers </span> and
            <span className="boldText"> programmers </span> provide scalable
            <span className="boldText"> Node.js development </span> of your
            projects. We can develop both the client side and the server side
            web applications by taking complete advantage of high speed
            technology.
          </p>
          <div className="mobileDevContainer displayFlex">
            <div className="mobileDevIcon displayFlex">
              <FaStarOfLife className="mobileIcon" />
            </div>
            <h1>Why tecHindustan For Node.js Developments?</h1>
            <ul className="list">
              <li>Extensive Testing</li>
              <li>Scalable applications</li>
              <li>Cost effective engagement model</li>
              <li>Expert Node.js Developers</li>
            </ul>
          </div>
        </small>
      </section>
    </main>
  );
};

export { NodeJsDev };
