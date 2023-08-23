import {useState} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import Sidepanel1 from "./sidepanel1";



function Orders()
{

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
      const file = event.target.files[0];
      setSelectedImage(file);
    };
   

    return(

            <div className="w-full h-screen main-body bg-slate-100">
                    <div className="flex flex-row w-full h-screen main-body-container">
                        <Sidepanel1/>
                        <div className="w-5/6 p-5 side-panel bg-slate-100">
                          <div className="flex flex-col h-full p-5 common-body">

                            <div className="table-container w-[90%] flex flex-row h-full  mx-auto justify-between">
                                
                               
                                <div className="w-full table-body">
                                        <table className="w-full text-center">
                                            <th className="p-2 font-medium text-white bg-slate-500">Destination</th>
                                            <th className="p-2 font-medium text-white bg-slate-500">Order ID</th>
                                            <th className="p-2 font-medium text-white bg-slate-500">Vehicle</th>
                                            <th className="p-2 font-medium text-white bg-slate-500">Status</th>
                                            <th className="p-2 font-medium text-white bg-slate-500">Departure Date</th>
                                            <th className="p-2 font-medium text-white bg-slate-500">Estimated Date</th>
                                        

                                            <tbody className="bg-white">
                                                <tr className="leading-[25px] mt-[20px] border-b ">
                                                    <td className="p-2 Destination" >
                                                        Colombo 10
                                                    </td>
                                                    <td className="p-2 Order-ID" >
                                                        #TH097J
                                                    </td>
                                                    <td className="p-2 Vehicle" >
                                                        Bike
                                                    </td>
                                                    <td className="p-2 text-red-600 Status" >
                                                        Delivered
                                                    </td>
                                                    <td className="p-2 Departure-Date" >
                                                        20/03/2023
                                                    </td>
                                                    <td className="p-2 Estimated-Date" >
                                                        10/05/2023
                                                    </td>
                                                </tr>

                                               
                                                
                                            </tbody>



                                        </table>
                                </div>

                                


                            </div>


                          </div>
                        </div>
                        
                    </div>
            </div>

    );
}


export default Orders;