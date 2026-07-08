import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { SearchContainer } from "./styled";




export function SearchForm() {
    return (
        <SearchContainer>
            <input type="text" placeholder="Buscar transações..." />

            <button type="submit">
                <MagnifyingGlassIcon size={20} />
                Buscar
            </button>
        </SearchContainer>
    )
}