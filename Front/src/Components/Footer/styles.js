import styled from "styled-components";
import { theme } from "../../styles/global";

export const FooterContainer = styled.header`
  width: 100%;
  height: 12rem;
  background-color: ${theme.primary.main};
  display: flex;
  padding: 2rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-left: 0;
  padding-right: 2,5rem;

  color: ${theme.primary.contrastText};
`;

export const FooterIconContainer = styled.div`
  margin-bottom: 1rem;
`;

export const CopyrightContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .second-span {
    margin: 0 1rem;
  }

  margin-bottom: 1rem;
`;

export const LawsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  span {
    display: flex;
    align-items: center;
    margin-right: 4rem;

    svg {
      margin-right: 0,25rem;
  
    }

    :last-of-type {
      margin-right: 0;
    }
  }
`;
