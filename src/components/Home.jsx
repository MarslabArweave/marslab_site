import React from 'react';
import { Button, Carousel } from 'rsuite';
import { Marslab } from './Banners/marslab/Marslab';

import atomicMintImg from './atomic-mint-bg.png';
import atomicExplorerImg from './atomic-explorer-bg.png';
import tarketImg from './tarket-bg.png';

export const Home = (props) => {
  return (
    <>
      <Carousel autoplay shape='bar' style={{height: 500, borderRadius: 15}} >
        <Marslab />
      </Carousel>
      <br />

      <div style={{backgroundImage: `url(${atomicMintImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', padding: '1rem', borderRadius: 15}}>
        <Button appearance='ghost' color='red' size='lg' href='http://atomic-mint.marslab.top'>
          Atomic Mint
        </Button>
        <p style={{color: 'white', marginTop: '0.5rem'}}>Mint atomic asset with code-free</p>
      </div>
      <br />

      <div style={{backgroundImage: `url(${atomicExplorerImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', padding: '1rem', borderRadius: 15}}>
        <Button appearance='ghost' color='yellow' size='lg' href='http://atomic-explorer.marslab.top'>
          Atomic Explorer
        </Button>
        <p style={{color: 'white', marginTop: '0.5rem'}}>Atomic asset explorer - look up atomic asset infomation</p>
      </div>
      <br />

      <div style={{backgroundImage: `url(${tarketImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', padding: '1rem', borderRadius: 15}}>
        <Button appearance='ghost' color='green' size='lg' href='http://tar-faucet.marslab.top'>
          Tar Faucet
        </Button>
        <p style={{color: 'white', marginTop: '0.5rem'}}>Claim testnet $TAR token</p>
      </div>
      <br />

    </>
  ); 
}
