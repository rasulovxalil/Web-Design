import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import airbnb from '../companies/airbnb.svg';
import amazon from '../companies/amazon.svg';
import fitbit from '../companies/fitbit.svg';
import google from '../companies/google.svg';
import netflix from '../companies/netflix.svg';
import paypal from '../companies/paypal.svg';



export default function FooterCard() {
  return (
    <Grid container spacing={2} direction='column' padding="10%"
     >
      <Grid item  
        justifyContent="center" padding="10%">
        <Typography  sx={{
          fontFamily: "Poppins",
          fontWeight:"500",
          fontSize:"18px",
          lineHeight:"28px",
          alignItems:"center",
          color:" #56A517"
        }}>
        MEDIASPEECH PARTNERS
        </Typography>

  
      </Grid>
      <Grid item 
        padding="10%" >
        <Grid container justifyContent={{xs:'center'}} >
          <Grid item md={4} xs={12}>
            <Grid container>
              <Grid item md={6}>
                <Box
                  component="img"
                  src={airbnb}
                />
              </Grid>
              <Grid item md={6}>
                <Box
                  component="img"


                  src={amazon}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={4} xs={12}>
            <Grid container>
              <Grid item xs={6}>
                <Box
                  component="img"


                  src={fitbit}
                />
              </Grid>
              <Grid item md={6}>
                <Box
                  component="img"


                  src={google}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={4} xs={12}>
            <Grid container>
              <Grid item xs={6}>
                <Box
                  component="img"


                  src={netflix}
                />
              </Grid>
              <Grid item md={6}>
                <Box
                  component="img"


                  src={paypal}
                />
              </Grid>
            </Grid>
          </Grid>


        </Grid>
      </Grid>
    </Grid>




  )
}
