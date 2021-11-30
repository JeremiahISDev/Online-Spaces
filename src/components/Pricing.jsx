import React from "react";
import { Free, Premium, Enterprise } from "./Pricing Cards";
function Pricing() {
  return (
    <div className="contact">
      <div class="container">
        <div className="cards flex items-center place-items-center">
          <Free />
          <Premium />
          <Enterprise/>
        </div>
        
      </div>
    </div>
  );
}

export default Pricing;