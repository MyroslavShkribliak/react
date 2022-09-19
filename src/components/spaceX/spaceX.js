export function SpaceX(props) {
    let {launch} = props;

    return(
        <div>
            <h2>Mission name - {launch.mission_name}</h2>
            <p>Launch year - {launch.launch_year}</p>
            <img src={launch.links.mission_patch_small} alt={launch.flight_number}/>
        </div>
    )
}