import {useState} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import BG from '../images/bg.jpg'
function UploadDashboard()
{

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
      const file = event.target.files[0];
      setSelectedImage(file);
    };
   

    return(

            <div className="w-full h-screen main-body bg-slate-100">
                    <div className="w-full h-screen main-body-container">
                    
                        <div className="bg-white mx-auto   px-8 pt-6 pb-8 mb-4 w-[600px] flex flex-col justify-center overflow-clip relative top-1/2 -translate-y-1/2 shadow-md shadow-slate-300 rounded-md">

                            <h3 className="z-10 mb-6 text-xl text-left">Hello! <span className="font-bold">Tom</span> <br/> Welcome to Dashboard</h3>
                                

                            <div className="flex flex-row justify-between w-full p-3 space-x-3 dash-body" >


                                        <div className="flex w-full p-2 text-center upload-image felx-col">

                                            <div className="flex flex-row items-center justify-center w-full space-x-5 rounded-md upload">
                                                
                                                <div className="w-2/3 image-holder">
                                                                <img src={BG} alt="" srcset="" />
                                                </div>
                                                <div className="flex flex-col w-1/3 space-y-3 option-panel ">
                                                        <button className="p-2 rounded-full bg-sky-200 hover:bg-sky-400">Upload an Image</button>
                                                        <button className="p-2 rounded-full bg-sky-200 hover:bg-sky-400">Edit</button>
                                                        <button className="p-2 rounded-full bg-sky-200 hover:bg-sky-400">Remove</button>
                                                        <button className="p-2 rounded-full bg-sky-200 hover:bg-sky-400">Save for Inquiry</button>
                                                </div>
                                            </div>

                                            
                                        </div>

                                        


                            </div>

                                



                               

                                
                        </div>
                    </div>
            </div>

    );
}


export default UploadDashboard;