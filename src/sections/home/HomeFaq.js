// @mui
import { Container, Grid, Typography, Box, Stack, Button } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";

//framermotion
import { MotionViewport, varFade } from "../../components/animate";
import { m } from "framer-motion";
// components
import { FaqsForm, FaqsList } from "../faqs";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  backgroundColor: "#060606",

  [theme.breakpoints.up("md")]: {
    paddingBottom: theme.spacing(15),
  },
}));

// ----------------------------------------------------------------------

export default function HomeFaq() {
  const theme = useTheme();
  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                textAlign: "left",
                mb: { xs: 10, md: 10 },
              }}
            >
              <m.div variants={varFade().inDown}>
                <Stack direction={"column"} spacing={1}>
                  <Typography variant="h2" sx={{ color: "common.white" }}>
                    Frequently Asked Question
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      maxWidth: 500,
                      textAlign: "left",
                      color: "common.white",
                    }}
                  >
                    Pursue your passions with our diverse range of courses
                    focused on lifestyle and hobbies. From cooking to gardening
                    to photograph travel, our courses provide practicaltips and
                    inspiration for enjoying life to the fullest. Whether you're
                    looking to develop a new hobby
                  </Typography>
                </Stack>
              </m.div>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <FaqsList />
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
