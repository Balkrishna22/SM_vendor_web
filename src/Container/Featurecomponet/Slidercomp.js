





const SliderComponent = ({SliderC}) =>{

    return(
    <div className="cardslide">
        <img src={SliderC.iconimg} className="m-auto cardslide-img" />
        <h6 className="cardtext">{SliderC.Titel}</h6>
    </div>
    );
}

export default SliderComponent;