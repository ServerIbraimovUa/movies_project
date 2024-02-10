import styled from 'styled-components';
import { device } from '../../../css/deviceSize';

export const Button = styled.button`
    display: flex;
    margin-left: auto;
    padding-top: 10px;
    padding-bottom: 10px;
    border: none;

    font-size: large;
    text-decoration: underline;
    background-color: transparent;
    color:var(dark-violet-clr);

`
export const HeadingName = styled.h2`

     @media screen and (max-width:768px){
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

    @media screen and (min-width:768px){
        margin-bottom: 60px;     

        font-size: 40px;
        font-weight: var(--bold-font-weight);
        line-height: 150%;
    }

    @media screen and (min-width:1440px){
        margin-bottom: 100px;        
    }
`

export const Heading = styled.h2`
    font-size: 32px;
    font-weight: var(--bold-font-weight);
    line-height: 125%;
    margin-bottom: 16px;

    @media ${device.tablet}{
        margin-bottom: 20px;
    }

    @media ${device.desktop}{
        margin-bottom: 24px;
    }       
`

export const BiographyText = styled.p`
    margin-bottom: 24px;
    padding-top: 20px;
    padding-left: 16px;
    padding-right: 16px;

     &:last-child{
        margin-bottom: 0px;
    }

    @media ${device.tablet}{
        margin-bottom: 40px;
    }

    @media ${device.desktop}{
        margin-bottom: 60px;
    }
    
`
