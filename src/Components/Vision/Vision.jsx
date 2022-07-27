import './Vision.css'

const Vision = () => {
  return (
    <main className='mainVision'>
      <section className="visionSection displayFlex">
        <div className="imgDiv displayFLex">
          <div className="groupImage" />
          <h2 className="groupImageText">Blooming Minds</h2>
        </div>
        <div className="visionBody displayFlex greyText">
          <p className="bigText primaryColorText">OUR VISION FOR THE FUTURE</p>
          <div className="smallDivider"></div>
          <p className="lineHeight greyText">
            To attain optimum performance, we create responsive projects
            fulfilling the customer’s attributes. Our IT solutions are credible
            and trusted offering full customer satisfaction. We ensure our
            customers of a defined growth in their business.
          </p>
          <div className="divider"></div>
          <p className="lineHeight greyText">
            We have a team of brilliant minds that are passionate about
            delivering quality along with innovative solutions. The dedication
            and enthusiasm of our employees is an asset to our company
            attributing to the company’s paced growth.
          </p>
          <p className="lineHeight greyText">
            We intend to reap a long-term relationship with our customers to
            bloom fruitful outcomes. tecHindustan’s mission for the future is to
            focus on reliability, satisfaction, and quality deliverance.
          </p>
          <p className="bigText">Join Our Club!</p>
        </div>
      </section>
        <div className='joinClubContainer'>
          <div className="smallDivider"></div>
          <h1 className="bigText">
            Hire Us Today
            <span className="primaryColorText">  To Avail Best Tech Services For Your Website Or App From Tech
              Experts!
            </span>
          </h1>
        </div>
    </main>
  )
}

export { Vision }
