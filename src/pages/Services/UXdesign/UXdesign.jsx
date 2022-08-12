import "./UXdesign.css";
import { BackToHome } from "../../../Components";
import { BiCalendar } from "react-icons/bi";
import "../../../Components/ReviewCard/ReviewCard.css";

const UXdesign = () => {
  const mechanismList = [
    {
      title: "Groundwork",
      body: "A vision of user-centered and setting up the goals to create the best UX Designs is our prime concern. The foundation of the product sets up with the best codes, content, strategies, and of course the designs. At the groundwork level we help lining up your assumptions with the actual user expectations. Depending upon the timelines and availability of the resources we set up a foundation for you and meanwhile discover the shortest research paths.",
    },
    {
      title: "Informational Architecture",
      body: "Informational Architecture allows a better communication band between the team members and delivers the best way to visualize the data structures. It ensures effective navigations of the data structures, testing of work flows and helps in turning out a “good” product to an “awesome one”. The presentation and visual arrangements are the key to success for any business; keeping in mind the two aspects we deliver our products with awe-inspiring features.",
    },
    {
      title: "User Testing and Observations",
      body: "We believe in surprising all along with the development of the best ever products. User testing is vital in the UX Designs so do we provide methods for the same; following up various ways for gathering the user feedback is our key for the development of an awe-inspiring product. We follow up from the remote testing and to the one-to-one testing methods.",
    },
    {
      title: "Inspecting Designs",
      body: "As the users are showing interest in the graphics more rapidly with the developing era; we are focused on to create appealing products. Any how the Informational Architecture is vital for the development of any product; taking the appearance (UI) parallel to the User Experience results in the creation of astonishing products. We are creating stupefying products in every second.",
    },
    {
      title: "Client Side Development",
      body: "The challenge associated with the Client Side Development is that the developer must be aware of how the field is developing constantly as it is being changed on time-to-time bases with the fashion. In accordance to achieve the best UX/UI Designs; we focus on providing the information that is easily readable and germane. Our UX design experts ensure you of a product that seems attractive from pixel levels. We are cordial on codes as per the latest standards and support you all along your back-end integrations.",
    },
    {
      title: "Out Growth",
      body: "In accordance to take the load-off your shoulders; we assist you during the back-end integration of the product by providing you the technical support. And finally your latterly designed app is in your hands.",
    },
  ];

  return (
    <main>
      <section className="pageSection">
        <div className="UXdesignImg"></div>
        <div className=" imgText pagePadding">
          <BackToHome page="WEB DEVELOPMENT SERVICES" />
        </div>
      </section>
      <section className="pagePadding">
        <small className=" uxDesignBody displayFlex centerText greyText lineHeight">
          <p className="bigText">
            PLEASE TAKE A MOMENT TO TOUR OUR{" "}
            <span className="primaryColorText"> UX DESIGN </span> WORKS.
          </p>
          <h3>
            What is the difference between{" "}
            <span className="primaryColorText"> Hard Work </span> and
            <span className="primaryColorText"> Smart Work</span>?
          </h3>
          <p>
            Creating a UX based product is Hard Work and merging it with UI is
            something that refers to Smart Work. That’s the way we serve our
            clients; keeping in mind the delivery of awesomeness we create
            majestically.
          </p>
          <div className="treeStructure displayFlex">
            <h4 className="primaryColorText treeTitle">Our Mechanism</h4>
            <ul className="list displayFlex mechanismContainer">
              {mechanismList.map(({ title, body }) => {
                return (
                  <div className="eachMachanism displayFlex" key={title}>
                    <div className="calenderIcon">
                      <BiCalendar className="machanismIcon" />
                    </div>
                    <h3 className="primaryColorText">{title}</h3>
                    <li>{body}</li>
                  </div>
                );
              })}
            </ul>
            <p className="treeTitle">Your Freshly Designed App</p>
          </div>
        </small>
      </section>
      <section className="uxReviewContainer">
        <div className="reviewImage reviewUxImg"></div>
        <div className="displayFlex uxReview whiteText centerText">
          <h3>REVIEWS</h3>
          <p>
            “tecHindustan” is a totally recommended team for the best UX and UI
            Designs. They never compromise on their approach for the
            developments and get back to you with the best possible solutions.
            They deliver ideas, artwork and create roadmaps for the future
            installations.
          </p>
        </div>
      </section>
    </main>
  );
};

export { UXdesign };
