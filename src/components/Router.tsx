import {NavLink} from "react-router-dom";

export default function Router(){
return(

<div>

    <NavLink to ={"/HomePage"}> Homepage </NavLink>

    <NavLink to ={"/ColorPage"}> ColorPage </NavLink>

    <NavLink to ={"/ContentPage"}> ContentPage </NavLink>

    <NavLink to ={"/ButtonPage"}> ButtonPage </NavLink>
</div>
)
}