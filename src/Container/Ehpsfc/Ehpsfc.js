
import Cardcomp from "./cardcomponent"
import Carddata from "./carddata"
const Ehpsfc = () => {

return(

    <>
    <div className=" container-fluid">
        <div className="row Erow-r ">
            <div className="col-12">
                <h2>Your Industry Experience will not be wasted</h2>
                <hr className="w-25 E-hr" />
                <h5>Shadimasters Brings Special Forts For You</h5>
            </div>
        </div>


        <div className="row Grow-r2 ">

         {Carddata.map((val, index) => {
             console.log(val.imagesrc);
              return (
                <div key={index} className="col-lg-4 col-md-4 col-sm-12 mb-3" >
                    
                    <Cardcomp
                      Cardata={val}
                    />
                </div>
              );
            })} 
           <div className="col-12 mt-4 Ebtn-box">
           <button type="button" className="Ebtn m-auto ">Many More?</button>
           </div>
        
        </div>
    </div>


</>

);

}

export default Ehpsfc;