export default function TodoList(props) {
    const listItems = props.list.map(it => {<li>it.text</li>});
    return (
        <list>
            listItems
        </list>
    )
}