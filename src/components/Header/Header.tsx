import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styled";
import * as Dialog from "@radix-ui/react-dialog";
import logoIcon from "../../assets/logo.svg"


export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoIcon} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transacao</NewTransactionButton>
          </Dialog.Trigger>
        </Dialog.Root>

        <Dialog.Portal>
          <Dialog.Overlay />
          <Dialog.Content>
            <Dialog.Title>
              Nova Transação
            </Dialog.Title>
            <Dialog.Close />
          </Dialog.Content>
        </Dialog.Portal>

      </HeaderContent>
    </HeaderContainer>
  );
}