import Logo from "../../src/assets/logo.png";
import Main_Image from "../../src/assets/main_header.png";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Dashboard_image from "../../src/assets/dashboard.jpg";
import Engagement from "../../src/assets/engagement_2.jpg";
import Know from "../../src/assets/know.png";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
// import Krisp from "../../src/assets/krisp.png";
// import Loom from "../../src/assets/Loom.png";
// import Uber from "../../src/assets/uber.png";
// import Zapier from "../../src/assets/zapier.png";
// import Bubble from "../../src/assets/Bubble.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import SwiperCore from "swiper";
import Button from "../components/Button";
import Dashboard from "../components/Dashboard";
import { DashboardData } from "../constant/DashboardData";
import Features from "../components/Features";
import { TestimonialsData } from "../constant/TestimonialsData";
import Testimonials from "../components/Testimonials";
import { useRef } from "react";
// import React from 'react'
const easing = [0.175, 0.85, 0.42, 0.96];

const container = {
  animate: {
    transition: {
      staggerChildren: 0.2, // Délais entre chaque enfant
    },
  },
};
const recognition = { 
  animate:{
    transition: {
      delayChildren:0.2,
      staggerChildren:0.2,
      staggerDirection:1
    },

  }
}
const item = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2, // L'animation durera 0.5 seconde
      ease: easing,
    },
  },
};

const arrow = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5, // L'animation durera 0.5 seconde
      ease: easing,
      delay: 2, // Délai de 0.3 seconde pour que la description apparaisse après l'image
    },
  },
};

const title = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1, // L'animation durera 0.5 seconde
      ease: easing,
    },
  },
};

const description = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5, // L'animation durera 0.5 seconde
      ease: easing,
      delay: 1, // Délai de 0.3 seconde pour que la description apparaisse après l'image
    },
  },
};
const fadeInUp={
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5, // L'animation durera 0.5 seconde
      ease: easing,

    },
  },
}


