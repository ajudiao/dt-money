import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styled";
import * as Dialog from "@radix-ui/react-dialog";
import logoIcon from "../../assets/logo.svg"
import { NewTrasactionModal } from "../NewTrasactionModal/NewTrasactionModal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoIcon} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transacao</NewTransactionButton>
          </Dialog.Trigger>

          <NewTrasactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}