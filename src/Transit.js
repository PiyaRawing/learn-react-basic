import Item from './Item'
import './Tramsit.css'

const Transit = (props) => {
    const { items } = props
    return (
        <div>
            <ul className='itemlist'>
                {items.map((element) => {
                    return <Item {...element} key={element.id} />
                })}
            </ul>
        </div>
    );
}

export default Transit