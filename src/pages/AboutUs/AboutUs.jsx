import './AboutUs.css'
import { IoMdArrowDropright } from 'react-icons/io'
import {FaStarOfLife} from 'react-icons/fa';
import {CgSandClock} from 'react-icons/cg'
import {ImBookmark} from 'react-icons/im';
import {RiPlaneFill} from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { FunFactCard } from '../../Components'

const AboutUs = () => {
  return (
    <>
      <main className="aboutUsMain displayFlex">
        <section className="aboutUsSection">
          <div className="aboutUsImg" />
          <div className="aboutImgTextContainer displayFlex pagePadding">
            <div>
              <ul className="backToHome displayFlex">
                <Link to="/" className="link">
                  <li className="list">
                    <small>HOME</small>
                  </li>
                </Link>
                <IoMdArrowDropright className="primaryColorText" />
                <li className="list">
                  <small>ABOUT US</small>
                </li>
              </ul>
            </div>
            <div>
              <ul className="rightText displayFlex">
                <li className=" list bigText">ABOUT US</li>
                <li className="list">GET OUR INSIGHT</li>
              </ul>
            </div>
          </div>
        </section>
        <div className="aboutBody greyText displayFlex pagePadding">
          <p className="bigText">
            <span className="primaryColorText">EMPOWERING ENTERPRISES</span> TODAY TO CATALYZE TOMORROW’S CHANGE!
          </p>
          <p className="lineHeight">
            <small>
             We enable clients to create a future by serving them the finest
              <span className="boldText primaryColorText"> IT and Business Solutions Services.
              </span> With nearly
              <span className="boldText primaryColorText"> six years of experience,
              </span> the company manages to do the top-notch work by rendering services like
              <span className="boldText"> Web Development, Mobile App Development, Product Development,
              E-Commerce Development,
              </span>  CMS Development and a lot more. We can steer through your
              <span className="boldText primaryColorText"> digital journey </span> with advancement to catalyze the change from the time you hire us.
              We focus on making you reach unprecedented heights with our
              <span className="boldText primaryColorText"> tech expertise. </span> Our executives work on appealing & efficient
              <span className="boldText primaryColorText"> digital development
              </span> for error-free business operations also ensuring higher customer
              satisfaction.
            </small>
          </p>
          <p>
            <small>
              <em>
                "<span className="boldText primaryColorText">tecHindustan Solutions
                </span> fuels up Intelligent businesses with Tech Intellect!"
              </em>
            </small>
          </p>
          <p className='lineHeight'><small><span className='boldText'> Our team </span> consists of Brilliant minds who are highly proficient and well-informed IT professionals working with the common goal of presenting perfected solutions with potential efforts. The company works as a transformative partner serving native and overseas. <span className='boldText'> clients </span>  in countries such as Germany, the US, Australia, Dubai, the UK and neighbouring countries.</small></p>
        </div>
        <section className='aboutImg2section'>
        <div className='aboutImg2'/>
        <div className='aboutImg2Text lineHeight'> <em> <h3 className='whiteText'>“tecHindustan” is an Information Technology Service & Business Solutions Service provider.</h3> <p className='whiteText'>We work on our motto <span className='boldText primaryColorText'>Inspect| 
        <span className='whiteText'> Adapt</span> |Deliver</span> </p> </em></div>
        
        </section>
        <div className='pagePadding coreValueContainer displayFlex greyText lineHeight'>
            <h2 className='primaryColorText'>tecHindustan's Core Values</h2>
            <div className='whiteDivider'></div>
            <p>The vision of dominating the globe with quality comes to life with a sense of rectitude, receptiveness, mutual respect and discipline that tecHindustan team upholds.</p>
            <ul className='coreValuesPoints'> 
                <h3 className='primaryColorText' >Our Achievements:</h3>
            <div className='whiteDivider'></div>
                <li>Keeping the vision of leading the digital world we hold a grasp of clients overseas by serving 15+ countries worldwide.</li>
                <li>We are one of the leading tech solutions providers in the suburb.</li>
                <li>tecHindustan is renowned for boosting businesses.</li>
            </ul>
            <ul className='coreValuesPoints'>
                <h3 className='primaryColorText'>Our Heritage:</h3>
            <div className='whiteDivider'></div>
                <li>Our motto is to deliver prominent Business Solutions with innovative approaches like never seen before.</li>
                <li>To accelerate the change for future generations, we are ardent to contribute to tech evolution.</li>
                <li>We ensure a delightful experience for our customers.</li>
            </ul>
            <div className='aboutImg3Container'>
            <div className='aboutImg3'/>
            <h1 className='aboutImg3Text primaryColorText'>About Us</h1>
            </div>
            <div className='funFactContainer displayFlex'>
            <p className='bigText'>STATS & FUN FACTS</p>
            <div className='whiteDivider'></div>
            <div className='funFactCardContainer displayFlex'>
            <FunFactCard icon={<FaStarOfLife/>} quantity='74000+' about='CODE LINES THIS MONTH' />
            <FunFactCard icon={<RiPlaneFill/>} quantity='700+' about='CRAFTED PROJECTS' />
            <FunFactCard icon={<CgSandClock/>} quantity='12000+' about='CHAI CUPS THIS YEAR' />
            <FunFactCard icon={<ImBookmark/>} quantity='60+' about='REVIEWS AND RATINGS' />
            </div>
            </div>
            <p className='bigText primaryColorText'>WORK WITH US</p>
            <p>Hire us today to avail your very own Product or Website at reckon-able rates.</p>
        </div>
      </main>
    </>
  )
}

export { AboutUs }
