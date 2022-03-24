

const Cardcomp = ({ Cardata }) => {
  return (
    <div className="card" >
      <div className="Eimg-box">
        <img src={Cardata.imagesrc}  />
      </div>
      <div className="card-body">
        <h5 className="card-title"> {Cardata.Titel} </h5>
        <p className="card-text">
          {Cardata.contain}
        </p>
      </div>
    </div>
  );
};
export default Cardcomp;
