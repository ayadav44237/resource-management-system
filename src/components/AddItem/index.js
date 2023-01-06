import React from 'react'
import "./index.css";

const Input = ({label, type}) => {
    return <div className='field'>
        <div className='label'>{label}</div>
        <input type={type} className='input' />
    </div>
}
const AddItem = () => {
  return (
    <div className='add-item'>
      
      <div className='add-item__form'>
      <h1 className='add-item__heading'>Item Details</h1>
            <Input label="Item title" type="text" />
            <Input label="Link" type="url" />
            <Input label="Icon Url" type="url" />
            <div className='field'>
            <div className='label'>Tagname</div>
            <select className='select'>
                <option className='option'>User</option>
                <option className='option'>Admin</option>
            </select>
            </div>
            <Input label="Category" type="text" />
            <div className='field'>
            <div className='label'>Description</div>
            <textarea className='textarea' />
            </div>
            <div className='add-item__submit'> Create Item</div>
      </div>
      <div className='add-item__right'></div>
    </div>
  )
}

export default AddItem;
