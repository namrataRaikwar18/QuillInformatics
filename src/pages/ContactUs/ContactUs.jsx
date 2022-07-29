import './ContactUs.css'
import { Link } from 'react-router-dom'
import { IoMdArrowDropright } from 'react-icons/io'
import { MapCard } from '../../Components'

const ContactUs = () => {
  return (
    <main>
      <section className="contactUsSection">
        <div className="contactUsImg" />
        <ul className="contactUsImgText backToHome displayFlex whiteText">
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
      </section>
      <div className="contactBody pagePadding whiteText displayFlex">
        <p className="bigText">
          WE VALUE THE OPPORTUNITY TO INTERACT WITH YOU!
        </p>
        <h3>
          Thank you for showing your kind interest in tecHindustan; kindly drop
          off your queries.
        </h3>
        <p>
          <small>
            Our inventive planning consolidated with understanding rich systems
            is the thing that dependably permitted us to convey our best to the
            customers. Regardless of what you do, we arrive to make you to the
            following stride and past! You should simply drop a line and inspire
            prepared to grasp the best in digitized market experiences.
          </small>
        </p>
      </div>
      <section className="formAndContact displayFlex">
        <form className="contactform displayFlex">
          <section className="nameEmailSection displayFlex">
            <div className="formInputDiv nameInputDiv greyText displayFlex">
              <input
                type="text"
                className="input contactForminput"
                placeholder="Enter Your Name"
                id="name"
                required
              />
              <label className="label" htmlFor="name">
                <small className="boldText lightGreyText">
                  YOUR NAME (REQUIRED)
                </small>
              </label>
            </div>
            <div className="formInputDiv nameInputDiv greyText displayFlex">
              <input
                type="email"
                className="input contactForminput"
                placeholder="Type your email address"
                id="email"
                required
              />
              <label className="label" htmlFor="email">
                <small className="boldText lightGreyText">
                  YOUR EMAIL (REQUIRED)
                </small>
              </label>
            </div>
          </section>
          <div className="formInputDiv nameInputDiv greyText displayFlex">
            <input
              type="text"
              className="input contactForminput"
              placeholder="Enter a subject for your message"
              id="subject"
            />
            <label className="label" htmlFor="subject">
              <small className="boldText lightGreyText">SUBJECT</small>
            </label>
          </div>
          <div className="formInputDiv nameInputDiv greyText displayFlex">
            <textarea
              id="message"
              cols="40"
              rows="10"
              className="msgTextarea contactForminput"
              placeholder="Write your message"
            ></textarea>
            <label className="label" htmlFor="message">
              <small className="boldText lightGreyText">YOUR MESSAGE</small>
            </label>
          </div>
          <button className="btn boldText">Send Message</button>
        </form>
        <aside className="contactInfo greyText displayFlex">
          <p className="greyText">CONTACT INFO</p>
          <small className="locationContacts displayFlex">
            <div>
              <strong>USA Office:</strong>
              <p>5701, Lonetree Blvd, Suite # 313, Rocklin, CA, 95765</p>
              <strong>Email</strong>
              <p>contact@techindustan.com</p>
              <p>
                <strong>Contact No:</strong> +1 (415) 980-2495
              </p>
            </div>
            <div>
              <strong>India Office:</strong>
              <p>
                902, Tower B, Bestech Business Tower Sector 66, Mohali, Punjab
                160066
              </p>
              <strong>Email</strong>
              <p>contact@techindustan.com</p>
              <p>
                <strong>Contact No:</strong> 0172-4660048
              </p>
              <p>
                <strong>HR Dept:</strong>+918570810001
              </p>
              <p>
                <strong>Sales Enquiry:</strong> +918570910001
              </p>
            </div>
            <div>   
              <strong>Australia Office:</strong>
              <p>5A South Road, Airport West, VIC, 3042</p>
              <strong>Email</strong>
              <p>contact@techindustan.com</p>
              <p>
                <strong>Contact No:</strong>+61 480022495
              </p>
            </div>
          </small>
        </aside>
      </section>
      <section className='mapSection'> 
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502071.21504911!2d73.15677666248847!3d30.998616419386163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391964aa569e7355%3A0x8fbd263103a38861!2sPunjab!5e0!3m2!1sen!2sin!4v1659014280606!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='locationMap'></iframe>
      <MapCard />
      </section>
    </main>
  )
}

export { ContactUs }
