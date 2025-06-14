import React, { useState, useRef } from "react";
import "./HowItWorks.css";
// Import your actual images
import NutritionIcon from "../assets/nutrition.png";
import Physicalactivity from "../assets/pactivity.png";
import Restorativesleep from "../assets/sleep.png";
import Stressmanagement from "../assets/stress.png";
import Socialconnection from "../assets/social.png";
import Substanceabuse from "../assets/substance.png";

const HowItWorks = () => {
  const [activePillar, setActivePillar] = useState("nutrition");
  const carouselRef = useRef(null);

  const pillars = [
    { id: "nutrition", name: "Nutrition" },
    { id: "activity", name: "Physical activity" },
    { id: "sleep", name: "Restorative sleep" },
    { id: "stress", name: "Stress management" },
    { id: "social", name: "Social connection" },
    { id: "substance", name: "Substance abuse" },
  ];

  const cardData = [
    {
      icon: NutritionIcon,
      emoji: "🥗",
      title: "Nutrition",
      desc: "Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.",
      metric: "124/80 mmHg",
    },
    {
      icon: Physicalactivity,
      emoji: "🏃",
      title: "Physical activity",
      desc: "Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.",
      metric: "32 minutes",
    },
    {
      icon: Restorativesleep,
      emoji: "😴",
      title: "Restorative sleep",
      desc: "Consistent, quality sleep is essential for cognitive function, emotional regulation, and physical recovery.",
      metric: "8 hours",
    },
    {
      icon: Stressmanagement,
      emoji: "🧘",
      title: "Stress management",
      desc: "Effective stress management techniques are crucial for mental well-being and overall health.",
      metric: "90/100",
    },
    {
      icon: Socialconnection,
      emoji: "👥",
      title: "Social connection",
      desc: "Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health.",
      metric: "78/100",
    },
    {
      icon: Substanceabuse,
      emoji: "🚭",
      title: "Substance abuse",
      desc: "Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health.",
      metric: "47/100",
    },
  ];

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="how-it-works">
      <div className="container">
        <div className="section-header">
          <div className="title-with-arrows">
            <h2 className="section-title">HOW IT WORKS</h2>
            <div className="carousel-arrows">
              <button className="carousel-arrow left" onClick={scrollLeft}>
                ←
              </button>
              <button className="carousel-arrow right" onClick={scrollRight}>
                →
              </button>
            </div>
          </div>
          <p className="section-subtitle">
            <strong className="gradient-text">
              <i>Lifestyle as medicine:</i>
            </strong>{" "}
            The six pillars
          </p>

          <div className="pillars-nav">
            {pillars.map((pillar) => (
              <button
                key={pillar.id}
                className={`pillar-btn ${
                  activePillar === pillar.id ? "active" : ""
                }`}
                onClick={() => setActivePillar(pillar.id)}
              >
                {pillar.name}
              </button>
            ))}
          </div>
        </div>

        <div className="carousel-wrapper">
          <div className="cards-carousel" ref={carouselRef}>
            {cardData.map((card, index) => (
              <div className="lifestyle-card" key={index}>
                <div className="card-image">
                  <img src={card.icon} alt={card.title} />
                  <div className="card-rating">{card.metric}</div>
                </div>
                <div className="card-content">
                  <h3 className="card-title">
                    {card.emoji} {card.title}
                  </h3>
                  <p className="card-description">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
