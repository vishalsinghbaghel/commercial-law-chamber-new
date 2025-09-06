import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import "./Team.css";

const teamMembers = [
  // Leadership
  {
    name: "Vivek Sarin",
    role: "Founding Partner",
    bio: `20+ years of experience in high-stakes litigation before the Supreme Court, High Courts, and tribunals.`,
    image: "/image/bg_5.jpg",
  },
  {
    name: "Vimal Kumar",
    role: "Chartered Accountant",
    bio: `Over a decade of experience in audits, taxation, and litigation.`,
    image: "/image/bg_5.jpg",
  },
  {
    name: "Shreyas Srivastava",
    role: "Counsel",
    bio: `12+ years of experience in direct and indirect taxation.`,
    image: "/image/bg_5.jpg",
  },

  // Developers
  {
    name: "Anjali Mehta",
    role: "Frontend Developer",
    bio: `Expert in React, Vue, and UI/UX design with 5+ years of experience.`,
    image: "/image/bg_5.jpg",
  },
  {
    name: "Rohit Verma",
    role: "Backend Developer",
    bio: `Specializes in Node.js, Express, and database architecture.`,
    image: "/image/bg_5.jpg",
  },

  // Testers
  {
    name: "Sneha Kapoor",
    role: "QA Analyst",
    bio: `Skilled in manual and automated testing with a keen eye for detail.`,
    image: "/image/bg_5.jpg",
  },
  {
    name: "Amit Desai",
    role: "Test Engineer",
    bio: `Focused on performance and security testing for enterprise apps.`,
    image: "/image/bg_5.jpg",
  },

  // Networking
  {
    name: "Neha Sharma",
    role: "Network Architect",
    bio: `Designs scalable network infrastructure for high-availability systems.`,
    image: "/image/bg_5.jpg",
  },
  {
    name: "Karan Singh",
    role: "System Administrator",
    bio: `Manages servers, firewalls, and ensures network uptime.`,
    image: "/image/bg_5.jpg",
  },
];

export const Team = () => {
  return (
    <>
      {/* Header */}
      <header className="main-header">
        <h1 className="header-title">About Our Team</h1>
      </header>

      {/* Team Section */}
      <Box className="team-background">
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Meet Our Leadership
          </Typography>

          <Box className="card-row">
            {teamMembers.map((member, index) => (
              <Card className="team-card" key={index}>
                <CardMedia
                  component="img"
                  image={member.image}
                  alt={member.name}
                  className="card-image"
                />
                <CardContent className="card-content">
                  <Typography variant="h6">{member.name}</Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    {member.role}
                  </Typography>
                  <Typography variant="body2">{member.bio}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
};
