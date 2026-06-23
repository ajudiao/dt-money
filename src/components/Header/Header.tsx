import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styled";
import logoIcon from "../../assets/logo.svg"


export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoIcon} alt="" />

        <NewTransactionButton>Nova Transacao</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
}