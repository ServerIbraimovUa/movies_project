import styled from 'styled-components';

export const SlickContainer = styled.div`  
 margin-bottom: 24px;


 @media screen and (min-width:1024px){
   margin-bottom: 40px;
 }
 @media screen and (min-width:1440px){
   margin-bottom: 60px;
 }
`;

export const SlickImg = styled.img`
   background-color:#6D0FE4;
   width: 84px;  
   border-radius: 16px;

   @media screen and (min-width:1440px){
      width: 106px;
   }
`
export const Heading = styled.h2`   
   font-size: 32px;
   font-weight: 700;
   line-height: 125%;
   margin-bottom: 16px;

   @media screen and (min-width:1024px){
      margin-bottom: 20px;
   }
   @media screen and (min-width:1440px){
      margin-bottom: 24px;
   }
`

