import { FeatureCard, Mothodology, UserCard, Vision } from "../../Components";
import "./Landing.css";
import { GoDeviceMobile } from "react-icons/go";
import { HiOutlineShoppingCart, HiWifi } from "react-icons/hi";
import { RiComputerLine } from "react-icons/ri";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { BsTag } from "react-icons/bs";
import { ReviewPage } from "..";

const Landing = () => {
  return (
    <>
      <div className="landingPage" />
      <div className="imageTextContainer displayFlex">
        <h2 className="imageText imageText1">
          <p>Crafting Ultimate Products to</p>
        </h2>
        <h2 className="imageText imageText2">
          <p>Discover the Chapter of Profits with Tech Development</p>
        </h2>
        <h2 className="imageText imageText2 imageText3">
          <p>
            Innovation Becomes Apprehendable Here With Experts Like You And Us
          </p>
        </h2>
      </div>
      <main className="mainPage displayFlex">
        <div className="detailCard displayFlex">
          <h3>
            750+ Projects, 450+ World-wide Clients, 90+ Expert-Level Talents,
            60+ High-Rated Credible Reviews. Trusted Partner Since 2015
          </h3>
          <div>
            <button className="whiteBorderBtn btn">Let's Connect!</button>
          </div>
        </div>
        <section className="featCardContainer displayFlex">
          <div className="featureCards displayFlex">
            <FeatureCard
              cardHeading="Mobile Apps Development"
              cardBody="Unravel the magic of effortless innovation at your fingertips with tecHindustan by utilizing our Mobile Apps Development that fits your business right."
              cardIcon={<GoDeviceMobile />}
            />
            <FeatureCard
              cardHeading="Digital Commerce Solutions"
              cardBody="
                Digitalize the fun of commerce with our expert services and latest tools. Upgrade regular business to extraordinary with dynamic approach of tecHindustan."
              cardIcon={<HiOutlineShoppingCart />}
            />
            <FeatureCard
              cardHeading="Web Development"
              cardBody="
                Our elite web development solutions can leverage your business. Join us for marking the line of succession in the e-commerce industry."
              cardIcon={<RiComputerLine />}
            />
            <FeatureCard
              cardHeading="UI/UX Development"
              cardBody="If you are looking for something out of the box, trust us, we got you! Check out appealing UI/UX designs for your biz designed by our talented designers."
              cardIcon={<MdOutlinePhotoSizeSelectActual />}
            />
            <FeatureCard
              cardHeading="Digital Marketing"
              cardBody="Widen the spectrum of your audience using our efficient online marketing practices . tecHindustan is the one-stop solution to rely on for digital marketing."
              cardIcon={<HiWifi />}
            />
            <FeatureCard
              cardHeading="Branding"
              cardBody="Let your brand speak for the quality services you proffer. We can assist you in determining the right image of your brand for successful biz."
              cardIcon={<BsTag />}
            />
          </div>
        </section>
        <Mothodology />
        <Vision />
      </main>
      <ReviewPage />
      <section className="userAddCardContainer displayFlex">
        <div className="allUserCard displayFlex">
          <UserCard
            cardBody="Share your idea and let's create a great project together!"
            cardImg="https://techindustan.com/wp-content/uploads/2016/02/02.png"
            heading="Get A Quote"
          />
          <UserCard
            cardBody="Send your kickass resume on hrd@technidustan.com"
            cardImg="https://techindustan.com/wp-content/uploads/2016/02/02_pcimg.png"
            heading="Hiring: ON"
          />
          <UserCard
            cardBody="Get instant access to our Q&A  Portal to share knowledge with our online community."
            heading="Q&A"
          />
        </div>
        {/* _____________________ */}
        {/* Blog */}
        {/* _____________________ */}

        {/* <div className="allAddCards displayFlex">
          <Add
            detail=" 02 May 2022 By tecHindustan Solutions in"
            tech="SEO, Social Media"
            addImg="https://techindustan.com/wp-content/uploads/2022/05/SEO-Writing-370x200.jpg"
            addHead="SEO Writing: Essentials You Should Not Overlook!"
          />
          <Add
            detail="14 April 2022 By tecHindustan Solutions in"
            tech="SEO, Technology"
            addImg="https://techindustan.com/wp-content/uploads/2022/04/Performance-Marketing-370x200.jpg"
            addHead="What is Performance Marketing? Why it is important in 2022!"
          />
          <Add
            detail="30 March 2022 By tecHindustan Solutions in"
            tech="Technology"
            addImg="https://techindustan.com/wp-content/uploads/2022/03/Image2-1-370x200.jpg"
            addHead="What Is Web 3? Is it The Future Of the Internet?"
          />
        </div> */}
      </section>
    </>
  );
};

export { Landing };
