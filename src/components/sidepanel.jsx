import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faStarHalfStroke, faUser, faMapLocation, faChartLine, faHeadset, faChainBroken } from '@fortawesome/free-solid-svg-icons'

function Sidepanel1() {



    return (

        <div className="w-[300px] side-panel p-5 flex flex-col justify-center items-center  from-gray-900 to-gray-600 bg-gradient-to-r">

            <div className="justify-center w-full p-3 sidepalen-body h-2/3">
                <div className="flex flex-row items-center space-x-5 user-profile">
                    <label className="text-[28px]">
                        <FontAwesomeIcon icon={faUser} color="white" />
                    </label>
                    <span className="user-name text-[22px] text-white">User Name</span>
                </div>


                <div className="flex-col justify-center w-full mt-10 space-y-3 nav-body">
                    <ul className="space-y-5">
                        <Link to="/CreateDelivery"><li className="w-full p-2 rounded-md bg-slate-400 ">
                            <FontAwesomeIcon icon={faMapLocation} className="mr-5" />Delivery Routing</li></Link>

                        <Link to="/PerformanceTrack"><li className="w-full p-2 mt-5 rounded-md bg-slate-400">
                            <FontAwesomeIcon icon={faChartLine} className="mr-5" />Performance Track</li></Link>


                        <li className="w-full p-2 rounded-md bg-slate-400">
                            <FontAwesomeIcon icon={faHeadset} className="mr-5" />Customer Support</li>
                        <li className="w-full p-2 rounded-md bg-slate-400">
                            <FontAwesomeIcon icon={faChainBroken} className="mr-5" />Damage Ditection</li>
                    </ul>
                </div>


            </div>


        </div>


    );
}


export default Sidepanel1;