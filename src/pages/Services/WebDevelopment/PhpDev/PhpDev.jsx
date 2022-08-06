import { BackToHome } from "../../../../Components";
import "./PhpDev.css";
import { IoSettingsSharp } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";

const PhpDev = () => {
  return (
    <main>
      <section className="pageSection">
        <div className="phpDevImg" />
        <div className=" imgText pagePadding">
          <BackToHome page="PHP DEVELOPMENT" />
        </div>
        <section className="pagePadding">
          <small className="phpDevBody lineHeight displayFlex greyText">
            <p className="bigText">
              
              <span className="primaryColorText"> PHP </span> DEVELOPMENT
            </p>
            <div className="smallDivider"></div>
            <p>
              Our team helps in creating best back-end platforms to ensure your
              app performs well. They are Zend Certified and believe in
              combining both, the creativity and the imaginations to render
              user-friendly and appealing websites. The team is capable of
              handling all the programming and the development services. Our
              programmers use all the tools to create interactive yet appealing
              outcomes. They try meeting up all the requirements of the global
              clients.
            </p>
            <div className="displayFlex phpCards whyPhpCard">
              <div className="whyPhpBody displayFlex">
                <div className="iconHeader displayFlex">
                  <IoSettingsSharp className="headerIcon" />
                </div>
                <h1 className="bigText">Why PHP</h1>
                <p>
                  As <span className="boldText"> PHP </span>offers faster
                  loading speed to your website, hence is useful and saves your
                  budget at Google crawl; resulting in higher rankings of your
                  site. The features that
                  <span className="boldText"> tecHindustan Solutions </span>
                  stuffs in for attaining quality
                  <span className="boldText"> PHP Developments </span> are HTTP
                  authentication with the
                  <span className="boldText"> PHP </span>, Using Remote Files,
                  Connection handling, Command line usage, Garbage collection,
                  Dtrace Dynamic Tracing. It is advantageous that the PHP
                  language may be embedded with the
                  <span className="boldText"> HTML </span> code or can be used
                  in combination with the various web template systems.
                  Maintaining the quality; our experts keep security on the
                  foreground of their minds. In accordance to achieve a highly
                  secured website they enrich it with security features like
                  Database Security, Filesystem Security, Error Reporting, and
                  much more.
                </p>
              </div>
              <div>
                <img
                  src="https://techindustan.com/wp-content/uploads/2016/03/why_php_vector.png"
                  alt="Why Php?"
                  className="responsiveImg"
                />
              </div>
            </div>
            <div className="phpTechCard displayFlex">
              <div className="whyPhpBody displayFlex">
                <div className="iconHeader displayFlex">
                  <RiComputerLine className="headerIcon" />
                </div>
                <h1 className="bigText">Technologies</h1>
                <p>
                  <span className="boldText"> 
                  tecHindustan Solutions </span> is
                  composed of a team of experienced software professionals
                  including
                  <span className="boldText">
                    Zend certified PHP Developers.
                  </span>
                  The language offers a large array of functions; out of which
                  many are available in various number of extensions. 75% of
                  websites like Facebook, Wikipedia, WordPress, and Yahoo use
                  PHP for their
                  <span className="boldText">Web Developments.</span>
                  The language can be used for command line scripting and client
                  side GUI applications. <span className="boldText">
                    
                    PHP
                  </span>
                  is useful as it can be expanded on many web servers, operating
                  systems and platforms. The technologies we are using at
                  <span className="boldText"> tecHindustan </span>
                  are depicted in the illustration on the left.
                </p>
              </div>
              <div>
                <img
                  src="https://techindustan.com/wp-content/uploads/2016/03/php_tech.png"
                  alt="Technology"
                  className="responsiveImg"
                />
              </div>
            </div>
          </small>
        </section>
      </section>
    </main>
  );
};

export { PhpDev };
