import { BackToHome } from "../../../../Components";
import "./PythonDev.css";
import { FaStarOfLife } from "react-icons/fa";

const PythonDev = () => {
  return (
    <main>
      <section className="pageSection">
        <div className="pythonDevImg" />
        <div className="imgText pagePadding">
          <BackToHome page="PYTHON WEB DEVELOPMENT" />
        </div>
      </section>
      <section className="pagePadding  greyText">
        <small className="mobileDevBody lineHeight displayFlex">
          <p className="pageHeader bigText">
            PYTHON <span className="primaryColorText"> DEVELOPMENT </span>
          </p>
          <div className="smallDivider"></div>
          <p>
            A complete package of
            <span className="boldText"> web development </span> in a language
            that is powerful, generic, mature, and well-documented is something
            that provides a huge collection of third party packages.
          </p>
          <p>
            Meanwhile, users desire a complete package of application that is
            vibrant, user-friendly, and works smoothly as well. In whole,
            <span className="boldText"> Python </span> is the language that
            provides you such applications that are easy to use, quicker in
            response, and robust.
          </p>
          <p>
            We are experts in creating robust and user-friendly applications
            that renders full customer satisfaction.
          </p>
          <div className="pythonCard mobileDevContainer displayFlex">
            <div className="pythonBody displayFlex">
              <div className="mobileDevIcon displayFlex">
                <FaStarOfLife className="mobileIcon" />
              </div>
              <h1>Our Offerings</h1>
              <p className="mobileDevPara">
                We look at the big picture, offering a
                <span className="boldText"> Python </span> based platform that
                reaches across the markets and help bringing out partners and
                customers from challenges to solutions, and that too from short
                term to long term security and stability. We offer the following
                services:
              </p>
              <p>
                <span className="boldText"> Python's </span> majority of
                development framework stresses on security, testing, and
                administration. Hence it makes it ideal for rapid
                <span className="boldText"> software development. </span>
                Our team is experienced in delivering strong web based
                applications using python frameworks like Django, Pylons,
                TurboGears and Web2py. Responsive Web Portals. Successful
                Back-end Technology for applications like Google, Face book,
                Quora and YouTube.
              </p>
            </div>
            <div>
              <img
                src="https://techindustan.com/wp-content/uploads/2016/03/python.png"
                alt="python"
                className="responsiveImg"
              />
            </div>
          </div>
        </small>
      </section>
    </main>
  );
};

export { PythonDev };
