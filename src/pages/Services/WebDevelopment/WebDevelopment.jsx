import { BackToHome } from "../../../Components";
import "./WebDevelopment.css";
import {ImCheckmark} from 'react-icons/im'

const WebDevelopment = () => {
    const cmsTools = ['Custom PHP', 'Drupal CMS', 'Joomla CMS', 'Magento', 'OS Commerce', 'Virtuemart', 'WordPress', 'Xcart','Zencart']

  return (
    <main>
      <section className="pageSection">
        <div className="webDevelopmentImg" />
        <div className=" imgText pagePadding">
        <BackToHome page='WEB DEVELOPMENT SERVICES'/>
        </div>
      </section>
      <section className="pagePadding  greyText">
      <small className="webDevBody displayFlex lineHeight">
        <div className="webDevHeader centerText displayFlex">
        <h2>WEB DEVELOPMENT SERVICES</h2>
        <p>
          <span className="boldText">
            <em>
              Finding a place where one can just go and get relaxed is something
              that delivers the feeling of awesomeness.
            </em>
          </span>
          Here at tecHindustan, we provide you such a place that takes-off all
          of your worries regarding the project as it lands in the right hand.
        </p>
        </div>
        <p> <span className="boldText"> tecHindustan </span>  is an efficient quality service provider firm serving in almost 15 countries over the globe. We adopt the latest technologies and bring them up to the fast developing era. To survive in the digitized market, it is vital having a great web presence. <span className="boldText"> tecHindustan </span> provides such an identity for the rank seekers in the <span className="boldText"> digital market </span> that takes their business to cloud nine. In the present era an attractive website gives a boon to the business and provides a faster way of spreading the business.</p>

        <p>We develop a very easy navigational portal that is easily accessible so that customers can use the portal with proper ease; converting those customers into the permanent ones. The better user readability, the greater is the productivity. We are serving with web development worldwide in the <span className="boldText"> Custom PHP, Drupal CMS, Joomla CMS, Magento, OS Commerce, Virtuemart, WordPress, Xcart, Zencart. </span> In the present era, the digitized face of technology is developing with a rapid pace. Hence, we let people walk with the world.</p>
        <p>Our  <span className="boldText">  development </span> strategies and work functions are so flexible, that we can make changes in accordance to the turning fashion without disturbing the basic structure.</p>
        <div className="projectToolContainer displayFlex">
            <ul className="list">
                <h4>We follow the following steps for the promotion of projects:</h4>
                <li><ImCheckmark/>  Blog and Forum Postings</li>
                <li><ImCheckmark/> E-Commerce</li>
                <li><ImCheckmark/> Flash Development</li>
            </ul>
            <ul className="list">
                <h4>We follow the following CMS tools for Web Development:</h4>
                {cmsTools.map((tool) => {
                    return(
                        <li key={tool}><ImCheckmark/> {tool}</li>
                    )
                })}

            </ul>
        </div>
        </small>
      </section>
    </main>
  );
};

export { WebDevelopment };
