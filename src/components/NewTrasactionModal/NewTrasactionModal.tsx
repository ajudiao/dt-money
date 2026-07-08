import { ArrowCircleDown, ArrowCircleUpIcon, X } from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./styles";


export function NewTrasactionModal() {



    return (
        <Dialog.Portal>
            <Overlay />

            <Content>
                <Dialog.Title>Nova Trasação</Dialog.Title>
                 <CloseButton>
                    <X size={24} />
                 </CloseButton>

                <form action="">
                        <input type="text" placeholder="Descrição" required />
                        <input type="number" placeholder="Preço" required />
                        <input type="text" placeholder="Categoria" required />

                        <TransactionType>
                            <TransactionTypeButton variant="income" value="income">
                                <ArrowCircleUpIcon size={24} /> Entrada
                            </TransactionTypeButton>
                            <TransactionTypeButton variant="outcome" value="outcome">
                                <ArrowCircleDown size={24} />
                                Saída
                            </TransactionTypeButton>
                        </TransactionType>
                        <button type="submit">
                            Cadastrar
                        </button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}