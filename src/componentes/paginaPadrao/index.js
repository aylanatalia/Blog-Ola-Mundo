import Banner from "componentes/banner";
import { Outlet } from "react-router-dom";

export default function PaginaPadrao(){
    return(
        //a tag Outlet serve para renderisar o conteúdo da página.
        <main>
            <Banner/>
            <Outlet />  
        </main>
    )
}