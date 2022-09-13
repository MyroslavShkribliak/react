export default function Simson(props) {
    const{
        item:{name,surname,age,info,photo}
    }= props
    return(
        <div>
            <h2>Name-{name} Surname-{surname} age-{age}</h2>
            <img src={photo} alt=""/>
            <h2>{info}</h2>
        </div>
    )
}