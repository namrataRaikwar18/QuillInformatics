import './Add.css'

const Add = ({ detail, tech, addHead, addImg }) => {
  return (
    <section className="AddCard displayFlex ">
      <img src={addImg} alt={addHead} className="addImg" />
      <button className="btn readMoreBtn">Read more+</button>
      <em className="addDetails displayFlex">
        <small>
          <span className="lightGreyText">{detail}</span> {tech}
        </small>
        <p>{addHead}</p>
      </em>
    </section>
  )
}

export { Add }
