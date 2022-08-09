import './Selector.css'

import Select from 'react-select'
import { useState } from 'react'

const Selector = ({ color, prop, callback, gender }) => {

    const [sex, setSex] = useState(gender)
 
    const options = [
        { value: 'f', label: "m" },
        { value: 'm', label: "k" },
    ]

    const handleChange = ({value}) => {
            setSex(value)
            callback(sex)
            console.log("ON CHANGE", sex)
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
            minWidth: '15vw',
            backgroundColor: 'white',
            fontSize: '25px',
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
                defaultValue={{ label: gender, value: sex }}
                onChange={handleChange}
            />
        </div>
    </div>
  )
}

export default Selector



