

const Getfound = ({data}) =>{

    return(
    <div className="Guides-box2">
        <img src={data.iconimg} className="G-searchimg" />
        <h6>{data.Titel}</h6>
    </div>
    );
}

export default Getfound;