import './UserCard.css'

const UserCard = ({ heading, cardImg, cardBody }) => {
  return (
    <section className="userCard displayFlex">
      <div className="userCardBody displayFlex">
        <p className="bigText whiteText">{heading}</p>
        <p className="whiteText">{cardBody}</p>
        <div className="smallWhiteDivider"></div>
      </div>
      <div className="userCardImg">
        {cardImg ? <img src={cardImg} alt="structure Image" /> : null}
      </div>
    </section>
  )
}

export { UserCard }
