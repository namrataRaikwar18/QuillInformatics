import {RiComputerLine} from 'react-icons/ri';
import { BackToHome } from "../../../Components";

const CrmDev = () => {

    const crmDevCategory = ['Sugar CRM Development','Zoho CRM Development','Vtiger CRM Development']
    return(
        <main>
        <section className="pageSection">
          <div className="cmsDevImg pageHeaderImg" />
          <div className="imgText pagePadding">
            <BackToHome page="CRM DEVELOPMENT" />
          </div>
        </section>
        <section className="pagePadding  greyText">
          <small className="mobileDevBody lineHeight displayFlex">
            <p className="pageHeader bigText">
            CRM <span className="primaryColorText"> DEVELOPMENT </span>
            </p>
            <div className="smallDivider"></div>
            <p>
            Customer Relationship Management is designed to sustain customer relations at a central place that can be accessed by every employee. <span className="boldText"> tecHindustan </span>  creates <span className="boldText"> CRM solutions</span>  that are aligned with your competitive strategy. Our excellent global support and development team gives you the best execution of Customer Relationship Management technology.
            </p>
            <p> <span className="boldText"> tecHindustan </span> can build customized CRM Solutions for your company by understanding your company requirements, we deploy<span className="boldText"> CRM </span>technology to organize, automate, and synchronize sales and marketing. We understand that customer is the key to any business; and relationships with new and prospective customers are vital in the growth of your business.</p>
            <div className="mobileDevContainer displayFlex">
            <div className="mobileDevIcon displayFlex"><RiComputerLine className="mobileIcon"/></div>
              <h1>Our Competence</h1>
              <p className="mobileDevPara">We deal in the following CRM Development Services:</p>
              <ul className="list">
              {crmDevCategory.map((category) => {
                  return(
                      <li key={category} >{category}</li>
                      )
                  })}
              </ul>
              </div>
              </small>
        </section>
      </main>
    )
} 

export {CrmDev};