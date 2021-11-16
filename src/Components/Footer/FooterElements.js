import styled from 'styled-components';
import {Link} from 'react-scroll';

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
    background-color: #170B64;
    color: "white";
`

export const MaxWidth = styled.div`
    display: flex;
    align-items: center;
    padding: 0 50px;
    
`

export const Menu = styled.ul`
    margin-bottom: 32px;
    flex-wrap: wrap;
    justify-content: center;
    
`
export const MenuItem = styled.li`
    padding: 0 15px;
    margin-bottom: 16px;
    list-style: none;
    display: inline-block;
`

export const MenuLink = styled(Link)`
    color: white;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    &:hover{
        transition: color 0.3s ease;
        color: #de354c;
    }

`

export const IconLink = styled.i`
    cursor: pointer;
    font-size: 30px;
    color: white;
    &:hover{
        transition: color 0.3s ease;
        color: #de354c;
    }

`

export const Info = styled.p`
    color: white;
`