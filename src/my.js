import React from "react";
import './my.css';

const first=(item)=>{
    console.log(item)
    return(
        // <div className="my">
        //     <h1>
        //         First Import 
        //     </h1>
        //     <p>first React component importing</p>
        // </div>
     /*#__PURE__*/React.createElement("div", {className: "my"}
     , /*#__PURE__*/React.createElement("h1", null, "First Import")
     ,/*#__PURE__*/React.createElement("p", null, "first React component importing")))
}
export default first;