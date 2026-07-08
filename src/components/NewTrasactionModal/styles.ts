import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";
import styled from "styled-components";



export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
    position: fixed;    
    min-width: 32rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${(props) => props.theme["gray-800"]};

    padding: 2.5rem 3rem;

    form {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        input {
            padding: 1rem;
            border-radius: 6px;
            border: 0;
            background: ${props => props.theme["gray-900"]};

            &::placeholder {
                color: ${(props) => props.theme["gray-300"]};
            }
        }

        button[type="submit"] {
            height: 58px;
            border: 0;
            background: ${props => props.theme["green-500"]};
            font-weight: bold;
            padding: 0 1.25rem;
            border-radius: 6px;
            margin-top: 1.5rem;
            cursor: pointer;

            &:hover {
                background-color: ${(props) => props.theme["green-700"]};
                transition:  background-color 0.3s;
            }
        }
    }
`


export const CloseButton = styled(Dialog.Close)`
    position: absolute;
    background-color: transparent;
    line-height: 0;
    border: 0;
    right: 1.5rem;
    top: 1.5rem;
    cursor: pointer;
    color: ${(props) => props.theme["gray-500"]};
`

export const TransactionType = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 0.5rem;
`

interface TransactionTypeProps {
    variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled.button<TransactionTypeProps>`
    background: ${props => props.theme["gray-700"]};
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border-radius: 6px;
    cursor: pointer;
    border: 0;
    cursor: ${props => props.theme["gray-300"]};

    svg {
        color: ${props => props.variant === 'income' ? props.theme["green-300"] : props.theme["red-300"]};
    }
`