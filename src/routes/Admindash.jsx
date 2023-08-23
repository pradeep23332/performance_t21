import {useState} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import Sidepanel from "../components/sidepanel";
import MonthlyProgress from "../components/chart";


function Dashboard()
{

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
      const file = event.target.files[0];
      setSelectedImage(file);
    };
   

    return(

            <div className="main-body h-screen w-full bg-slate-100">
                    <div className="main-body-container h-screen w-full flex flex-row">
                        <Sidepanel/>
                        <div className="w-5/6 side-panel bg-slate-100 p-5">
                          <div className="common-body p-5 flex flex-col h-full">

                            <div className="indicators w-[80%] flex flex-row h-full  mx-auto justify-between">
                                
                                <div className="bg-gradient-to-r from-sky-400 to-blue-500 h-[180px] p-3 w-[45%] justify-center text-center rounded-lg flex flex-col shadow-md shadow-slate-400">
                                      <span className="font-semibold text-white text-[18px]">Available Packages</span>
                                      <div className="mt-3 flex flex-row justify-center items-center">
                                        <span className="text-white text-[22px] mr-3">
                                          <FontAwesomeIcon icon={faPlus} />
                                        </span>
                                        <span className="text-white text-[36px] font-bold">106</span>
                                      </div>
                                </div>


                                <div className="bg-gradient-to-r from-indigo-300 to-purple-400 h-[180px] p-3 w-[45%] justify-center text-center rounded-lg flex flex-col shadow-md shadow-slate-400">
                                      <span className="font-semibold text-white text-[18px]">Track Info</span>
                                      <div className="mt-3 flex flex-row justify-center items-center">
                                        <span className="text-white text-[22px] mr-3">
                                          <FontAwesomeIcon icon={faPlus} />
                                        </span>
                                        <span className="text-white text-[36px] font-bold">58</span>
                                      </div>
                                </div>



                            </div>


                            <div className="chart-indicators w-[80%] flex flex-row h-full  mx-auto justify-between">
                                
                                <div className="h-full p-3 w-full justify-center text-center rounded-lg flex flex-col">
                                      
                                      <div className="mt-3 flex flex-row justify-center items-center">
                                        <MonthlyProgress/>
                                      </div>
                                </div>
                            </div>



                          </div>
                        </div>
                        
                    </div>
            </div>

    );
}


export default Dashboard;