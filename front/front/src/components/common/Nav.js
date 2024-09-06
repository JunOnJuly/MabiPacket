import styled from 'styled-components'
import useStore from "store.js"

function Nav() {
    const { colors } = useStore()
    
    return (
        <NavBackgroundDiv
        backgroundColor = {colors.mainOrange}>

        </NavBackgroundDiv>
    );
}

export default Nav;


const NavBackgroundDiv = styled.div`
    background-color: ${(props) => props.backgroundColor};
    margin: 0;
    padding: 0;
    height: 10vh;
    width: 100vw;
`