import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer displayFlex">
      <h1>Stay Connected!</h1>
      <p>We will do our best to deliver appealing products.</p>
      <form className="joinInput displayFlex">
        <input
          type="text"
          className="input"
          placeholder="your.address@email.com"
        />
        <button className="btn boldText joinBtn">JOIN US</button>
      </form>
      <h1>We are Global</h1>
      <div className="locations displayFlex">
        <div>
          <h2 className="">AUSTRALIA</h2>
          <div className="address lightGreyText">
            <p>12 A, Kelsey Street, Kidman Park 5025, SA</p>
            <p>Email: hi@techindustan.com</p>
            <p>Phone: +61 480 022 495</p>
          </div>
        </div>

        <div>
          <h2>SWEDEN</h2>
          <div className="address lightGreyText">
            Karlstad Innovation Park
            <p>Sommargatan 101A</p>
            <p>656 37 Karlstad</p>
            <p>Email: hi@techindustan.com</p>
            <p>Phone: +46 8 580 976 01</p>
          </div>
        </div>

        <div>
          <h2>USA</h2>
          <div className="address lightGreyText">
            <p>5701, Lonetree Blvd, Suite # 313, Rocklin,</p>
            <p>CA, 95765</p>
            <p>Email: hi@techindustan.com</p>
            <p>Phone: 1-415-980-2495</p>
          </div>
        </div>

        <div>
          <h2>INDIA</h2>
          <div className="address lightGreyText">
            <p>
              902, Tower B, Bestech Business Tower Sector 66, Mohali, Punjab
              160066
            </p>
            <p>Email: hi@techindustan.com</p>
            <p>Phone: 0172-4660048</p>
            <p>Sales Enquiry: +91 85709 10001</p>
          </div>
        </div>
      </div>

      <div className="privacyContainer boldText displayFlex whiteDivider">
        <span>PRIVACY POLICY</span>
        <span>SITEMAP</span>
        <span>CONTACT US</span>
      </div>
      <div className="policyStartupCont displayFlex">
        <small className="lightGreyText copyRightLine displayFlex">
          © 2015-21 All rights reserved. Proudly made in India for all
          <img
            src="https://techindustan.com/wp-content/uploads/2016/02/smmm.gif"
            alt="smile emoji"
          />
        </small>
        <div className="startUpContainer">
          <img
            src="https://www.startupindia.gov.in/content/dam/invest-india/phase-2/logo_1.png"
            alt="startup india"
            className="startUpImg"
          />
        </div>
      </div>
    </footer>
  )
}

export { Footer }
