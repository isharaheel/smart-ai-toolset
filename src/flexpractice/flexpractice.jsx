import React from "react";

export default function FlexPractice() {
    return(
        <>
  <h1 className="text-3xl font-bold underline text-center mt-20 mb-10 text-orange-800">Flex basis example</h1>
  <div class="flex flex-row gap-4 m-auto h-25 w-320 text-center justify-center">
  <div class="basis-64 bg-pink-500">01</div>
  <div class="basis-64 bg-cyan-400">02</div>
  <div class="basis-128 bg-rose-100">03</div>
  </div>
  <h1 className="text-3xl font-bold underline text-center mt-20 mb-10">Flex grow</h1>
  <div class="flex mb-10 h-25 w-320 m-auto text-center">
  <div class="size-14 flex-none bg-yellow-100">01</div>
  <div class="size-14 grow bg-pink-200">02</div>
  <div class="size-14 flex-none bg-blue-50">03</div>
  </div>
  <div class="flex h-25 w-320 m-auto text-center">
  <div class="size-14 grow bg-rose-200">01</div>
  <div class="size-14 grow bg-purple-200">02</div>
  <div class="size-14 grow bg-green-100">03</div>
  </div>
  <h1 className="text-3xl font-bold underline text-center mt-20 mb-10">Flex Shrink</h1>
  <div class="flex h-25 w-320 m-auto text-center">
  <div class="h-16 flex-1 bg-blue-50">01</div>
  <div class="h-16 w-32 shrink-0 bg-blue-200">02</div>
  <div class="h-16 flex-1 bg-blue-50">03</div>
  </div>
  <h1 className="text-3xl font-bold underline text-center mt-20 mb-10">Flex order</h1>
  <div class="flex justify-between flex h-25 w-320 m-auto text-center">
  <div class="order-last bg-red-50 basis-30">01</div>
  <div class="bg-red-100 basis-30">02</div>
  <div class="order-first bg-red-50 basis-30">03</div>
  </div>
        </>
    )
}