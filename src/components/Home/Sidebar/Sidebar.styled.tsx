import styled from 'styled-components';
import { device } from '../../../css/deviceSize';

export const SidebarContainer=styled.div`
   
    @media screen and (max-width:1024px){
        display: none;
    }
    @media ${device.tablet}{
        display: flex;
        flex-direction: column;
        gap: 24px;

        width: 304px;
        padding: 32px 16px;
        border-radius: 24px;
        background-color: var(--light-violet-clr);           
   }
   @media ${device.desktop}{
        width:372px;
        padding: 36px;
   }
`
export const GenresWrapper=styled.div`
    display: flex;
    flex-direction: column;    
   
`
export const GenresTilte=styled.h3`
    margin-bottom: 20px;

    font-family: var(--second-font-regular);
    font-weight: var( --semi-bold-font-weight);
    font-size: 24px;
    line-height: 150%;
`
export const YearWrapper=styled.div`
    display: flex;
    flex-direction: column;
`
export const YearsTitle=styled.h3`
    margin-bottom: 20px;

    font-family: var(--second-font-regular);
    font-weight: var( --semi-bold-font-weight);
    font-size: 24px;
    line-height: 150%;
`
export const ButtonReset=styled.button`
  display: flex;
  justify-content: center;

  width: 100px;
  height: 35px;
  padding-top: 5px;
  padding-bottom: 5px;  
  border:1px solid var(--dark-violet-clr);
  border-radius:12px;

  font-size:20px;
  color: var(--dark-violet-clr);
`
export const TitleWrapper=styled.div`
    display: flex;
    gap:50px;
`