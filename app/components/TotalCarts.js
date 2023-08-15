import React from 'react'

const TotalCarts = ({totalCart}) => {
  return (
    <div className="">
    <p className=" text-sm font-bold text-gray-700">
      Votre commande
    </p>
    <div className=" border-b border-orange-medium py-3 space-y-2">
      <div className=" flex flex-row justify-between">
        <p className=" text-xs font-semibold text-gray-400">
          Sous Total:
        </p>
        <p className=" text-xs font-semibold text-gray-400">
          {totalCart} Fc
        </p>
      </div>
      <div className=" flex flex-row justify-between">
        <p className=" text-xs font-semibold text-gray-400">
          Frais Livraison:
        </p>
        <p className=" text-xs font-semibold text-gray-400">
          5500 Fc
        </p>
      </div>
    </div>

    <div className=" flex flex-row justify-between mt-3">
      <p className=" text-sm font-semibold text-gray-700">
        Total general:
      </p>
      <p className=" text-sm font-semibold text-gray-700">
      {totalCart+5500} Fc
      </p>
    </div>
  </div>
  )
}

export default TotalCarts