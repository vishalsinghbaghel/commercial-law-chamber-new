import React from "react";
import Slider from "react-slick";
import { Box, Typography, Card, CardContent, Avatar } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Adv. Priya Sharma",
    role: "Family Law Specialist",
    quote:
      "The team was incredibly responsive and professional. Highly recommended!",
    image: "/image/img1.jpg",
  },
  {
    name: "Adv. Raj Mehta",
    role: "Corporate Law Expert",
    quote: "Their attention to detail and client care is unmatched.",
    image: "/image/img3.jpg",
  },
  {
    name: "Adv. Neha Verma",
    role: "Criminal Defense Attorney",
    quote: "I felt supported and informed throughout the entire process.",
    image: "/image/img2.jpg",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
  ],
};

const Testimonials = () => {
  return (
    <Box
      sx={{
        py: 10, // Increased height
        background: "linear-gradient(to right, #f5f5f5, #eaeaea)",
        borderTop: "6px solid #1c4897",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ maxWidth: 900, width: "100%", px: 2 }}>
        <Typography variant="h4" align="center" color="primary" mb={4}>
          Client Testimonials
        </Typography>

        <Slider {...sliderSettings}>
          {testimonials.map((t, i) => (
            <Box key={i} px={2}>
              <Card
                sx={{
                  minHeight: 250, // Increased card height
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <CardContent>
                  <Box display="flex" alignItems="center" mb={2}>
                    <Avatar
                      src={t.image}
                      alt={t.name}
                      sx={{ width: 60, height: 60, mr: 2 }}
                    />
                    <Box>
                      <Typography variant="h6">{t.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {t.role}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body1" color="text.primary">
                    “{t.quote}”
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Testimonials;
