import styled from 'styled-components';
import { device } from '../../css/deviceSize';


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
   background-color: var(--violet-hover);
   width: 190px;   
   border-radius: 16px;
`
export const SlickImgMob = styled.img`
   background-color: var(--violet-hover);
   width: 84px;   
   border-radius: 16px;
`