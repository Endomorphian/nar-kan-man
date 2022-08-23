import './Selector.css'

import Select from 'react-select'
import { useState } from 'react'

import { BsGenderMale } from 'react-icons/bs'
import { BsGenderFemale } from 'react-icons/bs'

const Selector = ({ color, prop, callback, gender }) => {

    const [sex, setSex] = useState(gender)
 
    const options = [
        { value: 'fem', label: <BsGenderFemale /> },
        { value: 'ma', label: <BsGenderMale /> },
    ]

    const handleChange = ({value}) => {
            setSex(value)
            callback(value)
            console.log("ON CHANGE", value)
        }

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            backgroundColor: 'white',
            borderBottom: '1px dotted pink',
            color: state.isSelected ? 'red' : 'blue',
            padding: 5,
        }),
        control: () => ({
            // none of react-select's styles are passed to <Control />
            minWidth: '10vw',
            backgroundColor: 'white',
            fontSize: '1rem',
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';
        
            return { ...provided, opacity, transition };
        }
        }

  return (
    <div style={{ backgroundColor: color}} className="outer">
        <div >{prop}</div>
        <div className="selector">
            <Select 
                styles = {customStyles}
                options={options} 
                defaultValue={{ label: "--", value: sex }}
                onChange={handleChange}
                components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
            />
        </div>
    </div>
  )
}

export default Selector



