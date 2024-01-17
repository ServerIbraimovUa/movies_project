import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkCredit = styled(Link)`
text-decoration-color: #19191B;  
`

export const ListGroupItemCredit = styled(ListGroup.Item)`
    border: none;
  
`
export const Heading=styled.h3`
    margin-bottom : 16px;

    @media screen and (min-width : 1024px){
        margin-bottom: 20px;
    }

    @media screen and (min-width : 1440px){
        margin-bottom: 24px;
    }
`

