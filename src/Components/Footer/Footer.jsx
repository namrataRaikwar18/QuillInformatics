import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer displayFlex">
      <h2>Stay Connected!</h2>
      <p className="lightGreyText">
        We will do our best to deliver appealing products.
      </p>
      <form className="joinInput displayFlex">
        <input
          type="text"
          className="input"
          placeholder="your.address@email.com"
        />
        <button className="btn boldText joinBtn">JOIN US</button>
      </form>
      <h2>We are Global</h2>
      <div className="locations displayFlex">
        <div>
          <h3>AUSTRALIA</h3>
          <div className="address lightGreyText">
            <p>
              <small>12 A, Kelsey Street, Kidman Park 5025, SA</small>
            </p>

            <p>
              <small>Email: hi@techindustan.com</small>
            </p>
            <p>
              <small>Phone: +61 480 022 495</small>
            </p>
          </div>
        </div>

        <div>
          <h3>SWEDEN</h3>
          <div className="address lightGreyText">
            <small>Karlstad Innovation Park</small> 
            <p>
              <small>Sommargatan 101A</small>
            </p>
            <p>
              <small>656 37 Karlstad</small>
            </p>
            <p>
              <small>Email: hi@techindustan.com</small>
            </p>
            <p>
              <small>Phone: +46 8 580 976 01</small>
            </p>
          </div>
        </div>

        <div>
          <h3>USA</h3>
          <div className="address lightGreyText">
            <p>
              <small>5701, Lonetree Blvd, Suite # 313, Rocklin,</small>
            </p>
            <p>
              <small>CA, 95765</small>
            </p>
            <p>
              <small>Email: hi@techindustan.com</small>
            </p>
            <p>
              <small>Phone: 1-415-980-2495</small>
            </p>
          </div>
        </div>

        <div>
          <h3>INDIA</h3>
          <div className="address lightGreyText">
            <p>
              <small>902, Tower B, Bestech Business</small>
            </p>
            <p>
              <small>Tower Sector 66, Mohali, Punjab  160066</small>
            </p>
            <p>
              <small>Email: hi@techindustan.com</small>
            </p>
            <p>
              <small>Phone: 0172-4660048</small>
            </p>
            <p>
              <small>Sales Enquiry: +91 85709 10001</small>
            </p>
          </div>
        </div>
      </div>

      <div className="privacyContainer boldText displayFlex whiteDivider">
      <h6 className='policyLine displayFlex'>
        <p>PRIVACY POLICY </p>
        <p> SITEMAP </p>
        <p> CONTACT US </p>
      </h6>
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
