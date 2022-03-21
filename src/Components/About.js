import React from 'react'
import Featurebanner from "../Container/Featurecomponet/Featurebanner"
import MultipleItems from "../Container/Featurecomponet/Sliders"
// import SimpleSlider from "../Container/Featurecomponet/Sliders"
// import FeatureD from "../Container/Featurecomponet/FeatureDetail/FDetail"
import Carroussel from "../Container/Featurecomponet/Slider3D"
import Card from "../Container/Featurecomponet/Card3dSlider"


export default function About() {

    // let cards = [
    //     {
    //       key: 1,
    //       content: "fghghgjgjh"
    //     },
    //     {
    //       key: 2,
    //       content: "fghghgjgjh"
    //     },
    //     {
    //       key: 3,
    //       content: "fghghgjgjh"
    //     },
    //     {
    //       key: 4,
    //       content: "fghghgjgjh"
    //     },
    //     {
    //       key: 5,
    //       content: "fghghgjgjh"
    //     },
    //     {
    //       key: 6,
    //       content: "fghghgjgjh"
    //     },
    //     {
    //       key: 7,
    //       content: "fghghgjgjh"
    //     }
    //   ];


    return (
        <div>
            <Featurebanner/>

            <MultipleItems/>
            
            {/* <FeatureD/> */}
            
           

            {/* <Carroussel
            cards={Card}
            height="500px"
            width="80%"
            margin="0 auto"
            offset={2}
            showArrows={false}
      /> */}
            
        </div>
    );
}
