import React from 'react';
import { Button, Carousel } from 'rsuite';
import { Marslab } from './Banners/marslab/Marslab';

import atomicMintImg from './atomic-mint-bg.png';

export const Home = (props) => {
  return (
    <>
      <Carousel autoplay shape='bar' style={{height: 500, borderRadius: 15}} >
        <Marslab />
      </Carousel>
      <br />

      <div style={{backgroundImage: `url(${atomicMintImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', padding: '1rem', borderRadius: 15}}>
        <Button appearance='ghost' color='red' size='lg' href='http://atomic-mint.marslab.top'>
          AtomicMint
        </Button>
        <p style={{color: 'white', marginTop: '0.5rem'}}>Mint atomic asset with code-free</p>
      </div>
      <br />

    </>
  ); 
}
