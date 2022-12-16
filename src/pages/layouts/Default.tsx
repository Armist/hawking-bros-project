import {Outlet} from "react-router-dom";
import {Header} from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";
import {Container} from "../../components/Container/Container";
import styled from "styled-components";

const StyledDefault = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
  
  main {
    flex: 1;
    width: 100%;
  }
`

export const Default = () => {
    return (
        <StyledDefault>
            <Header/>
            <main>
                <Container>
                    <Outlet/>
                </Container>
            </main>
          <Footer />
        </StyledDefault>
    )
}
