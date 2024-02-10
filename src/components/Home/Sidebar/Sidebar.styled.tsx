import styled from 'styled-components';

export const SidebarContainer=styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (max-width:1024px){
      display: none;
   }
`