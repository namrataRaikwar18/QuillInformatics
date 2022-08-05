import "./EcomDev.css";
import { BackToHome } from "../../../Components";
import { FaStarOfLife, FaRegCheckCircle } from "react-icons/fa";
import { MdWindow } from "react-icons/md";
import { BiDollar, BiMessage } from "react-icons/bi";
import { HiOutlineShoppingCart } from "react-icons/hi";

const EcomDev = () => {
  const blackBoxList = [
    { text: "Planning", icon: <FaStarOfLife className="blackBoxIcon" /> },
    {
      text: "Technologies We Use",
      icon: <MdWindow className="blackBoxIcon" />,
    },
    { text: "User Interface", icon: <BiDollar className="blackBoxIcon" /> },
    {
      text: "Back End",
      icon: <HiOutlineShoppingCart className="blackBoxIcon" />,
    },
    {
      text: "Payment Processing",
      icon: <FaRegCheckCircle className="blackBoxIcon" />,
    },
    { text: "Security", icon: <BiMessage className="blackBoxIcon" /> },
  ];

  return (
    <main>
      <section className="pageSection">
        <div className="ecomDevImg" />
        <div className=" imgText pagePadding">
          <BackToHome page="E-COMMERCE DEVELOPMENT" />
        </div>
      </section>
      <section className="pagePadding">
        <small className="ecomBody greyText centerText lineHeight displayFlex">
          <p className="bigText">WE BUILD SHOPPER’S BLISS</p>
          <div>
            <em>
              <h3>
                The Complete Marketplace for All Your E-commerce Developments
              </h3>
            </em>
            <p>
              Can a book be sold out but just a glimpse of its cover? Yes, it
              truly can. A good appearance is one of the best ways to present a
              product or to communicate with your customers. For a better
              business growth your e-commerce site must be hassle free and like
              a perceived image of your e-selling. With the changing trends;
              selling a product in the market and the paths followed up in
              selling it are also changing. The online retailing schemes are
              capturing the market deliberately and so do we assist you in
              getting the best out of it.
            </p>
          </div>
          <p className="bigText">OUR BLACK BOX CONSUMES</p>
          <div className="blackBoxContainer displayFlex">
            <ul className="blackBox list displayFlex lightGreyText">
              {blackBoxList.map((item) => {
                return (
                  <li className="eachBlackBox displayFlex" key={item.text}>
                    {item.text} {item.icon}
                  </li>
                );
              })}
            </ul>
            <div className="planningDiv displayFlex">
              <div className="">
                <h3 className="primaryColorText">Planning:</h3>
                <p>
                  Planning is vital for any business and for the e-commerce
                  website development as well. We have worked with clients of
                  all sizes and we help in converting their ideas to creations.
                </p>
              </div>
              <aside>
                <img
                  src="https://techindustan.com/wp-content/uploads/2016/02/pllaning.png"
                  alt="bulb"
                  className="buldImg"
                />
              </aside>
            </div>
          </div>
        </small>
      </section>
    </main>
  );
};

export { EcomDev };
