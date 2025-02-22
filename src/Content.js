
import * as React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardsBlock from './CardsBlock';
import Box from '@mui/material/Box';
import BottomCard from './BottomCard';
import FooterCard from './components/FooterCard';



export default function Content() {
    return (
    
        <Box>
            <Grid container spacing={5} style={{ padding: "10%" }} className='centertext'   justifyContent="center" >
                <Grid item xs={12}>
                    <Typography variant="h3" component="div" sx={{
                        fontFamily:"Poppins",
                        fontSize:"62px",
                        fontWeight:"700",
                        lineHeight:"80.6px",
                        textAlign:"center",
                        color:"#13142F"
                    }}>
                        AI-powered speech-to-text service
                        that makes communication
                    </Typography>

                </Grid>
                <Grid item xs={12}>

                    <Typography  sx={{
                        fontFamily:"Poppins",
                        fontSize:"22px",
                        fontWeight:"500",
                        lineHeight:"35px",
                        textAlign:"center",
                        color:"#55566F"
                    }} >
                        As an added benefit, professionals can save time by using this service
                        instead of manually transcribing lengthy audio recordings
                    </Typography>

                </Grid>
                <Grid item md={12} >
                    <Grid container spacing={2} direction={{xs: "column", md: "row"}} justifyContent={{xs: "center", md: "center"}} alignItems={{xs: "center", md: "center"}}>

                        <Grid item  md={6} xs={12} display="flex" justifyContent="flex-end">
                        <Link to="/loginpage">
                            <Button variant="contained" style={{ background: '#13165C' }} >
                                Lets Get Started
                            </Button>
                            </Link>
                        </Grid>
                        <Grid item  md={6} xs={12} display="flex" justifyContent="flex-start">
                        
                            <Button variant="outlined">Documentation</Button>
                        
                        </Grid>
                    </Grid>

                </Grid>

            </Grid>
            <CardsBlock />
            <BottomCard />
            <FooterCard />

        </Box>
     
    )
}
