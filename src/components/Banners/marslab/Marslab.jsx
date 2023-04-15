import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import poster from './Poster.jpeg';

export const Marslab = (props) => {
  return (
    <>
      <img src={poster} style={{height: '500'}} />
    </>
  ); 
}