function Home() {
  const swiperRef = useRef<SwiperCore | null>(null);
  return (
    <motion.div
      className="app"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.section className="top">
        <div className="top__navigation">
            <div className="top__navigation--toggle">
            <HiOutlineMenuAlt1 />
            </div>
          <div className="top__navigation--wrapper">
            <motion.img
              src={Logo}
              alt=""
              className="top__navigation--logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 1.5 }}
            />
            <motion.ul
              variants={container}
              initial="initial"
              animate="animate"
              className="top__navigation--list"
            >
              <motion.li variants={item} className="top__navigation--item">
                Accueil
              </motion.li>
              <motion.li variants={item} className="top__navigation--item">
                Ressources
              </motion.li>
              <motion.li variants={item} className="top__navigation--item">
                Prix
              </motion.li>
              <motion.li variants={item} className="top__navigation--item">
                Démo
              </motion.li>
            </motion.ul>
          </div>
          <motion.div
            variants={container}
            initial="initial"
            animate="animate"
            className="top__navigation--wrapper"
          >
            <motion.span variants={arrow} className="top__navigation--item">
              S'inscrire
            </motion.span>
            <motion.span variants={arrow}>
              <Button title="Se connecter" type="inline" />
            </motion.span>
          </motion.div>
        </div>
        <motion.div
          className="top__header"
          variants={container}
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={title} className="top__header--title">
            <span>Créer </span> une culture que
            <span> les gens </span>
            ne quittent pas
          </motion.h1>
          <motion.p variants={description} className="top__header--text">
            "Créer une culture que les gens ne quittent pas" est une application
            innovante conçue pour aider les entreprises à bâtir et maintenir une
            culture d'entreprise attrayante et durable. Cette application offre
            des outils et des ressources pour analyser, améliorer et gérer la
            culture organisationnelle, en mettant l'accent sur la rétention des
            talents et le bien-être des employés.
          </motion.p>
          <motion.img src={Main_Image} alt="" className="top__header--image" />
        </motion.div>
        {/* <div className="custom-shape-divider-bottom-1716543749">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
    </svg>
</div> */}

        {/* <img src={Main} alt="" /> */}
      </motion.section>

      <motion.section
      className="recognition"
      variants={recognition}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="recognition__wrapper">
        <motion.h1 variants={fadeInUp} className="recognition__wrapper--title">
          Commencez une habitude de reconnaissance
        </motion.h1>
        <motion.p variants={fadeInUp} className="recognition__wrapper--description">
          l'affaire donne le coup d'envoi aux commentaires vendredi chaque
          semaine. Une journée où les gens sont encouragés à donner des
          félicitations et des commentaires
        </motion.p>
        <motion.div variants={description} style={{ marginTop: "10px" }}>
          <Button type="outline" title="Voir plus" />
        </motion.div>
      </div>
      <div className="recognition__wrapper">
        <Dashboard color="green" image={Dashboard_image} />
      </div>
    </motion.section>
      <motion.section       variants={recognition}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.5 }} className="dashboard">
        {DashboardData.map((dashboard, index) => {
          return <Features key={index} {...dashboard} />;
        })}
      </motion.section>
      <section className="engagement">
        <div className="engagement__wrapper">
          <h1 className="engagement__wrapper--title">
            Prêt à améliorer l'engagement et la rétention ?
          </h1>
          <p className="engagement__wrapper--text">
            Ce titre offre des stratégies éprouvées pour renforcer l'engagement
            des employés et réduire le taux de rotation du personnel, en mettant
            l'accent sur la création d'une culture d'entreprise positive et
            inclusive. À travers des conseils pratiques, des études de cas
            inspirantes et des outils de diagnostic, vous découvrirez comment
            instaurer un environnement de travail.
          </p>
        </div>
        <div className="engagement__wrapper">
          {/* <img src={Blob} alt="" className="engagement__wrapper--blob" /> */}
          <img src={Engagement} alt="" />
        </div>
      </section>
      <section className="testimonials">
        <div className="testimonials__wrapper">
          <h1 className="testimonials__title">Ce qu'ils pensent de nous</h1>
          <p className="testimonials__description">
            Découvrez en détail les témoignages et expériences de nos
            utilisateurs passionnés, et voyez comment notre matière a non
            seulement stimulé leur créativité, mais a également transformé leur
            vie professionnelle et personnelle
          </p>
          <span className="testimonials__arrow">
            <span
              className="testimonials__arrow--left"
              onClick={() => {
                if (swiperRef.current) swiperRef.current.slidePrev();
              }}
            >
              <RiArrowLeftSLine />
            </span>
            <span
              className="testimonials__arrow--right"
              onClick={() => {
                if (swiperRef.current) swiperRef.current.slideNext();
              }}
            >
              <RiArrowRightSLine />
            </span>
          </span>
        </div>
        <div className="testimonials__wrapper">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={3}
            spaceBetween={50}
            loop={true}
            onSlideChange={() => console.log("slide change")}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {TestimonialsData.map((testimonials, index) => (
              <SwiperSlide>
                <Testimonials key={index} {...testimonials} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section className="meaningful">
        <img src={Know} alt="" className="meaningful__image" />
        <h1 className="meaningful__title">
          Commencez à donner du sens à <span> la reconnaissance </span> et{" "}
          <span> aux récompenses </span> qui comptent
        </h1>
        <p className="meaningful__description">
          Découvrez comment des gestes de reconnaissance sincères et des
          récompenses bien pensées peuvent transformer votre équipe et votre
          organisation.{" "}
        </p>
        <div className="meaningful__wrapper">
          <Button type="inline" title="Voir plus" />
          <Button type="outline" title="Soutenez nous" />
        </div>
      </section>
      <section className="footer">
        <div className="footer__content">
          <img src={Logo} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <div className="footer__icons">
            <a href="#"></a>
          </div>
        </div>
        <div className="footer__content">
          <h4 className="footer__title">Projets</h4>
          <ul className="footer__item">
            <li className="footer__list">
              <a href="#">House</a>
            </li>
            <li className="footer__list">
              <a href="#">House</a>
            </li>
            <li className="footer__list">
              <a href="#">House</a>
            </li>
            <li className="footer__list">
              <a href="#">House</a>
            </li>
          </ul>
        </div>
        <div className="footer__content">
          <h4 className="footer__title">Projets</h4>
          <ul className="footer__item">
            <li className="footer__list">
              <a href="#">House</a>
            </li>
            <li className="footer__list">
              <a href="#">House</a>
            </li>
            <li className="footer__list">
              <a href="#">House</a>
            </li>
            <li className="footer__list">
              <a href="#">House</a>
            </li>
          </ul>
        </div>
        <div className="footer__content">
          <h4 className="footer__title">Projets</h4>
          <p>Lorem ipsum dolor sit amet consectetur</p>
          <Button type="inline" title="Soutenez nous" />
        </div>
      </section>
    </motion.div>
  );
}

export default Home;
