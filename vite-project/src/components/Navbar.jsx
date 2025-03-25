import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
const Nav = styled.nav`
    background-color: #333;
    color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
`;
const ULWrapper = styled.ul`
    list-style: none;
    display: flex;
    gap: 1rem;
`;
const LI = styled.li`
    cursor: pointer;
`;
const LINK = styled(Link)`
    text-decoration: none;
    color: #fff;
`;

const Navbar = ({diraction = 'home'}) => {
    return (
        <Nav>
            <ULWrapper>
            {
                diraction === 'home' ? <>
                    <LI>
                        <LINK to="/">
                            Home
                        </LINK>
                    </LI>
                    <LI>
                        <LINK to="/users">
                            Users
                        </LINK>
                        </LI>
                        <LI>
                            <LINK to="/react-query">
                            React Query
                            </LINK>
                        </LI>
                </> : <>
                        <LI>
                            <LINK to="/users">
                            Users
                            </LINK>
                            </LI>
                            <LI>
                            <LINK to="/react-query">
                            React Query
                            </LINK>
                        </LI>
                        <LI>
                            <LINK to="/">
                                Home
                            </LINK>
                        </LI>
                    </>
               } 
                </ULWrapper>
        </Nav>
    )    
}

export default Navbar