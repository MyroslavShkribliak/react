function SimsonComponents(props) {
    console.log(props)
    const {name,img,info} = props;
    let classNameItem = 'card'
    return(
        <div className={classNameItem}>
            <h2 className={'name'}>{name}</h2>
            <img src={img} alt={'msk'}/>
            <h1 className={'info'}>{info}</h1>
        </div>
    );
}


export default SimsonComponents;
