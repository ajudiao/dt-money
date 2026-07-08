import { Header } from "../../components/Header/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "../../components/Transactions/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionTable } from "./styled";



export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />
            <TransactionsContainer>
                <SearchForm />
                <TransactionTable>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td>
                                <PriceHighlight variant="income">
                                    230.OOO Kzs
                                </PriceHighlight>
                            </td>
                            <td>Venda</td>
                            <td>13/04/2025</td>
                        </tr>
                        <tr>
                            <td width="50%">Humburguer</td>
                            <td>
                                <PriceHighlight variant="outcome">
                                    -2800 Kzs
                                </PriceHighlight>
                            </td>
                            <td>Venda</td>
                            <td>13/04/2025</td>
                        </tr>
                        <tr>
                            <td width="50%">Venda de Software</td>
                            <td>
                                <PriceHighlight variant="income">
                                    230.000 Kzs
                                </PriceHighlight>
                            </td>
                            <td>Venda</td>
                            <td>13/04/2025</td>
                        </tr>
                    </tbody>
                </TransactionTable>
            </TransactionsContainer>
        </div>
    );
}