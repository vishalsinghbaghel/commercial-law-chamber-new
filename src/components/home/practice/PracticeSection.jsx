import Slider from "react-slick";
import {
  FaBalanceScale,
  FaFileAlt,
  FaChartLine,
  FaGavel,
  FaUniversity,
  FaShieldAlt,
  FaHandshake,
  FaBriefcase,
  FaUsers,
  FaRegLightbulb,
} from "react-icons/fa";
import styles from "./PracticeSection.module.css";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";

export const PracticeSection = () => {
  const practiceAreas = [
    {
      icon: <FaFileAlt />,
      title: "Tax Litigation",
      desc: "Expert representation in direct and indirect tax disputes.",
    },
    {
      icon: <FaBalanceScale />,
      title: "Commercial Disputes",
      desc: "Resolving complex business conflicts with strategic precision.",
    },
    {
      icon: <FaChartLine />,
      title: "Regulatory Advisory",
      desc: "Guidance on compliance, licensing, and regulatory frameworks.",
    },
    {
      icon: <FaGavel />,
      title: "Arbitration",
      desc: "Efficient resolution of disputes outside traditional courts.",
    },
    {
      icon: <FaUniversity />,
      title: "Corporate Law",
      desc: "Structuring and governance for modern enterprises.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Cyber Law",
      desc: "Protection against digital threats and data breaches.",
    },
    {
      icon: <FaHandshake />,
      title: "Contract Negotiation",
      desc: "Crafting watertight agreements with strategic foresight.",
    },
    {
      icon: <FaBriefcase />,
      title: "Employment Law",
      desc: "Navigating workplace rights and compliance.",
    },
    {
      icon: <FaUsers />,
      title: "Family Business Advisory",
      desc: "Balancing legacy, governance, and growth.",
    },
    {
      icon: <FaRegLightbulb />,
      title: "Intellectual Property",
      desc: "Safeguarding innovation and creative assets.",
    },
  ];

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 960, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className={styles.practiceAreas}>
      <h2 className={styles.sectionTitle}>Core Practice Areas</h2>
      <Slider {...settings} className={styles.cardsContainer}>
        {practiceAreas.map((area, index) => (
          <Box key={index} px={1}>
            <motion.div
              key={index}
              className={styles.practiceCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.icon}>{area.icon}</div>
              <h3>{area.title}</h3>
              <p>{area.desc}</p>
            </motion.div>
          </Box>
        ))}
      </Slider>
    </section>
  );
};
