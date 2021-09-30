import React from "react";
import {
  AccountBalance,
} from "@material-ui/icons";
import * as S from "./styles";

const lawList = [
  {
    title: "Política de Privacidade",
  },
  {
    title: "Termos de Uso",
  },

];

function Footer() {
  return (
    <S.FooterContainer>
      <S.FooterIconContainer>
        <AccountBalance />
      </S.FooterIconContainer>
      <S.CopyrightContainer>
        <span>Projeto produto</span>
        <span className="second-span">2021</span>
        <span>© Todos os direitos reservados.</span>
      </S.CopyrightContainer>
      <S.LawsContainer>
        {lawList.map((item) => (
          <span key={item.title}>
            {item.icon} {item.title}
          </span>
        ))}
      </S.LawsContainer>
    </S.FooterContainer>
  );
}

export default Footer;
