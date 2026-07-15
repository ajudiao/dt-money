import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "../../components/Transactions/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionTable } from "./styled";

interface Trasaction {
    id: number,
    description: string,
    type: 'income' | 'outcome',
    price: number,
    category: string,
    created_at: string
}

export function Transactions() {
    const [trasactions, setTransactions] = useState<Trasaction[]>([])
    async function loadTransaction() {
        const response = await fetch('http://localhost:3333/transactions')

        const data = await response.json()
        setTransactions(data)
    }

    useEffect(() => {
        loadTransaction()
    }, [])

    return (
        <div>
            <Header />
            <Summary />
            <TransactionsContainer>
                <SearchForm />
                <TransactionTable>
                    <tbody>
                        {trasactions.map(transation => {
                            return (
                                <tr key={transation.id}>
                                    <td width="50%">{transation.description}</td>
                                    <td>
                                        <PriceHighlight variant={transation.type}>
                                            {transation.price}
                                        </PriceHighlight>
                                    </td>
                                    <td>{transation.category}</td>
                                    <td>{transation.created_at}</td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </TransactionTable>
            </TransactionsContainer>
        </div>
    );
}