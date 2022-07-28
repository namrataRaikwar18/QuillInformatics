const FunFactCard = ({ icon, quantity, about }) => {
  return (
    <div className="funFactCard displayFlex">
      <h1>{icon}</h1>
      <p className="bigText">{quantity}</p>
      <p>{about}</p>
    </div>
  )
}

export { FunFactCard }
