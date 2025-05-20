export default function ShoppingList() {
    return (
        <section>
            <h2>Shopping List</h2>
            <ListItem isPacked={true} item={Pop} />
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