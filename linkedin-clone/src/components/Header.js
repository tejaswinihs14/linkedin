import styled from 'styled-components';


const Header = (props) => {
    return (
        <Container>
            <Content>
                <Logo>
                    <a href="/home">
                        <img src="/home-logo.svg"/>  
                    </a>
                </Logo>
                <Search>
                    <div>
                        <input type="text" placeholder="Search"/>
                    </div>
                </Search>
                <SearchIcon>
                    <img src="/search-icon.svg" alt="" />
                </SearchIcon>
                <Nav>
                    <NavListWrap>
                        <NavList className="active">
                            <a>
                                <img src="/nav-home.svg" />
                                <span>Home</span>
                            </a>
                        </NavList>

                        <NavList>
                            <a>
                                <img src="/nav-network.svg" />
                                <span>My Network</span>
                            </a>
                        </NavList>

                        <NavList>
                            <a>
                                <img src="/nav-jobs.svg" />
                                <span>Jobs</span>
                            </a>
                        </NavList>

                        <NavList>
                            <a>
                                <img src="/nav-messaging.svg" />
                                <span>Message</span>
                            </a>
                        </NavList>

                        <NavList>
                            <a>
                                <img src="/nav-notifications.svg" />
                                <span>Notification</span>
                            </a>
                        </NavList>

                        <User>
                            <a>
                                <img src="user.svg" />
                                <span>Me</span>
                                <img src="down-icon.svg"/>
                            </a>
                            <SignOut>
                                <a>
                                    Sign Out
                                </a>
                            </SignOut>
                        </User>

                        <Work>
                            <a>
                                <img src="nav-work.svg"/>
                                <span>Work
                                    <img src="down-icon.svg"/>
                                </span>
                            </a>
                        </Work>

                    </NavListWrap>
                </Nav>
                </Content>
        </Container>
    )
}

const Container = styled.div`
background-color: white;
border-bottom: 1px solid rgba(0, 0, 0, 0.08);
left: 0;
padding: 0 24px;
position: fixed;
top: 0;
width: 100vw;
z-index: 100;
`;

const Content = styled.div`
display: flex;
align-items: center;
/* margin: 0 auto; */
min-height: 100%;
max-width: 1480px;`;

const Logo = styled.span`
margin-right: 8px;
font-size: 0px;
`;

const Search = styled.div`
opacity:1;
flex-grow:1;
position:relative;
& > div{
    max-width: 280px;
    input {
        border: none;
        box-shadow: none;
        background-color: #eef3f8;
        border-radius: 2px;
        color: rgba(0, 0, 0, 0.9);
        width: 218px;
        padding: 0 8px 0 40px;
        line-height: 1.75;
        font-weight: 400;
        font-size: 14px;
        height: 34px;
        border-color: #dce6f1;
        vertical-align: text-top;
    }
}`;

const SearchIcon = styled.div`
width: 40px;
position: absolute;
z-index: 1;
top: 20px;
left: 70px;
border-radius: 0 2px 2px 0;
margin: 0;
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 768px) {
    width: 40px;
    position: absolute;
    z-index: 1;
    top: 10px;
    left: 70px;
}
`;

const Nav = styled.div`
margin-left: auto;
display: block;

@media (max-width: 768px) {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
}
`;

const NavListWrap = styled.ul`
display: flex;
flex-wrap: nowrap;
list-style-type: none;

.active {
    span:after{
        content: "";
        transform: scaleX(1);
        border-bottom: 2px solid var(--white, #fff);
        bottom: 0;
        left: 0;
        position: absolute;
        transition: transform 0.2s ease-in-out;
        width: 100%;
        border-color: rgba(0,0,0,0.9);
    }
}`;

const NavList = styled.li`
display: flex;
align-items: center;
& > a{
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400px;
    justify-content: center;
    line-height: 1.5px;
    min-height: 55px;
    position: relative;
    min-width: 80px;
    text-decoration: none;
    
    span{
        color: rgba(0, 0, 0, 0.6);
        font-style: 14px;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 4px;
    }

    @media (max-width: 768px){
        min-width: 70px;
    } 
}

&:hover,
&:active {
        a {
            span {
                color: rgba(0, 0, 0,0.9)
            }
        }
    }
`;

const SignOut = styled.div`
position: absolute;
top: 45px;
background: white;
border-radius: 0 0 5px 5px;
width: 100px;
height: 40px;
font-size: 16px;
transition-duration: 167ms;
text-align: center;
display: none;`;

const User = styled(NavList)`
a > svg {
    width: 24px;
    border-radius: 50%;
}

a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
}

span{
    display: flex;
    align-items: center;
}

&:hover {
    ${SignOut} {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}`;

const Work = styled(NavList)`
/* display: flex;
flex-direction: row;
align-items: center;
justify-content: center; */
border-left: 1px solid rgba( 0, 0, 0, 0.08)`;



export default Header;
