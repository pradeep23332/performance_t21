import {useState} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import Sidepanel1 from "./sidepanel1";
import Gmap from "../../components/Gmap";


function RoutePlanning()
{




    const handleSubmit = (event) => {
        event.preventDefault();
        
      };


   

    return(

            <div className="w-full h-screen main-body bg-slate-100">
                    <div className="flex flex-row w-full h-screen main-body-container">
                        <Sidepanel1/>
                        <div className="w-5/6 p-5 side-panel bg-slate-100">
                          <div className="flex flex-col items-center justify-center h-full p-5 common-body">

                            <div className="form-body w-[90%] flex flex-row p-5 mx-auto items-center justify-center bg-white rounded-lg shadow-md shadow-slate-300">
                                
                             <div className="map w-[60%] p-2 h-full">
                                <span>G-MAP will appear here</span>
                             </div>

                             <div className="order-details flex flex-col space-y-[20px]">
                                <span>Order Id : #TJH097</span>
                                <span>Pick Up</span>
                                <span>Two more Steps</span>
                                <span>Delivery</span>
                             </div>



                            </div>


                          </div>
                        </div>
                        
                    </div>
            </div>

    );
}


export default RoutePlanning;