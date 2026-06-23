import { ArrowCircleDownIcon } from "@phosphor-icons/react/dist/ssr";
import { SummaryCard, SummaryContainer } from "./styled";
import { ArrowCircleUpIcon, CurrencyBtcIcon, CurrencyDollarIcon } from "@phosphor-icons/react";




export function Summary() {

    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleDownIcon size={32} color="#00b37a" />
                </header>

                <strong>17.400 Kzs</strong>
            </SummaryCard>
            <SummaryCard>
                <header>
                    <span>Saidas</span>
                    <ArrowCircleDownIcon size={32} color="#f75af8" />
                </header>

                <strong>17.400 Kzs</strong>
            </SummaryCard>
            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollarIcon size={32} color="#fff" />
                </header>

                <strong>17.400 Kzs</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}