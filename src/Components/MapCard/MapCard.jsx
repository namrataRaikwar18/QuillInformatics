import './MapCard.css'

const MapCard = () => {
  return (
    <div className="mapCard">
      <img
        src="https://techindustan.com/wp-content/uploads/2016/02/slider_06-2.jpg"
        alt="random image"
        className="mapCardImg"
      />
      <p className="greyText mapImgText">
        <small>
          We’re a strong team dealing with all the IT Services and Business
          Solutions. We are focussed for providing quality services and
          rendering satisfaction of the customer.
        </small>
      </p>
    </div>
  )
}

export { MapCard }
