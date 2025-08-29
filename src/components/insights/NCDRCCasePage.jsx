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

export const NCDRCCasePage = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom color="primary">
        NCDRC Holds Insurer Liable: A.K. Rubber vs. Oriental Insurance Co.
      </Typography>

      <Card elevation={3} sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            🧾 Introduction
          </Typography>
          <Typography variant="body1" paragraph>
            In a landmark ruling, the NCDRC held Oriental Insurance liable for
            wrongfully repudiating a fire insurance claim despite the insured
            fulfilling all obligations. The case involved a ₹2.28 crore claim
            denied due to a location mismatch in the policy.
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6" gutterBottom>
            🔍 Background & Key Facts
          </Typography>
          <Typography variant="body1" paragraph>
            The fire occurred at A.K. Rubber’s Sarigam factory in 2014. Though
            the policy was renewed in 2013, it mistakenly covered the old
            Dabhel, Daman location. The insured’s banker had requested coverage
            for Sarigam, but the insurer failed to update the address.
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6" gutterBottom>
            ⚖️ Issues Before the Court
          </Typography>
          <ul>
            <li>Was the claim repudiation valid due to location mismatch?</li>
            <li>Did the insured breach policy conditions?</li>
            <li>Was there deficiency in service by the insurer?</li>
          </ul>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6" gutterBottom>
            🧑‍⚖️ Court’s Findings
          </Typography>
          <ul>
            <li>
              <strong>Repudiation Invalid:</strong> The insurer was informed of
              the new location; the error was theirs.
            </li>
            <li>
              <strong>No Policy Violation:</strong> No misrepresentation or
              material risk change.
            </li>
            <li>
              <strong>Deficiency in Service:</strong> Failure to update policy
              and refusal to pay.
            </li>
            <li>
              <strong>Precedent Cited:</strong> LIC v. Rajiv Kumar Bhasker,
              Gurmel Singh v. National Insurance Co.
            </li>
          </ul>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6" gutterBottom>
            📜 Final Order
          </Typography>
          <ul>
            <li>Pay ₹2,28,14,988 as per survey report</li>
            <li>Interest at 9% p.a. from 16.08.2014 till payment</li>
            <li>Comply within two months of judgment</li>
          </ul>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6" gutterBottom>
            📝 Conclusion
          </Typography>
          <Typography variant="body1" paragraph>
            This ruling reinforces insurer accountability and protects
            policyholders from procedural errors. Businesses must ensure clear
            communication and documentation during policy renewals.
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


