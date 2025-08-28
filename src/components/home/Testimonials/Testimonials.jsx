import React, { useRef, useEffect } from "react";
import { Box, Typography, Card, CardContent, Avatar } from "@mui/material";

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
  {
    name: "Adv. Karan Joshi",
    role: "Tax Law Advisor",
    quote:
      "Their strategic insights helped us navigate a complex audit with confidence.",
    image: "/image/img4.jpg",
  },
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (scrollContainer) {
        scrollAmount += 320;
        if (
          scrollAmount >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollAmount = 0;
        }
        scrollContainer.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        py: 10,
        backgroundColor: "#0f172a",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ maxWidth: 1200, width: "100%", px: 2 }}>
        <Typography
          variant="h4"
          align="center"
          mb={4}
          sx={{
            fontSize: { xs: "1.75rem", sm: "2rem", md: "2.25rem" },
            color: "#fff",
          }}
        >
          Client Testimonials
        </Typography>

        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            gap: { xs: 2, sm: 3 },
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            pb: 2,
            px: { xs: 1, sm: 2 },
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
            "&::-webkit-scrollbar": {
              height: 8,
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#1c4897",
              borderRadius: 4,
            },
          }}
        >
          {testimonials.map((t, i) => (
            <Card
              key={i}
              sx={{
                width: {
                  xs: "90%",
                  sm: "70%",
                  md: "45%",
                  lg: "32%",
                },
                flex: "0 0 auto",
                scrollSnapAlign: "start",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                },
                backgroundColor: "#002b5c",
                color: "white",
                padding: "1.5rem",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                borderLeft: "10px solid #f4c542",
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
                    <Typography variant="body2">{t.role}</Typography>
                  </Box>
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                    color: "#f4c542",
                  }}
                >
                  “{t.quote}”
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;
