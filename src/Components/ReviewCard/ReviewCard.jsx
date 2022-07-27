import './ReviewCard.css'
import { AiFillStar } from 'react-icons/ai'

const ReviewCard = ({ name, post, review }) => {
  return (
    <>
      <section className="reviewCard displayFlex">
        <div className="reviewCardBody whiteText lineHeight">
          <em>{review}</em>
        </div>
        <div className="reveiwCardDetail whiteText displayFlex">
          <div>
            <h4>{name}</h4>
            <small className="lightGreyText">{post}</small>
          </div>
          <div className="lightGreyText">
            <small>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </small>
          </div>
        </div>
      </section>
    </>
  )
}

export { ReviewCard }
