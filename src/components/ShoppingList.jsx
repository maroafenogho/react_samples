export default function ShoppingList() {
    return (
        <section>
            <h2>Shopping List</h2>
            <ul>

            </ul>
        </section>
    )

}

function ListItem({ item, isPacked }) {
    return (
        <li>
            {isPacked ? (<del>
                {item + ' ✅'}
            </del>) : ({ item })}
        </li>
    )
}