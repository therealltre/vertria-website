// next
import NextLink from "next/link";
// @mui
import { styled } from "@mui/material/styles";
import {
  Grid,
  Link,
  Divider,
  Container,
  Typography,
  Stack,
  TextField,
  Box,
  Button
} from "@mui/material";
// routes
import { PATH_PAGE } from "../../routes/paths";
// components
import SocialsButton from "../../components/SocialsButton";
import Image from "next/image";
import { Icon } from "@iconify/react";

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: "vertria",
    children: [
      { name: "Home" }, //add href: to the after content received
      { name: "About us" },
      { name: "Services" },
      { name: "Solutions" },
      { name: "Blog" },
      { name: "Carrers" }
      // { name: 'FAQs', href: PATH_PAGE.faqs },
    ]
  },
  {
    headline: "COmpany",
    children: [
      { name: "Our Story" },
      { name: "Case Studies " },
      { name: "Testimonials " },
      { name: "Partners " },
      { name: "FAQs" }
    ]
  }
  // {
  //   headline: "Contact",
  //   children: [
  //     { name: "support@vertria.com", href: PATH_PAGE.contact },
  //     { name: "Address Accra, 35 ave", href: PATH_PAGE.contact },
  //   ],
  // },
];

const RootStyle = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: "#060606"
  // backgroundColor: "#421420",
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  return (
    <RootStyle>
      {/* <Divider /> */}
      <Container sx={{ pt: 5 }}>
        <Grid
          container
          justifyContent={{ xs: "center", md: "space-between" }}
          alignItems="flex-start" // Align grid items at the top
          sx={{ textAlign: { xs: "center", md: "left" } }}
          spacing={2}
        >
          {/* Newsletter Section */}
          <Grid
            item
            xs={12}
            md={4}
            // sx={{ mb: 3 }}
          >
            <Typography sx={{ color: "common.white", mb: 2 }}>
              Join a Newletter
            </Typography>
            {/* <Typography sx={{ color: "common.white", mb: 2 }}>
              Your Email
            </Typography> */}
            <Stack spacing={2} direction={{ xs: "row", md: "row" }}>
              <TextField
                label="Enter Your Email"
                name="email"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "yellow" // Border color on hover
                    }
                  },
                  "& .MuiInputLabel-root": {
                    color: "gray" // Default label color
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "yellow" // Label color when focused
                  }
                }}
              />

              <Button
                variant="contained"
                sx={{
                  bgcolor: "#FFDC58",
                  color: "black",
                  border: "2px solid transparent",
                  "&:hover": {
                    border: "2px solid yellow"
                  },
                  "&:focus": {
                    border: "2px solid yellow"
                  }
                }}
              >
                Subscribe
              </Button>
            </Stack>
            <Stack
              direction="row"
              justifyContent={{ xs: "center", md: "flex-start" }}
              sx={{ mt: 5 }}
            >
              <SocialsButton sx={{ mx: 0.5 }} />
            </Stack>
          </Grid>

          <Grid item xs={12} md={3}>
            <Stack
              spacing={10}
              direction={{ xs: "row", md: "row" }}
              justifyContent="center"
            >
              {LINKS.map((list) => (
                <Stack key={list.headline} spacing={1}>
                  <Typography
                    component="p"
                    variant="overline"
                    sx={{ color: "common.white" }}
                  >
                    {list.headline}
                  </Typography>
                  {list.children.map((link) => (
                    <Link
                      color="gray"
                      variant="body2"
                      underline="none"
                      sx={{
                        display: "block",
                        textDecoration: "none",
                        "&:hover": {
                          color: "primary.dark" // Apply secondary.main on hover
                        }
                      }}
                    >
                      {link.name}
                    </Link>
                  ))}
                  {/* <NextLink
                      key={link.name}
                      href={link.href}
                      passhref="true"
                      style={{ textDecoration: "none" }}
                    >
                      <Link
                        color="gray"
                        variant="body2"
                        underline="none"
                        sx={{
                          display: "block",
                          textDecoration: "none",
                          "&:hover": {
                            color: "primary.dark" // Apply secondary.main on hover
                          }
                        }}
                      >
                        {link.name}
                      </Link>
                    </NextLink> */}
                </Stack>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={8} md={3.5}>
            <NextLink href="/" passhref="true">
              <Image
                src="/assets/vertria-brand-name.svg"
                alt="brand name"
                width={200}
                height={50}
                sx={{ mx: { xs: "auto", md: "inherit" } }}
                priority
              />
            </NextLink>
            <Typography variant="body2" sx={{ pr: { md: 5 }, color: "gray" }}>
              <strong>Vertria</strong> is a cutting-edge AI technology platform
              designed to revolutionize the way businesses
            </Typography>

            {/* <Stack
              direction="row"
              justifyContent={{ xs: "center", md: "flex-start" }}
              sx={{ mt: 5, mb: { xs: 5, md: 0 } }}
            >
              <Typography sx={{ color: "common.white" }}>
                AI Innovative Technology website
              </Typography>
            </Stack> */}
          </Grid>
        </Grid>
        <Divider sx={{ my: 3 }} />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
          gap={2}
          sx={{
            mt: 5,
            pb: 5,
            flexWrap: "wrap"
          }}
        >
          <Typography
            component="p"
            variant="body2"
            sx={{ fontSize: 13, color: "common.white" }}
          >
            All Rights Reserved © Vertria 2025
          </Typography>

          <Stack direction="row" alignItems="center" spacing={1}>
            <Icon icon="eva:globe-fill" width={20} style={{ color: "#fff" }} />
            <Typography
              variant="body2"
              sx={{ fontSize: 13, color: "common.white" }}
            >
              USA
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1}>
            <Icon icon="eva:email-fill" width={20} style={{ color: "#fff" }} />
            <Typography
              variant="body2"
              sx={{ fontSize: 13, color: "common.white" }}
            >
              contact@vertria
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1}>
            <Icon icon="eva:phone-fill" width={20} style={{ color: "#fff" }} />
            <Typography
              variant="body2"
              sx={{ fontSize: 13, color: "common.white" }}
            >
              +1(800) 123-4567
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </RootStyle>
  );
}
