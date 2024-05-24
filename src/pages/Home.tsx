import Logo from "../../src/assets/logo.png";
import Main_Image from "../../src/assets/main_header.png";
import Dashboard_image from "../../src/assets/dashboard.jpg";
import Engagement from "../../src/assets/engagement_2.jpg";
import Blob from "../../src/assets/blob.png";
// import Krisp from "../../src/assets/krisp.png";
// import Loom from "../../src/assets/Loom.png";
// import Uber from "../../src/assets/uber.png";
// import Zapier from "../../src/assets/zapier.png";
// import Bubble from "../../src/assets/Bubble.png";

import Button from "../components/Button";
import Dashboard from "../components/Dashboard";
import { DashboardData } from "../constant/DashboardData";
import Features from "../components/Features";
// import React from 'react'

function Home() {

  return (
    <div className="app">
      <section className="top">
        <div className="top__navigation">
          <div className="top__navigation--wrapper">
            <img src={Logo} alt="" className="top__navigation--logo" />
            <ul className="top__navigation--list">
              <li className="top__navigation--item">Accueil</li>
              <li className="top__navigation--item">Ressources</li>
              <li className="top__navigation--item">Prix</li>
              <li className="top__navigation--item">Démo</li>
            </ul>
          </div>
          <div className="top__navigation--wrapper">
            <span className="top__navigation--item">S'inscrire</span>
            <Button title="Se connecter" type="inline" />
          </div>
        </div>
        <div className="top__header">
          <h1 className="top__header--title">
            <span>Créer </span> une culture que
            <span> les gens </span>
            ne quittent pas
          </h1>
          <p className="top__header--text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            illo aut dolore voluptatibus facere dignissimos sed qui est cum,
            alias obcaecati impedit tempora consequuntur ipsam dolor ad
            perferendis in rem.
          </p>
          <img src={Main_Image} alt="" className="top__header--image" />
        </div>
        {/* <div className="custom-shape-divider-bottom-1716543749">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
    </svg>
</div> */}

        {/* <img src={Main} alt="" /> */}
      </section>
      {/* <section className="trust">
        <h1 className="trust__title">Ces companies nous font confiance</h1>
    <div className="trust__container">
        <img src={Loom} alt="" className="trust__container--image"/>
        <img src={Krisp} alt="" className="trust__container--image"/>
        <img src={Uber} alt="" className="trust__container--image"/>
        <img src={Zapier} alt="" className="trust__container--image"/>
        <img src={Bubble} alt="" className="trust__container--image"/>
      </div>
      </section> */}
      {/* <h1>Salut les gars</h1> */}
      <section className="recognition">
        <div className="recognition__wrapper">
          <h1 className="recognition__wrapper--title">
            Commencez une habitude de reconnaissance
          </h1>
          <p className="recognition__wrapper--description">
            l'affaire donne le coup d'envoi aux commentaires vendredi chaque
            semaine. Une journée où les gens sont encouragés à donner des
            félicitations et des commentaires
          </p>
          <div style={{ marginTop: "10px" }}>
            <Button type="outline" title="Voir plus" />
          </div>
        </div>
        <div className="recognition__wrapper">
          <Dashboard color="green" image={Dashboard_image} />
        </div>
      </section>
      <section className="dashboard">
        {DashboardData.map((dashboard, index) => {
          return <Features key={index} {...dashboard} />;
        })}
      </section>
      <section className="engagement">
        <div className="engagement__wrapper">
          <h1 className="engagement__wrapper--title">Prêt à améliorer l'engagement et la rétention ?</h1>
        </div>
        <div className="engagement__wrapper">
          {/* <img src={Blob} alt="" className="engagement__wrapper--blob" /> */}
          <img src={Engagement} alt="" />
        </div>
      </section>

    </div>
  );
}

export default Home;
