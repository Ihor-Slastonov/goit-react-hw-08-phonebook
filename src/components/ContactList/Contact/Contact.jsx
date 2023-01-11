import { Item } from "./Contact.styled"

export const Contact =({id, phone, name,})=>{
    return(<>
    <Item>
        <p>{name}: <span>{phone}</span></p>
        <button>delete</button>
    </Item>
    </>)
}