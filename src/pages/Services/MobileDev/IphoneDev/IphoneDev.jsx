import { BackToHome } from "../../../../Components";
import "./IphoneDev.css";

const IphoneDev = () => {
  return (
    <main>
      <section className="pageSection">
        <div className="iphoneDevImg" />
        <div className="imgText pagePadding">
          <BackToHome page="IPHONE APP DEVELOPMENT" />
        </div>
      </section>
      <section className="pagePadding">
        <small className="pageBody lineHeight displayFlex greyText">
          <p className="bigText">
            <span className="primaryColorText"> IPHONE APP </span> DEVELOPMENT
          </p>
          <div className="smallDivider"></div>
          <p>
            The field requires certain skills where a traditional developer may
            lag behind; there we provide you such applications that may result
            as a key to the successful iOS Solution. As we are dealing with the{" "}
            <span className="boldText"> iPhone App Development </span>, we cater
            your app in a way that it reflects your brand and tastes of the user
            as well.
          </p>
          <div className="centerText displayFlex javaOfferContainer">
            <h1 className="primaryColorText">
              TECHINDUSTAN EMBEDS FEATURES LIKE:
            </h1>
            <h3>
              Our team is capable of creating vibrant and attractive
              applications that rockets your business. They are the industry
              experts; rendering you a staggering experiences.
            </h3>
            <ul className="list javaServices displayFlex boldText"></ul>
          </div>
        </small>
      </section>
    </main>
  );
};

export { IphoneDev };
