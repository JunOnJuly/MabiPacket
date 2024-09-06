import Nav from 'components/common/Nav'
import styled from 'styled-components';
import useStore from 'store.js';

function App() {
  const { colors } = useStore()

  return (
    <AppMainDiv
    backgroundColor = {colors.whiteOrange}>
      <Nav />
      hi
    </AppMainDiv>
  );
}

export default App;

const AppMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;

  background-color: ${(props) => props.backgroundColor};
`