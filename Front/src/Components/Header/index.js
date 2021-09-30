import React from "react";
import * as S from "./styles"
import { Link, useHistory } from "react-router-dom";

function Header() {
    const {location} = useHistory();

    return(
<S.HeaderContainer>
      <S.NavBar>
        <ul>
          <S.HeaderLink isRoute={location.pathname === "/"}>
            <Link to="/">Lista de produtos</Link>
          </S.HeaderLink>
          <S.HeaderLink isRoute={location.pathname === "/products/create"}>
            <Link to="/products/create">Coléta de Produtos</Link>
          </S.HeaderLink>
        </ul>
      </S.NavBar>
    </S.HeaderContainer>
 );
}

export default Header;