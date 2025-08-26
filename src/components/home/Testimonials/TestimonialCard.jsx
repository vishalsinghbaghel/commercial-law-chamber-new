import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";

const TestimonialCard = ({ name, quote }) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <Card
      elevation={4}
      sx={{
        background: "linear-gradient(135deg, #f9f9f9, #e0e0e0)",
        borderRadius: 3,
        padding: 2,
        minHeight: 200,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <CardContent>
        <Box display="flex" alignItems="center" mb={2}>
          <Avatar sx={{ bgcolor: "#1c4897", mr: 2 }}>{initials}</Avatar>
          <Typography variant="h6" color="primary">
            {name}
          </Typography>
        </Box>
        <Typography variant="body1" color="text.secondary">
          “{quote}”
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
