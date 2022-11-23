import {NavLink, Outlet} from "react-router-dom";
import {headerData} from "../../data/HeaderData";
import {Header} from "../../components/Header/Header";
import {Container} from "../../components/Container/Container";

export const Default = () => {
    return (
        <>
            <Header/>
            <main>
                <Container>
                    <Outlet/>
                </Container>
            </main>
        </>
    )
}