import React from "react";

export default function GridPractice() {
    return(
        <>
 <h1 className="text-3xl font-bold underline text-center mt-20 mb-10">Grid-Template-Columns</h1>
 <div class="grid grid-cols-4 gap-4 h-50 w-320 m-auto text-center mb-20">
  <div className="bg-neutral-200">01</div>
  <div className="bg-neutral-200">02</div>
  <div className="bg-neutral-200">03</div>
  <div className="bg-neutral-200">04</div>
  <div className="bg-neutral-200">05</div>
  <div className="bg-neutral-200">06</div>
  <div className="bg-neutral-200">07</div>
  <div className="bg-neutral-200">08</div>  
  <div className="bg-neutral-200">09</div>
  </div> 
  <div class="grid grid-cols-3 gap-4 h-50 w-320 m-auto text-center">
  <div className="bg-pink-200">01</div>
  <div className="bg-pink-200">02</div>
  <div className="bg-pink-200">03</div>
  <div className="bg-pink-200">04</div>
  <div className="bg-pink-200">05</div>
  <div className="bg-pink-200">06</div>
  <div className="bg-pink-200">07</div>
  <div className="bg-pink-200">08</div>  
  <div className="bg-pink-200">09</div>
  </div> 
  <h1 className="text-3xl font-bold underline text-center mt-20 mb-10">Grid Columns</h1>
  <div class="grid grid-cols-3 gap-4 h-50 w-320 m-auto text-center mb-20">
  <div class="bg-green-600">01</div>
  <div class="bg-green-600">02</div>
  <div class="bg-green-600">03</div>
  <div class="col-span-2 bg-green-200">04</div>
  <div class="bg-green-600">05</div>
  <div class="bg-green-600">06</div>
  <div class="col-span-2 bg-green-200">07</div>
  </div>
  <div class="grid grid-cols-6 gap-4 h-50 w-320 m-auto text-center">
  <div class="col-span-4 col-start-2 bg-sky-200">01</div>
  <div class="col-start-1 col-end-3 bg-sky-300">02</div>
  <div class="col-span-2 col-end-7 bg-sky-300">03</div>
  <div class="col-start-1 col-end-7 bg-sky-200">04</div>
  </div>
  <h1 className="text-3xl font-bold underline text-center mt-20 mb-10">Grid-Template-Rows</h1>
  <div class="grid grid-flow-col grid-rows-4 gap-4 h-50 w-320 m-auto text-center">
  <div className="bg-red-200">01</div>
  <div className="bg-red-200">02</div>
  <div className="bg-red-200">03</div>
  <div className="bg-red-200">04</div>
  <div className="bg-red-200">05</div>
  <div class="row-span-3 grid grid-rows-subgrid gap-4">
  <div class="row-start-2 bg-red-100">06</div>
  </div>
  <div className="bg-red-200">07</div>
  <div className="bg-red-200">08</div>
  <div className="bg-red-200">09</div>
  <div className="bg-red-200">10</div>
  </div>
  <h1 className="text-3xl font-bold underline text-center mt-20 mb-10">Auto Flow</h1>
  <div class="grid grid-flow-row-dense grid-cols-3 gap-4 grid-rows-3 h-50 w-320 m-auto text-center">
  <div class="col-span-2 bg-purple-200">01</div>
  <div class="col-span-2 bg-purple-200">02</div>
  <div className="bg-purple-300">03</div>
  <div className="bg-purple-300">04</div>
  <div className="bg-purple-300">05</div>
  </div> 
  
        </>
    )
}