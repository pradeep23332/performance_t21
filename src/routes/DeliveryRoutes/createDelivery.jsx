import {useState} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import Sidepanel1 from "./sidepanel1";



function CreateDelivery()
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

                            <div className="form-body w-[80%] flex flex-col p-5 mx-auto items-center justify-center bg-white rounded-lg shadow-md shadow-slate-300">
                                
                              <form onSubmit={handleSubmit} className="flex flex-col w-full">
                                      <label htmlFor="orderId" className="mb-2 font-semibold text-gray-600">
                                      Order ID
                                      </label>
                                      <input type="text" id="orderId" name="orderId" className="p-2 mb-4 border border-gray-300 rounded-lg" />

                                      <label htmlFor="pickup" className="mb-2 font-semibold text-gray-600">
                                      Pickup
                                      </label>
                                      <input type="text" id="pickup" name="pickup" className="p-2 mb-4 border border-gray-300 rounded-lg" />

                                      <label htmlFor="destination" className="mb-2 font-semibold text-gray-600">
                                      Destination
                                      </label>
                                      <input type="text" id="destination" name="destination" className="p-2 mb-4 border border-gray-300 rounded-lg" />

                                      <label htmlFor="date" className="mb-2 font-semibold text-gray-600">
                                      Date
                                      </label>
                                      <input type="date" id="date" name="date" className="p-2 mb-4 border border-gray-300 rounded-lg" />

                                      <label htmlFor="vehicle" className="mb-2 font-semibold text-gray-600">
                                      Vehicle
                                      </label>
                                      <select id="vehicle" name="vehicle" className="p-2 mb-4 border border-gray-300 rounded-lg">
                                      <option value="car">Car</option>
                                      <option value="bike">Bike</option>
                                      <option value="truck">Truck</option>
                                      </select>

                                      <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-lg">
                                      Create Delivery
                                      </button>
                              </form>





                            </div>


                          </div>
                        </div>
                        
                    </div>
            </div>

    );
}


export default CreateDelivery;