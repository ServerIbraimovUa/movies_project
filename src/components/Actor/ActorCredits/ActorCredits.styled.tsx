import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkCredit = styled(Link)`
    text-decoration-color: #19191B;  
`
export const ListGroupCredit=styled(ListGroup)`
    padding: 20px 16px;
   
`
export const ListGroupItemCredit = styled(ListGroup.Item)`
    font-size: 16px;
    font-weight: 700;
    line-height: 125%;
    letter-spacing: 0.03em;
    margin-bottom: 8px;
    padding: 10px;
    border: none;
  
`
export const Heading=styled.h2`
    font-size: 32px;
    font-weight: 700;
    line-height: 125%;
    margin-bottom : 16px;

    @media screen and (min-width : 1024px){
        margin-bottom: 20px;
    }

    @media screen and (min-width : 1440px){
        margin-bottom: 24px;
    }
`

