// next
import { useRouter } from "next/router";
// @mui
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  Button,
  AppBar,
  Toolbar,
  Container,
  Stack,
  Divider
} from "@mui/material";
// hooks
import useOffSetTop from "../../hooks/useOffSetTop";
import useResponsive from "../../hooks/useResponsive";
// utils
import cssStyles from "../../utils/cssStyles";
// config
import { HEADER } from "../../config";
// components
//
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
import navConfig from "./MenuConfig";
import { PATH_AUTH, PATH_PAGE } from "../../routes/paths";
import Image from "next/image";
import NextLink from "next/link";
// ----------------------------------------------------------------------

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  // height: HEADER.MOBILE_HEIGHT,
  height: "90",
  // transition: theme.transitions.create(["height", "background-color"], {
  //   easing: theme.transitions.easing.easeInOut,
  //   duration: theme.transitions.duration.shorter,
  // }),
  [theme.breakpoints.up("md")]: {
    height: "94px"
    // height: HEADER.MAIN_DESKTOP_HEIGHT,
  }
}));

const ToolbarShadowStyle = styled("div")(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: "auto",
  borderRadius: "50%",
  position: "absolute",
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8
}));

// ----------------------------------------------------------------------

export default function MainHeader() {
  const isOffset = useOffSetTop(HEADER.MAIN_DESKTOP_HEIGHT);

  const theme = useTheme();

  const { pathname } = useRouter();

  const isDesktop = useResponsive("up", "md");

  const isHome = pathname === "/";

  return (
    // <AppBar sx={{ boxShadow: 0, bgcolor: "transparent" }}>
    <AppBar sx={{ bgcolor: "#421420", boxShadow: "none" }}>
      <ToolbarStyle
        disableGutters
        // sx={{
        //   ...(isOffset && {
        //     ...cssStyles(theme).bgBlur(),
        //     height: { md: HEADER.MAIN_DESKTOP_HEIGHT - 16 },
        //   }),
        // }}
      >
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 2
          }}
        >
          <Stack
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <NextLink href="/">
              <Image
                src="/assets/vertria-logo.png"
                alt="vertria Logo"
                width={80}
                height={40}
                priority
              />
            </NextLink>

            {/* <Divider sx={{ my: 2, color: 'yellow', width: 150 }} /> */}
            <Box sx={{ width: 900, height: '0.1px', bgcolor: "#FFDC58", my: 1 }} />
          </Stack>

          {/* <Box sx={{ flexGrow: 1 }} /> */}

          {/* {isDesktop && (
            <MenuDesktop
              isOffset={isOffset}
              isHome={isHome}
              navConfig={navConfig}
            />
          )} */}

          {/* <Button variant="contained" href={PATH_PAGE.contact} passhref="true">
            contact us
          </Button> */}

          {/* {!isDesktop && (
            <MenuMobile
              isOffset={isOffset}
              isHome={isHome}
              navConfig={navConfig}
            />
          )} */}
        </Container>
      </ToolbarStyle>

      {/* {isOffset && <ToolbarShadowStyle />} */}
    </AppBar>
  );
}
