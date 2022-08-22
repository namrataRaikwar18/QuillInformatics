import "./Drawer.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { PageData } from "../../Data/PageData";

const Drawer = ({ setOpenDrawer }) => {
  const [subcategory, setSubcategory] = useState({
    service: false,
    webDev: false,
    mobileDev: false,
    cmsDev: false,
    eComDev: false,
    cloudDev: false,
    digitalDev: false,
    crmDev: false,
    productDev: false,
    uxDev: false,
  });

  const closeDrawerHandler = () => {
    setOpenDrawer(false);
  };

  const Back = ({ category }) => {
    return (
      <div
        className="closeDrawer displayFlex"
        onClick={() => setSubcategory({ ...subcategory, [category]: false })}
      >
        <span className="backIcon"></span>
        <p className="back">Back</p>
      </div>
    );
  };

  return (
    <div className="drawer">
      <ul className="alldrawerList lightGreyText">
        {PageData.map(({ to, page, category, isService }) => {
          return (
            <section className="allCategoryDrawer" key={page}>
              {page === "Service" ? (
                <div
                  className="closeDrawer displayFlex"
                  onClick={() => setOpenDrawer(false)}
                >
                  <span className="backIcon"></span>
                  <p className="back">Back</p>
                </div>
              ) : null}
              <div className={category ? "nextCategory" : null}>
                <Link to={to} className="link">
                  <li className="list drawerList" onClick={closeDrawerHandler}>
                    {page}
                  </li>
                </Link>
                {category ? (
                  <span
                    className="drawerCategory"
                    onClick={() =>
                      setSubcategory({ ...subcategory, service: true })
                    }
                  ></span>
                ) : null}
              </div>
              {subcategory[isService] ? (
                <div className="categoryDrawer">
                  {category?.map(
                    ({ toCategory, categoryPage, subCategory, isPage }) => (
                      <div key={toCategory}>
                        {categoryPage === "Web Development" ? (
                          <Back category={"service"} key={categoryPage} />
                        ) : null}
                        <div className={subCategory ? "nextCategory" : null}>
                          <Link to={toCategory} className="link">
                            <li
                              className="list drawerList"
                              onClick={closeDrawerHandler}
                            >
                              {categoryPage}
                            </li>
                          </Link>
                          {subCategory ? (
                            <span
                              className="drawerCategory"
                              onClick={() =>
                                setSubcategory({
                                  ...subcategory,
                                  [isPage]: true,
                                })
                              }
                            ></span>
                          ) : null}
                        </div>
                        {subcategory[isPage] ? (
                          <div className="categoryDrawer pageSubCategory">
                            {subcategory[isPage] ? (
                              <Back category={isPage} key={isPage} />
                            ) : null}
                            {subCategory?.map(
                              ({ toSubCategory, subCategoryPage }) => {
                                return (
                                  <div key={toSubCategory}>
                                    <Link to={toSubCategory} className="link">
                                      <li
                                        className="list drawerList"
                                        onClick={closeDrawerHandler}
                                      >
                                        {subCategoryPage}
                                      </li>
                                    </Link>
                                  </div>
                                );
                              }
                            )}
                          </div>
                        ) : null}
                      </div>
                    )
                  )}
                </div>
              ) : null}
            </section>
          );
        })}
      </ul>
    </div>
  );
};

export { Drawer };
