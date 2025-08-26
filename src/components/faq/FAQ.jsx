import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "What should I do after a DUI arrest?",
    answer:
      "Contact a lawyer immediately and avoid discussing your case without legal counsel.",
  },
  {
    question: "Do you offer consultations?",
    answer: "Yes, we offer free initial consultations to evaluate your case.",
  },
];

const FAQ = () => (
  <>
    <Typography variant="h4" textAlign="center" mb={4}>
      Frequently Asked Questions
    </Typography>
    {faqs.map((faq, i) => (
      <Accordion key={i} sx={{ backgroundColor: "#1a1a1a", color: "#f5f5f5" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#FFD700" }} />}
        >
          <Typography>{faq.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{faq.answer}</Typography>
        </AccordionDetails>
      </Accordion>
    ))}
  </>
);

export default FAQ;
