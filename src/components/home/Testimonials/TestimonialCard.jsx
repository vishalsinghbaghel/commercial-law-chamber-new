import { Card, CardContent, Typography } from "@mui/material";

const TestimonialCard = ({ name, quote }) => (
  <Card
    sx={{
      background: "rgba(255, 255, 255, 0.05)",
      backdropFilter: "blur(6px)",
      borderRadius: 3,
      p: 2,
      color: "#f5f5f5",
    }}
  >
    <CardContent>
      <Typography variant="body1" mb={2}>
        "{quote}"
      </Typography>
      <Typography variant="subtitle2" fontWeight="bold">
        {name}
      </Typography>
    </CardContent>
  </Card>
);

export default TestimonialCard;
