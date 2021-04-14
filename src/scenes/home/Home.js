import React from 'react';
import ListProducts from '../../component/Products/ListProducts'
import { Wrapper } from '../../component/styled/style';


const Home = () => {
  return (
    <Wrapper>
      <ListProducts/>
    </Wrapper>
  );
}

export default Home;