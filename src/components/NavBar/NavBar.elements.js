import styled from "styled-components";


export const NavbarContainer = styled.div`
    width: 100%;
    height: 9vh;
    position: sticky;
    top: 0;
    z-index: 99;
    background-color: rgb(0,0,0,0.600);
`;


export const NavbarWrapper = styled.div`
    margin: auto;
    width: 100%;
    max-width: 1300px;
    height: 100%;
    align-items: center;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 968px){
        justify-content: flex-end;
        margin-right: 1rem;
    }
`;

export const IconLogo = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    font-family: "Oswald", sans-serif;
    font-size: 2rem;
    color: #ebc88b;

    .link{
        text-decoration: none;
        color: white;
    }
    
    @media screen and (max-width: 968px){
        width: 100%;
        margin-left: 20px;
    }
`;



export const Menu = styled.ul`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40%;

    @media screen and (max-width: 968px){
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 70px;
        left: ${({ click }) => (click ? 0 : "-100%")};
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        transition: 0.5s all ease-in;
        background-color: rgb(40, 40, 40);
    }
    `;

export const MenuItem = styled.li`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
    width: 100%;
    padding: 0.5rem 1.5rem;
    font-size: 1.2rem;
    font-family: "Oswald";
    font-weight: 400;
    cursor: pointer;

    
    @media screen and (max-width: 968px){
        width: 100%;
        height: 100px;
        position: relative;
        bottom: 100px;
        margin: 1rem 0;
    }
    `;

export const MenuItemLink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ebc08b;
    font-size: 1.2rem;
    width: 100%;
    height: 100%;
    display: flex;

    svg{
        display: none;
    }

    .link{
        text-decoration: none;
        font-family: sans-serif;
        color: white;
    }

    @media screen and (max-width: 968px){ 
        width: 100%;
        height: 100%;
        font-size: 2.5rem;
        display: flex;
        justify-content: flex-start;
        svg{
            display: flex;
            margin-right: 1rem;
            text-align: center;
            color: white;
            text-shadow: 0 0 20px black;
        }
        div{
            width: auto;
            height: 100%;
            align-items: center;
        }
    }
`;

export const IconLogoMovile = styled.div`
    display: none;

    @media screen and (max-width: 968px){
        display: flex;
        color: #ebebeb;
        font-size: 2rem;
        padding-right: 15px;
    }
`;