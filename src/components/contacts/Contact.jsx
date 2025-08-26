// ContactPage.jsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  InputAdornment,
} from "@mui/material";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
  FaGlobe,
  FaUser,
  FaMailBulk,
  FaUserEdit,
  FaEdit,
} from "react-icons/fa";

export const Contact = () => {
  const contactItems = [
    {
      icon: <FaMapMarkerAlt />,
      label: "Address",
      value: "198 West 21th Street, Suite 721 New York NY 10016",
    },
    {
      icon: <FaPhoneAlt />,
      label: "Phone",
      value: "+91 7568268005",
      link: "tel:+917568268005",
    },
    {
      icon: <FaPaperPlane />,
      label: "Email",
      value: "nevermorestudiollp@gmail.com",
      link: "mailto:nevermorestudiollp@gmail.com",
    },
    {
      icon: <FaGlobe />,
      label: "Website",
      value: "yoursite.com",
      link: "#",
    },
  ];

  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      {/* Background Image Layer */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: 'url("/image/hero-bg.png")', // assuming public folder
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "scroll",
          zIndex: 0,
        }}
      />
      <Container maxWidth="lg">
        {/* Contact Info Cards */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: "center",
            mb: 6,
            mt: 4,
          }}
        >
          {contactItems.map((item, index) => (
            <Card
              key={index}
              sx={{
                flex: "1 1 220px",
                maxWidth: 280,
                minHeight: 180,
                textAlign: "center",
                backdropFilter: "blur(10px)",
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: 3,
                boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 12px 32px rgba(0,0,0,0.4)",
                },
              }}
              elevation={0}
            >
              <CardContent>
                <Box
                  sx={{
                    fontSize: 32,
                    color: "#f4c542",
                    mb: 1,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </Box>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  sx={{ color: "white" }}
                >
                  {item.label}
                </Typography>
                {item.link ? (
                  <Typography
                    component="a"
                    href={item.link}
                    sx={{
                      textDecoration: "none",
                      color: "#fff",
                      wordBreak: "break-word",
                      overflowWrap: "break-word",
                      whiteSpace: "normal",
                    }}
                  >
                    {item.value}
                  </Typography>
                ) : (
                  <Typography
                    sx={{
                      wordBreak: "break-word",
                      overflowWrap: "break-word",
                      whiteSpace: "normal",
                    }}
                  >
                    {item.value}
                  </Typography>
                )}
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Form + Map Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          {/* Google Map */}
          <Card
            sx={{
              flex: 1,
              overflow: "hidden",
              borderRadius: 3,
              boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
              position: "relative",
            }}
            elevation={0}
          >
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16422.248139339015!2d81.32457025978051!3d24.575704213843114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398459e38c608231%3A0xd52f3fe6a1b00536!2sItaura%2C%20Madhya%20Pradesh!5e1!3m2!1sen!2sin!4v1756108745392!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Card>

          {/* Contact Form */}
          <Card
            sx={{
              flex: 1,
              backdropFilter: "blur(10px)",
              background: "rgba(255,255,255,0.1)",
              borderRadius: 3,
              boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
            }}
            elevation={0}
          >
            <CardContent>
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  color: "#f4c542",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                Contact Us
              </Typography>
              <Box
                component="form"
                sx={{ display: "flex", flexDirection: "column", gap: 3 }}
              >
                <TextField
                  label="Username"
                  variant="filled"
                  sx={{
                    input: { color: "#fff" },
                    label: { color: "#ccc" },
                    backgroundColor: "rgba(255,255,255,0.1)",
                    borderRadius: 1,
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FaUser color="#f4c542" />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Email Address"
                  variant="filled"
                  sx={{
                    input: { color: "#fff" },
                    label: { color: "#ccc" },
                    backgroundColor: "rgba(255,255,255,0.1)",
                    borderRadius: 1,
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FaMailBulk color="#f4c542" />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  fullWidth
                  label="Subject"
                  name="subject"
                  variant="filled"
                  sx={{
                    input: { color: "#fff" },
                    label: { color: "#ccc" },
                    backgroundColor: "rgba(255,255,255,0.1)",
                    borderRadius: 1,
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FaEdit color="#f4c542" />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  variant="filled"
                  sx={{
                    "& .MuiInputBase-root": {
                      alignItems: "flex-start",
                      color: "#fff",
                      backgroundColor: "rgba(255,255,255,0.1)",
                      borderRadius: 1,
                    },
                    label: { color: "#ccc" },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FaUserEdit color="#f4c542" />
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    background: "linear-gradient(45deg, #f4c542, #00bcd4)",
                    color: "#fff",
                    fontWeight: 600,
                    borderRadius: 2,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                    "&:hover": {
                      background: "linear-gradient(45deg, #00bcd4, #f4c542)",
                    },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};
