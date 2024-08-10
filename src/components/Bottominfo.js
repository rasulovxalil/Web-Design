import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


export default function Bottominfo({procent,header,text}) {
    return (
        <Grid container spacing={2} direction="column" alignItems="center"
        justifyContent="center"
        >
            <Grid item xs={3} >
                <Typography sx={{
                    fontFamily:"Poppins",
                    fontSize:"48px",
                    fontWeight:"600",
                    lineHeight:"72px",
                    textAlign:"center",
                    color:"#13165C"
                }}>
                    {procent}
                </Typography>
            </Grid>
            <Grid item xs={4} className='binfoheader' >
                <Typography  sx={{
                    fontFamily:"Poppins",
                    fontSize:"22px",
                    fontWeight:"500",
                    lineHeight:"33px",
                    textAlign:"center",
                    color:"#13142F"
                }} >
                    {header}
                </Typography>
            </Grid>
            <Grid item xs={5} sx={{
                fontFamily:"Poppins",
                fontSize:"18px",
                fontWeight:"400",
                lineHeight:"27px",
                textAlign:"center",
                color:"#55566F"
            }}
               >
                <Typography  >
                    {text}
                </Typography>
            </Grid>

        </Grid>
    )
}
