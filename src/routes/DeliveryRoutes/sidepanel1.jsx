import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox, faUser, faBoxesPacking, faStreetView, faHeadset, faChainBroken } from '@fortawesome/free-solid-svg-icons'

function Sidepanel1() {



    return (

        <div className="w-[300px] side-panel p-5 flex flex-col justify-center items-center bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-gray-900 to-gray-600">

            <div className="justify-center w-full p-3 sidepalen-body h-2/3">
                <div className="flex flex-row items-center space-x-5 user-profile">
                    <label className="text-[28px]">
                        <FontAwesomeIcon icon={faUser} color="white" />
                    </label>
                    <span className="user-name text-[22px] text-white">User Name</span>
                </div>


                <div className="flex-col justify-center w-full mt-10 space-y-5 nav-body">
                    <ul className="space-y-5">
                        <Link to="/CreateDelivery"><li className="w-full p-2 mb-5 rounded-md bg-slate-400">
                            <FontAwesomeIcon icon={faBox} className="mr-5" />Create Delivery</li></Link>

                        <Link to="/Orders"><li className="w-full p-2 mb-5 rounded-md bg-slate-400">
                            <FontAwesomeIcon icon={faBoxesPacking} className="mr-5" />Orders</li></Link>

                        <Link to="/RoutePlanning"><li className="w-full p-2 mb-5 rounded-md bg-slate-400">
                            <FontAwesomeIcon icon={faStreetView} className="mr-5" />Route Planning</li></Link>

                    </ul>
                </div>


            </div>


        </div>


    );
}


export default Sidepanel1;