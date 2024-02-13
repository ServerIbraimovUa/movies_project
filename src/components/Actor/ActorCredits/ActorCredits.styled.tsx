import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../../../css/deviceSize';

export const LinkCredit = styled(Link)`
    font-family: var(--second-font-semi-bold);
    font-weight: var(--bold-font-weight);
    font-size: 16px;  
    line-height: 125%;
    letter-spacing: 0.03em;
    text-decoration-color: var( --text-clr-black);
    text-decoration: underline;
`
export const ListGroupCredit=styled(ListGroup)`
    padding: 20px 16px;
    margin-bottom: 40px;
   
`
export const ListGroupItemCredit = styled(ListGroup.Item)` 
    margin-bottom: 8px;
    padding: 10px;
    border: none;
    background-color: transparent;
  
`
export const Heading=styled.h2`
    margin-bottom : 16px;
    
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

