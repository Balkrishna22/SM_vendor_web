import { GiCheckMark } from "react-icons/gi";

const PackageCardComponent = ({abcd} ) =>{
    return(
        <>

                <div className="Pcard">
                    <div className="Pcard-heading">
                            <h4> {abcd.heading} </h4>
                            </div>
                            <hr className="P-hr2"/>
                            <div className="Pcard-body">

                            <p className="mt-3">
                            <GiCheckMark /> {abcd.contain1}
                            </p>
                            <hr className="hr" />

                            <p className="mt-3">
                            <GiCheckMark /> {abcd.contain2}
                            </p>
                            <hr className="hr" />

                            <p className="mt-3">
                            <GiCheckMark /> {abcd.contain3}
                            </p>
                            <hr className="hr" />

                            <p className="mt-3">
                            <GiCheckMark /> {abcd.contain4}
                            </p>
                            <hr className="hr" />

                            <p className="mt-3">
                            <GiCheckMark /> {abcd.contain5} 
                            </p>
                            <hr className="hr" />

                            <p className="mt-3">
                            <GiCheckMark /> {abcd.contain6}
                            </p>
                            <hr className="hr" />
                        
                            {/* <button type="button" className="">Learn More</button> */}
                            

                    </div>
                </div>

        </>
    );
}


export default PackageCardComponent;