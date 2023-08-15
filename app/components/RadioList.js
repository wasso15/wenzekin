import { useState } from "react";
function RadioList({options, setCheckedList, checkedList}) {

  function toggleOption(id, checked) {
    return options.map((option) =>
      option.id === id ? { ...option, checked } : option
    );
  }


  const changeList = (id, checked) => {
    const newCheckedList = toggleOption(id, checked);
    setCheckedList(newCheckedList);
  };

  return (
    <form className=" flex flex-col">
    {checkedList.map(({ id, name, checked }) => (
      <label className=" text-gray-500 flex flex-row items-center" key={id}>
        <input
        className=" accent-green-base mr-3"
          type="radio"
          name="options"
          value={id}
          checked={checked}
          onChange={(e) => changeList(id, e.target.checked)}
        />
        {name}
      </label>
    ))}
  </form>
  );
}
export default RadioList;