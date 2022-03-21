


import vendoricon from "../Assests/Images/vendoricon.svg";
import webicon from "../Assests/Images/webicon.svg";
import Enquiry from "../Assests/Images/Enquiry.svg";
import remove from "../Assests/Images/remove.svg";
import fcc from "../Assests/Images/fcc.svg";
import statistic from "../Assests/Images/statistic.svg";


const Sliderdata = [

    {
        id=(1),
        iconimg: vendoricon,
        Titel: 'Vandor Branding',
    },
    {
        id=(2),
        iconimg: webicon,
        Titel: "Exclusive Personalize Website",
    },
    {
        id=(3),
        iconimg: Enquiry,
        Titel: "Enquiry Management Tool",
    },
    {
        id=(4),
        iconimg: remove,
        Titel: "Reviews",
    },
    {
        id=(5),
        iconimg: fcc,
        Titel: "Free Customer Contacts",
    },
    {
        id=(6),
        iconimg: statistic,
        Titel: "Analyties",
    },

]
export default Sliderdata;


{/* {Sliderdata.map((val, index) => {
              return (
                <div key={index} className="">
                  <div className="">
                    <SliderComponent
                      Sliderdata={val}
                    />
                  </div>
                </div>
              );
            })} */}