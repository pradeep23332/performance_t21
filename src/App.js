import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./routes/login";
import Dashboard from "./routes/Admindash";
import CreateDelivery from "./routes/DeliveryRoutes/createDelivery";
import Orders from "./routes/DeliveryRoutes/orders";
import RoutePlanning from "./routes/DeliveryRoutes/RoutePlanning";
import PerformanceTrack from "./routes/DeliveryRoutes/performancetrack";
import CreateOrder from "./routes/DeliveryRoutes/createOrder";
import ChurnRank from "./routes/DeliveryRoutes/churnRank";
import UpdateOrder from "./routes/DeliveryRoutes/updateOrder";
import MoreInfo from "./routes/DeliveryRoutes/moreInfo";
import Modal from "./routes/DeliveryRoutes/removePopup";
import DeliveryRank from "./routes/DeliveryRoutes/deliveryRank";


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Login/>}/>
          <Route path="Dashboard" element={<Dashboard/>}/>
          <Route path="CreateDelivery" element={<CreateDelivery/>}/>
          <Route path="PerformanceTrack" element={<PerformanceTrack/>}/>
          <Route path="Orders" element={<Orders/>}/>
          <Route path="RoutePlanning" element={<RoutePlanning/>}/>
          <Route path="CreateOrder" element={<CreateOrder/>}/>
          <Route path="ChurnRank" element={<ChurnRank/>}/>
          <Route path="UpdateOrder/:slug" element={<UpdateOrder/>}/>
          <Route path="MoreInfo/:slug" element={<MoreInfo/>}/>
          <Route path="Modal" element={<Modal/>}/>
          <Route path="DeliveryRank" element={<DeliveryRank/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
