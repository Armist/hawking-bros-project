import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 20px;
`

type ContainerProps = {
    children: JSX.Element | JSX.Element[]
}

export const Container: React.FC<ContainerProps> = ({children}) => {
    return <StyledContainer>{children}</StyledContainer>
}
