import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  Button,
  Divider,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

export const GSTCasePage = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom color="primary">
        Delhi HC Grants Fresh Hearing in GST Cancellation Case
      </Typography>

      <Card elevation={3} sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            🧾 Introduction
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: "black" }}>
            In a ruling with implications for procedural fairness, the Delhi
            High Court granted a fresh hearing to M/s Jinender Paper Mart, whose
            GST registration was cancelled without a fair opportunity to
            respond. The case also touches on the pending Supreme Court verdict
            regarding the validity of key GST notifications.
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6" gutterBottom>
            🔍 Background & Key Issues
          </Typography>
          <ul>
            <li>
              Non-service of the Show Cause Notice dated 29th May 2024, which
              led to cancellation.
            </li>
            <li>
              No opportunity for personal hearing due to prior suspension and
              portal inaccessibility.
            </li>
            <li>
              Challenge to the constitutional validity of Central Tax
              Notifications No. 9/2023 and 56/2023.
            </li>
          </ul>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6" gutterBottom>
            🧑‍⚖️ Observations & Findings
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: "black" }}>
            The Court noted that although a hearing was scheduled, the
            petitioner couldn’t respond due to GST portal restrictions. It
            acknowledged the procedural lapse and granted a fresh hearing in
            light of fairness and pending constitutional review.
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6" gutterBottom>
            📜 Delhi High Court’s Directions
          </Typography>
          <ul>
            <li>Set aside cancellation order dated 27th August 2024</li>
            <li>Fresh hearing to be conducted by Adjudicating Authority</li>
            <li>Petitioner may file reply to SCN by 10th July 2025</li>
            <li>Personal hearing must be granted</li>
            <li>GST portal access to be restored</li>
            <li>
              Outcome subject to Supreme Court’s final decision in SLP
              No. 4240/2025
            </li>
          </ul>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6" gutterBottom>
            📝 Conclusion
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: "black" }}>
            This judgment reinforces the importance of natural justice in tax
            adjudication. It offers temporary relief to the petitioner while the
            industry awaits clarity on GST notification validity from the
            Supreme Court.
          </Typography>

          <Box textAlign="center" mt={3}>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<DownloadIcon />}
              href="#"
              sx={{ textTransform: "none" }}
            >
              Download Full Order
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};


