import { Grid, Typography } from "@mui/material";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "John D.",
    quote: "They truly care about justice and made me feel heard.",
  },
  {
    name: "Maria S.",
    quote: "Professional, responsive, and incredibly supportive.",
  },
];

const Testimonials = () => (
  <>
    <Typography variant="h4" textAlign="center" mb={4}>
      Client Testimonials
    </Typography>
    <Grid container spacing={4}>
      {testimonials.map((t, i) => (
        <Grid item xs={12} md={6} key={i}>
          <TestimonialCard {...t} />
        </Grid>
      ))}
    </Grid>
  </>
);

export default Testimonials;
