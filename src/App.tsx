import {RouterProvider} from "react-router-dom";
import {router} from "./router";
import {GlobalStyle} from "./styles/GlobalStyle";
import {ThemeProvider} from "styled-components";
import {theme} from "./styles/theme";

export const App = () => {
    return (
        <>
            <GlobalStyle/>
            <ThemeProvider theme={theme}>
                <RouterProvider router={router}/>
            </ThemeProvider>
        </>
    )
}
