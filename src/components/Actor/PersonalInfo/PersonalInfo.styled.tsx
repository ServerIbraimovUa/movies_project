import styled from 'styled-components';
import { device } from '../../../css/deviceSize';

export const Heading = styled.h1`
    margin-bottom: 24px;

    text-align: center;
    font-weight: var(--bold-font-weight);
    font-size: 40px;    

    @media screen and (min-width: 768px){
      position: absolute;
      width: 1px;
      height: 1px;
      margin: -1px;
      border: 0;
      padding: 0;
      white-space: nowrap;
      clip-path: inset(100%);
      clip: rect(0 0 0 0);
      overflow: hidden;
    }
`

export const CardImg = styled.img`
  float: left;
  width: 189px;
  margin-right: 24px;
  margin-bottom: 24px;
  border-radius : 16px;
  
  @media ${device.tablet} {
    float: none;
    width: 144px;
    margin-right: 20px;
    margin-bottom: 40px;
  }

  @media ${device.desktop}{
    float:none;
    width: 231px;    
    margin-right: 24px;
    margin-bottom: 40px;
  }   
  
`
export const CardSubtitle = styled.h3`
    margin-bottom : 12px;
    font-size: 24px;
    font-weight: var(--bold-font-weight);

    @media ${device.tablet}{
      margin-bottom : 24px;
    }
`

export const CardText = styled.p` 
  margin-bottom : 16px;
  
    &:last-child{
      margin-bottom: 24px;
    }

    @media ${device.tablet}{
      margin-bottom : 40px;      
    }
`

export const Info=styled.div`
 width: 398px;
 margin-bottom: 24px;

 @media ${device.tablet}{
      width: 250px;
    }

@media ${device.desktop}{
      width: 350px;
    }
`