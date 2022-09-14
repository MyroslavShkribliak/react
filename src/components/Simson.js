// 1. Описати всю сім'ю сімпсонів (5 персонажів)
export default function Simson(props) {
    const{
        item:{name,surname,age,info,photo}
    }= props;
    return(
        <div>
            <h2>Name-{name},Surname-{surname},age-{age}</h2>
            <img src={photo} alt={photo}/>
            <h2>{info}</h2>
        </div>
    );
}
