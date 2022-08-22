import "./AspNetDev.css";
import { BackToHome } from "../../../../Components";
import { IoSettingsSharp } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { GiPencilBrush } from "react-icons/gi";
import { CgList } from "react-icons/cg";
import { TiCloudStorage } from "react-icons/ti";
import { HiWifi } from "react-icons/hi";

const AspNetDev = () => {
  const rightFeat = [
    {
      icon: <IoSettingsSharp />,
      title: ".Net Ajax",
      text: "There might be chances when one needs to access the data on the server without using the UpdatePanel. ASP.NET Ajax UpdatePanel provides a simple way to AJAX enable the ASP.Net page.",
    },
    {
      icon: <GiPencilBrush />,
      title: ".Net MVC",
      text: ".Net MVC framework is an open source web application tooling and framework, that implements a version of the model-view-controller (MVC) tailored towards web application and is built upon an ASP.NET foundation.",
    },
    {
      icon: <ImCross />,
      title: ".Net Razor",
      text: "It is a programming syntax of ASP.NET technology and is used to create dynamic web pages in the Visual Basic .NET or C# programming languages.",
    },
  ];

  const leftFeat = [
    {
      icon: <CgList />,
      title: ".Net Dynamic Data",
      text: "It allows users to create data driven web applications easily. This is automatically done; discovering LINQ-to-SQL or Entities framework data model at run time and determining how to render UI from the data model.",
    },
    {
      icon: <TiCloudStorage />,
      title: ".Net Web API",
      text: "A framework that makes it easy to build the HTTP services that reaches broad range of clients, including browsers and mobile devices as well. It is an ideal platform that helps in building restful application over the .NET framework.",
    },
    {
      icon: <HiWifi />,
      title: ".Net SignalR",
      text: "This technology facilitates developers to add real-time web functionality to their applications. It enables bi-directional communication between the browser and the server taking advantages from WebSocket; a HTML5 API.",
    },
  ];

  return (
    <main>
      <section className="pageSection">
        <div className="aspNetDevImg" />
        <div className=" imgText pagePadding">
          <BackToHome page="ASP.NET DEVELOPMENT" />
        </div>
      </section>
      <section className="pagePadding">
        <small className="aspNetBody lineHeight displayFlex greyText">
          <div className="aspNetCard displayFlex">
            <p className="bigText">
              <span className="primaryColorText"> ASP.NET </span> DEVELOPMENT
            </p>
            <div className="smallDivider"></div>
            <p>
              ASP.Net is an open source web development framework and is used in
              producing dynamic web pages. The product was introduced by the
              Microsoft. It allowed programmers building a web service, web
              application, and web sites. ASP.Net is focused on simplifying
              coding and is useful in creating large web pages as well. The
              pages created using ASP.Net are far quicker than the other web
              pages and are easily accessible.
            </p>
            <p>
              ASP.Net helps in creating jaw-opening website that rockets your
              business growth. We have Microsoft Certified .Net developers, who
              guarantee quality software and standardized developments.
            </p>
            <p>
              tecHindustan Solutions has years of experience in ASP.Net platform
              and we are serving worldwide. Our developers create innovative and
              appealing website, they are expertise in creating stable, easy to
              use software, interactive, and functional web developments that
              are provided by the ASP.NET Framework.
            </p>
          </div>
          <div>
            <img
              src="https://techindustan.com/wp-content/uploads/2016/02/asp.net_ff.png"
              alt="Asp.Net dev"
              className="aspNetImg responsiveImg"
            />
          </div>
        </small>
        <div className="aspLable centerText greyText lineHeight">
          <h3 className="primaryColorText bigText">ASP.NET</h3>
          <p>
            <span className="primaryColorText"> ASP.NET </span> application is a
            built-in web service that offers access to features such as form
            authentication, profile properties, and roles.
            <span className="primaryColorText"> tecHindustan Solutions </span>
            offer you easy-to-understand illustrations of these features.
          </p>
        </div>
      </section>
      <section className="aspFeatureContainer">
        <div className=" aspFeatureBgImg" />
        <small className="aspBgImgText displayFlex greyText">
          <div className="featureContainer displayFlex rightFeatContainer">
            {rightFeat.map(({ title, icon, text }) => {
              return (
                  <div className="eachAspFeat displayFlex" key={title}>
                    <p className="aspFeatIcon">{icon}</p>
                    <h2 className="primaryColorText">{title}</h2>
                    <p>{text}</p>
                  </div>
              );
            })}
          </div>
          <div className="">
            <img
              src="https://techindustan.com/wp-content/uploads/2016/02/asp.net_vector.png"
              alt="asp.net"
              className="aspFeatImg responsiveImg"
            />
          </div>
          <div className=" featureContainer displayFlex leftFeatContainer">
            {leftFeat.map(({ title, icon, text }) => {
              return (
                  <div className="eachAspFeat displayFlex" key={title}>
                    <p className="aspFeatIcon">{icon}</p>
                    <h2 className="primaryColorText">{title}</h2>
                    <p>{text}</p>
                  </div>
              );
            })}
          </div>
        </small>
      </section>
    </main>
  );
};

export { AspNetDev };
