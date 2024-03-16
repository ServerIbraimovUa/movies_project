import styled from 'styled-components';
import { device } from '../../../css/deviceSize';

export const SlickContainer = styled.div`  
 margin-bottom: 24px;

 @media ${device.tablet}{
   margin-bottom: 40px;
 }
 
 @media ${device.desktop}{
   margin-bottom: 60px;
 }
`;

export const SlickImg = styled.img`
   width: 84px; 

   background-color:var(--violet-hover);
   border-radius: 16px;

   @media ${device.desktop}{
      width: 106px;
   }
`
export const Heading = styled.h2`   
color: ${(props) => props.theme.textTitle};

   margin-bottom: 16px;

   font-size: 32px;
   font-weight: var(--bold-font-weight);
   line-height: 125%;

   @media ${device.tablet}{
      margin-bottom: 20px;
   }
   
   @media ${device.desktop}{
      margin-bottom: 24px;
   }
`

