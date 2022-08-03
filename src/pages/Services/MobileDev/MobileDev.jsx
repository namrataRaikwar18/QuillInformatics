import "./MobileDev.css";
import { BackToHome } from "../../../Components";
import {GoDeviceMobile} from 'react-icons/go'

const MobileDev = () => {

    const mobileDevCategory = ['iPhone App Development','iPad App Development','Android App Development', 'HTML5 App Development', 'Hybrid App Development']

  return (
    <main>
      <section className="pageSection">
        <div className="mobileDevImg" />
        <div className="imgText pagePadding">
          <BackToHome page="MOBILE APP DEVELOPMENT" />
        </div>
      </section>
      <section className="pagePadding  greyText">
        <small className="mobileDevBody lineHeight displayFlex">
          <p className="pageHeader bigText">
            MOBILE <span className="primaryColorText"> APP DEVELOPMENT </span>
          </p>
          <div className="smallDivider"></div>
          <p>
            <span className="boldText">tecHindustan </span> has a vast and extensive experience in creating high
            performance, reliable and feature rich mobile applications;
            supporting all the major platforms like <span className="boldText"> iOS, Android, 
            </span>Blackberry OS,
            and Windows Mobile. We have experts who can manage creating apps on
            the cross platform or the <span className="boldText"> Hybrid platforms </span> as well; then created apps are flexible of working with any of the platforms. In addition,
            our experts are capable of working on the <span className="boldText"> HTML5 </span> platform as well.
          </p>
          <p><span className="boldText">tecHindustan </span> offers you a complete package of 
          <span> mobile app development.</span> Our expert <span className="boldText">mobile app developers </span> create the right apps that meet the requirements of your business.</p>
          <div className="mobileDevContainer displayFlex">
          <div className="mobileDevIcon displayFlex"><GoDeviceMobile className="mobileIcon"/></div>
            <h1>Why tecHindustan?</h1>
            <p className="mobileDevPara">We are assisting you with a complete package of mobile app development. We are dealing in the following categories:</p>
            <ul className="list">
            {mobileDevCategory.map((category) => {
                return(
                    <li key={category}>{category}</li>
                    )
                })}
            </ul>
            </div>
            </small>
      </section>
    </main>
  );
};

export { MobileDev };
