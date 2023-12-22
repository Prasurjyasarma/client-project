import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/home/home.component";
import Navigation from "./Routes/navigation/navigation";
import TrackOrder from "./Routes/track-order/track-order.component";

import WomenShoes from "./Routes/shop/women-shoes/women-shoes";
import WomenApparel from "./Routes/shop/women-apparel/women-apparel";
import MenShoes from "./Routes/shop/men-shoes/men-shoes";
import MenApparel from "./Routes/shop/men-apparel/men-apparel";
import KidsShoes from "./Routes/shop/kids-shoes/kids-shoes";
import KidsApparel from "./Routes/shop/kids-apparel/kids-apparel";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="track-order" element={<TrackOrder />} />
        <Route path="women-shoes" element={<WomenShoes />} />
        <Route path="women-apparel" element={<WomenApparel />} />
        <Route path="men-shoes" element={<MenShoes />} />
        <Route path="men-apparel" element={<MenApparel />} />
        <Route path="kids-shoes" element={<KidsShoes />} />
        <Route path="kids-apparel" element={<KidsApparel />} />
      </Routes>
    </Router>
  );
}

export default App;
