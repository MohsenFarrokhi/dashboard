import '../styles/Contact.css'
const Contatc = (name, number) => {
    return (
        <div className="card">
            <p>Name : {name}</p>
            <p>Phone Number : {number}</p>
        </div>
    )
}
export default Contatc;