import React from "react";

const Coordonate = ({ Controller, control }) => {
  return (
    <div className=" flex flex-col gap-6 ">
      <Controller
        name="Name"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            className="appearance-none border text-xs border-orange-medium rounded-md w-full  px-2 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-orange-medium h-[42px]"
            type="text"
            placeholder="Nom"
          />
        )}
      />

<Controller
        name="PhoneNumber"
        control={control}
        render={({ field }) => (
          <input
          {...field}
          className="appearance-none border text-xs border-orange-medium rounded-md w-full  px-2 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-orange-medium h-[42px]"
          type="tel"
          placeholder="Telephone"
        />
        )}
      />
    </div>
  );
};

export default Coordonate;
