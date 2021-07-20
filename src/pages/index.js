import * as React from "react"

import Layout from '../components/Layout';
import HeroImage from '../components/HeroImage';
import Timeline from '../components/Timeline';

import {css} from '@emotion/react';
// import styled from '@emotion/styled';


// const RoomsUl = styled.ul`
//     max-width: 1200px;
//     width: 95%;
//     margin: 4rem auto 0 auto;

//     @media (min-width: 768px){
//         display: grid;
//         grid-template-columns: repeat(3, 1fr);
//         column-gap: 3rem;
//     }
// `;


const IndexPage = () => {
  return (
    <Layout title="YEAH BABUSH">
      <HeroImage/>
      <Timeline/>

      <h2
          css = {css`
              text-align: center;
              margin-top: 5rem;
              font-size: 3rem;

          `}
      >Test</h2>

      {/* <RoomsUl>
          {rooms.map(room=>(
              <RoomPreview
                  key = {room.id}
                  room = {room}
              />
          ))}
      </RoomsUl> */}

  </Layout>
  )
}

export default IndexPage
