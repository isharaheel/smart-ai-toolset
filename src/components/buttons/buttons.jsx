import React from "react";


export default function Button({className , text}) {
    return(
        <>
          <button
      
      className={`text-white font-medium px-5 py-2 rounded-lg transition ${className}`}
    >
      {text}
    </button>
        </>
    )
}