import "./Home.css";

import BestFood from "../../components/BestFood/BestFood";
import Carousel from "../../components/Carousel/Carousel";
import Delivery from "../../components/Delivery/Delivery";
import Ingredients from "../../components/Ingredients/Ingredients";
import QualityProducts from "../../components/QualityProducts/QualityProducts";
import Steps from "../../components/Steps/Steps";
import WhatWeHave from "../../components/WhatWeHave/WhatWeHave";
import Analysis from "../../components/Analysis/Analysis";
import Statistic from "../../components/Statistic/Statistic";
import Reviews from "../../components/Reviews/Reviews";

const Home = () => {
  window.scroll({ top: 0 });
  return (
    <div style={{ overflow: "hidden" }}>
      <Carousel />
      <Steps />
      <Ingredients />
      <section className="container-section-3">
        <img
          src="https://food-g-app.web.app/static/media/bg-icon-1.142c8af2.svg"
          alt=""
        />
        <img
          src="https://food-g-app.web.app/static/media/bg-icon-2.0f00240f.svg"
          alt=""
        />
        <img
          src="https://food-g-app.web.app/static/media/bg-icon-3.fef0a1ab.svg"
          alt=""
        />
        <BestFood />
        <WhatWeHave />
      </section>
      <Delivery />
      <QualityProducts />
      <Analysis />
      <Statistic />
      <Reviews />
    </div>
  );
};

export default Home;
