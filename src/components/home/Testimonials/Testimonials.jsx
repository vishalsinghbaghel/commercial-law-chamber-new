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
        scrollAmount += 320; // Approx width of one card + gap
        if (
          scrollAmount >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollAmount = 0; // Reset to start
        }
        scrollContainer.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }, 4000); // Slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        py: 10,
        backgroundColor: "burlywood",
        borderTop: "6px solid #1c4897",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ maxWidth: 1200, width: "100%", px: 2 }}>
        <Typography variant="h4" align="center" color="primary" mb={4}>
          Client Testimonials
        </Typography>

        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            gap: 3,
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            pb: 2,
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
                minWidth: 300,
                flex: "0 0 auto",
                scrollSnapAlign: "start",
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
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;
