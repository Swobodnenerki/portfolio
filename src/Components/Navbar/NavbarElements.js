import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Nav = styled.nav`
    position: fixed;
    top: 0;
    z-index: 500; //wyzej
    width: 100%;
    padding: 20px 0;
    background-color: ${({navbar}) => (navbar ? '#170B64' : 'transparent')};
`

export const MaxWidth = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    
`
export const Logo = styled(Link)`
    font-size: 1.875rem;
    font-weight: 600;
    border: none;
    background-color: transparent;
    outline: 0;
    cursor: pointer;
    font-family: 'Ubuntu';
    color: ${({navbar}) => (navbar ? 'white' : 'transparent')};
`

export const Menu = styled.ul`
    @media screen and (max-width: 950px){
        display: none;
    }
`
export const MenuItem = styled.li`
    list-style: none;
    display: inline-block;
`

export const MenuLink = styled(Link)`
    color: white;
    /* color: ${({navbar}) => (navbar ? 'white' : '#3D23DD')}; zmaiana koloru tekstu*/
    font-size: 1.125rem;
    font-weight: 500;
    margin-left: 25px;
    display: flex;
    border: none;
    background-color: transparent;
    outline: 0;
    cursor: pointer;
    font-family: 'Ubuntu';
    transition: color 0.3s ease;
    &.active{
        border-bottom: 3px solid #0bceaf;
        border-bottom: ${({navbar}) => (navbar ? '3px solid #ffffff' : '3px solid #3D23DD')};
    }
    &:hover{
        transition: color 0.3s ease;
        color: #0bceaf;
    }

`

export const MenuButton = styled.button`
    display: none;
    @media screen and (max-width: 950px){
      color: white;
      display: block;
      border: none;
      font-size: 1.8rem;
      background-color: transparent;
      outline: 0;
      cursor: pointer;
      transition: color 0.3s ease;
    }
`



