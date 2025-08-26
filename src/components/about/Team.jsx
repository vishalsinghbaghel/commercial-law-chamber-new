import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Box,
} from "@mui/material";
import "./Team.css";

const teamMembers = [
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
];

export const Team = () => {
  return (
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
  );
};
