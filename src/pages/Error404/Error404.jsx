import { useLocation } from 'react-router'
import { BackToHome } from '../../Components'


const Error404 = () => {
  const location = useLocation()
  console.log(location.pathname)
  return (
    <main>
      <section className="pageSection">
        <div className="cmsDevImg pageHeaderImg" />
        <div className="imgText pagePadding displayFlex">
          <BackToHome page="Page Not Found" />
        </div>
      </section>
      <section>
        <div className="error404Img pageHeaderImg" />
      </section>
    </main>
  )
}

export { Error404 }
