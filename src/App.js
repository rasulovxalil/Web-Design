import * as React from 'react';
import Header from './Header'
import './App.css';
import Content from './Content';
import Footer from './Footer';
import { Container } from '@mui/material';



function App() {


  return (
    <div className="centertext">
    <Header/>
    <Container  maxWidth='lg'>
      
      <Content/>
      
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
