import './FeatureCard.css'

const FeatureCard = ({ cardHeading, cardBody, cardIcon }) => {
  return (
      <div className="featureCard displayFlex greyText">
        <p className="featCardHeading">{cardHeading}</p>
        <p className="featCardIcons">{cardIcon}</p>
        <p className="featCardBody"><small>{cardBody}</small></p>
      </div>
  )
}

export { FeatureCard }
