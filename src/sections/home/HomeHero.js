import { m } from "framer-motion";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  Container,
  Typography,
  Stack,
  Grid,
  useMediaQuery,
  Button,
  Link
} from "@mui/material";
import { MotionContainer, varFade } from "../../components/animate";
import Image from "next/image";
import HomeFaq from "./HomeFaq";

import { HomeMenteeTestimonials, HomeProgram, HomeSocials, HomeTeam } from ".";
import HomeAd from "./HomeAd";

// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  position: "sticky",
  top: 0,
  width: "100%",
  zIndex: 1,
  background: `linear-gradient(to bottom, ${theme.palette.primary.main}, #1f090f)`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  [theme.breakpoints.up("lg")]: {
    display: "flex",
    alignItems: "center",
    height: "100vh"
  }
}));

const HeroImgStyle = styled(m.img)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: -1,
  width: "100%",
  height: "100%",
  objectfit: "conver",
  backgroundColor: "#060606"
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(
  ({ theme }) => ({
    zIndex: 2,
    maxWidth: 1440,
    margin: "auto",
    position: "relative",
    textAlign: "start",
    display: "flex",
    justifyContent: "start",
    padding: theme.spacing(15, 2),
    [theme.breakpoints.up("md")]: {
      textAlign: "start", // Center text for medium screens
      justifyContent: "center", // Center content horizontally
      alignItems: "center" // Center content vertically
      // padding: theme.spacing(15)
    }
  })
);

// ----------------------------------------------------------------------

export default function HomeHero() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <MotionContainer>
      <RootStyle>
        {/* <HeroImgStyle
          alt="hero"
          src="/assets/images/home/african-patter-no-bg.png"
          // src="/assets/images/home/bg-african-pattern.png"
          // src="/assets/images/home/hero2.png"
          variants={varFade().inUp}
        /> */}

        <Container>
          <ContentStyle>
            <Grid container>
              {/* <Grid item xs={12}> */}
              <Stack spacing={10}>
                <m.div
                  variants={varFade().inUp}
                  // animate={{ y: [-20, 0, -20] }}
                  // transition={{ duration: 4, repeat: Infinity }}
                >
                  <Image
                    src={"/assets/vertria-brand-name.svg"}
                    width={1034}
                    height={174}
                  />
                </m.div>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <m.div
                    variants={varFade().inUp}
                    // animate={{ y: [-20, 0, -20] }}
                    // transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Image
                      src={"/assets/vertria-v-button.png"}
                      width={70}
                      height={70}
                    />
                  </m.div>
                </Box>
                <m.div
                  variants={varFade().inUp}
                  // animate={{ y: [-20, 0, -20] }}
                  // transition={{ duration: 4, repeat: Infinity }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: 24, lg: 50 },
                      // fontWeight: 300,
                      // lineHeight: 0,
                      color: "common.white",
                      textAlign: "center",
                      mt: 5
                    }}
                  >
                    WE HELP YOU <br /> TRANSFORM IDEAS <br /> INTO THRIVING
                    BUSINESSES
                  </Typography>
                </m.div>
              </Stack>
              {/* </Grid> */}
            </Grid>
          </ContentStyle>
        </Container>
      </RootStyle>

      <Box
        sx={{
          height: "auto",
          background: theme.palette.background.default,
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* <HomeTeam /> */}
        {/* <HomeAd /> */}
        <HomeProgram />
        <HomeSocials />
        {/* <HomeMenteeTestimonials /> */}
        {/* <HomeFaq /> */}
      </Box>
    </MotionContainer>
  );
}
