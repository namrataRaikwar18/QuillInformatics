import { ReviewCard } from '../../Components'
import './ReviewPage.css'

const ReviewPage = () => {
  return (
    <section className="reviewSection">
      <div className="reviewImage"> </div>
      <p className="bigText reviewImageText whiteText">WHAT OUR CLIENTS SAY</p>
      <p className="smallDivider"></p>
      <div className="reviewCardsContainer displayFlex">
        <div className="allReviewCards displayFlex">
          <ReviewCard
            name="DERRICK CHEN"
            review="Team at the tecHindustan found ways to create sites lively. I have never seen any application which is not only digitised but lively. The team knows the need of the changing trends. Totally recommended!"
            post="General Manager, Pangea Mobile Inc."
          />
          <ReviewCard
            name="PETER KYLIN"
            review="Team at tecHindustan has done a great job taking our company’s idea and developing our mobile apps as per our niche specifications. The team is technically strong and creative. I will not hesitate to recommend them."
            post="CEO at Hynell"
          />
          <ReviewCard
            name="RUZA"
            review="The way they deal with clients, the way they add extra efforts in developing the apps and products is totally appraising. They meet up all your requirements. I am super-happy with their services."
            post="CEO at Medistik"
          />
        </div>
        <div className="whiteDivider"></div>
        <div className="technologies displayFlex">
          <h4 className="lightGreyText">
            TECHNOLOGIES
            <div className="smallWhiteDivider"></div>
          </h4>
          <div className="alltechImages displayFlex">
            <img
              src="https://techindustan.com/wp-content/uploads/2016/02/1452257668_html5.png"
              alt="html Image"
              className="techImg"
            />
            <img
              src="https://techindustan.com/wp-content/uploads/2016/02/fArd.png"
              alt=""
              className="techImg"
            />
            <img
              src="https://techindustan.com/wp-content/uploads/2016/02/download.png"
              alt="javaScript Image"
              className="techImg"
            />
            <img
              src="https://techindustan.com/wp-content/uploads/2016/02/php-med-trans.png"
              alt="php image"
              className="techImg"
            />
            <img
              src="https://techindustan.com/wp-content/uploads/2016/01/rails.png"
              alt="rails Image"
              className="techImg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export { ReviewPage }
