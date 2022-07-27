import './Mothodology.css'
import { GiCheckMark } from 'react-icons/gi'

const Mothodology = () => {
  return (
    <>
      <section className="methoSection displayFlex">
        <div className="methoContainer displayFlex">
          <p className="methoHeading ">
            tecHindustan follows the
            <span className="boldText">Agile Methodology-</span>
          </p>
          <ul className="greyText">
            <li className="methoList displayFlex ">
              <p>
                <GiCheckMark className="checkIcon" />
              </p>
              <div className="methoListBody displayFlex">
                <p>INSPECT</p>
                <p>
                  Post-mortem analysis to find severe issues and action items to
                  release a stable product afterward.
                </p>
              </div>
            </li>
            <li className="methoList displayFlex">
              <p>
                <GiCheckMark className="checkIcon" />
              </p>
              <div className="methoListBody displayFlex">
                <p>ADAPT</p>
                <p>Making Adoptions based on feedback-loop-driven learning.</p>
              </div>
            </li>
            <li className="methoList displayFlex">
              <p>
                <GiCheckMark className="checkIcon" />
              </p>
              <div className="methoListBody displayFlex">
                <p>DELIVER</p>
                <p>Consistently delivering more quality than expected.</p>
              </div>
            </li>
          </ul>
        </div>
        <img
          src="https://techindustan.com/wp-content/uploads/2017/07/deliver-580x380.jpg"
          alt="airplane"
        />
        <div className="divider"></div>
      </section>
    </>
  )
}

export { Mothodology }
