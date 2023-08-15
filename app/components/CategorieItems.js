import React, { useRef } from 'react'
import RadioList from './RadioList'

const CategorieItems = ({options, setCheckedList, checkedList}) => {

  
   
  return (
    <div>
        <RadioList setCheckedList={setCheckedList} checkedList={checkedList}  options={options}/>
    </div>
  )
}

export default CategorieItems