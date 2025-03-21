// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container } from '@mui/material';
// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';
// sections
import { ContactHero, ContactForm, ContactMap } from '../sections/contact';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    // paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

Contact.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Contact() {
  return (
    <Page title="Contact us">
      <RootStyle>
        <ContactHero />

        <Container sx={{ my: 10 }}>
          <Grid
            container
            spacing={2}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center' // Center the grid items horizontally
            }}
          >
            <Grid item xs={12} md={8}>
              <ContactForm />
            </Grid>
          </Grid>
        </Container>
      </RootStyle>
    </Page>
  );
}
