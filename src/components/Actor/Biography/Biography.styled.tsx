import styled from 'styled-components';



export const Button = styled.button`
    display: flex;
    margin-left: auto;
    font-size: large;
    text-decoration: underline;
    background-color: transparent;
    color:#9040F6;
    border: none;
   padding-top: 10px;
   padding-bottom: 10px;

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
        font-size: 40px;
        font-weight: 700;
        line-height: 150%;
        margin-bottom: 60px;        
    }

    @media screen and (min-width:1440px){
        margin-bottom: 100px;        
    }
`

export const Heading = styled.h2`
font-size: 32px;
font-weight: 700;
line-height: 125%;
margin-bottom: 16px;

    @media screen and (min-width: 1024px){
        margin-bottom: 20px;
    }

    @media screen and (min-width:1440px){
        margin-bottom: 24px;
    }       
`

export const BiographyText = styled.p`
    margin-bottom: 24px;
    padding-top: 20px;
    padding-left: 40px;
    padding-right: 40px;

    font-size: 20px;
    font-weight: 400;
    line-height: 120%;

    &:last-child{
        margin-bottom: 0px;
    }

    @media screen and (min-width:1024px){
        margin-bottom: 40px;
    }

    @media screen and (min-width:1440px){
        margin-bottom: 60px;
    }
    
`
