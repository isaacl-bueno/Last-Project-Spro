import React from "react";
import Header from "../Header";

import * as S from "./styles";

function Layout({ children }) {
  return (
    <>
      <Header title="Pagina principal" />

      <S.LayoutContainer>{children}</S.LayoutContainer>
    </>
  );
}

export default Layout;
