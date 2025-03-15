import PropTypes from "prop-types";
import { m } from "framer-motion";
import { useRef } from "react";
import Slider from "react-slick";
// @mui
import { useTheme, styled } from "@mui/material/styles";
import { Box, Stack, Card, Button, Container, Typography } from "@mui/material";

// components
import { CarouselArrows } from "../../components/carousel";
import { MotionViewport, varFade } from "../../components/animate";
import NextLink from "next/link";
// ----------------------------------------------------------------------
const RootStyle = styled(m.div)(({ theme }) => ({
  width: "100%",
  backgroundColor: "#060606",
  backgroundSize: "cover",
  backgroundPosition: "center",

  [theme.breakpoints.up("lg")]: {
    display: "flex",
    alignItems: "center",
    height: "100vh"
  }
}));

const _carouselsMembers = [
  {
    id: "member-1",
    name: "Alec Milne ",
    role: "Mentor",
    avatar: "/assets/images/avatars/alec-milne-mentor.png"
  },
  {
    id: "member-2",
    name: "Victoria Raish ",
    role: "Mentor",
    avatar: "/assets/images/avatars/victoria-raish-mentor.png"
  },
  {
    id: "member-3",
    name: "Nicole",
    role: "Mentor ",
    avatar: "/assets/images/avatars/nicole-mentor.png"
  }
];

export default function HomeTeam() {
  const carouselRef = useRef(null);

  const theme = useTheme();

  const settings = {
    arrows: false,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0px",
    rtl: Boolean(theme.direction === "rtl"),
    responsive: [
      {
        breakpoint: 1279,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 959,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <RootStyle>
      <Container
        component={MotionViewport}
        sx={{ pb: 10, textAlign: "center" }}
      >
        <Box sx={{ position: "relative" }}>
          <CarouselArrows
            filled
            onNext={handleNext}
            onPrevious={handlePrevious}
          >
            <Slider ref={carouselRef} {...settings}>
              {_carouselsMembers.map((member) => (
                <Box
                  key={member.id}
                  component={m.div}
                  variants={varFade().in}
                  sx={{ px: 1.5, py: 15 }}
                >
                  <MemberCard member={member} />
                </Box>
              ))}
            </Slider>
          </CarouselArrows>
        </Box>

        <m.div
          variants={varFade().inDown}
          // animate={{ y: [-20, 0, -20] }}
          // transition={{ duration: 4, repeat: Infinity }}
        >
          <NextLink passHref href="#">
            <Button
              variant="contained"
              sx={{
                position: "relative",
                overflow: "hidden",
                backgroundColor: theme.palette.primary.main,
                color: "#fff",
                marginTop: 2,
                border: "10px solid transparent",
                borderRadius: 16,
                transition:
                  "color 0.3s ease, background-color 0.3s ease, transform 0.3s ease",
                "&:hover": {
                  color: "#fff",
                  backgroundColor: theme.palette.primary.dark,
                  transform: "translateY(-5px)"
                }
              }}
            >
              Our Mentors
            </Button>
          </NextLink>
        </m.div>
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

MemberCard.propTypes = {
  member: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string
  })
};

function MemberCard({ member }) {
  const { name, role, avatar } = member;

  return (
    <Card
      key={name}
      sx={{
        position: "relative",
        width: "100%",
        height: 500, // Increased height
        borderRadius: 2,
        overflow: "hidden"
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${avatar})`,
          backgroundSize: "120%",
          backgroundPosition: "center",
          filter: "grayscale(100%) brightness(0.8)" // Converts to black & white and darkens slightly
        }}
      />

      {/* Text Container */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          p: 2,
          width: "100%",
          background: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          color: "white"
        }}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          {name}
        </Typography>
        <Box sx={{ width: 150, height: 2, bgcolor: "yellow", my: 0.5 }} />
        <Typography variant="body2">{role}</Typography>
      </Box>
    </Card>
  );
}
