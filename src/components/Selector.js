import './Selector.css'
import { BsGenderFemale, BsGenderMale } from "react-icons/bs"

import Select from 'react-select'

const Selector = ({ color, prop }) => {

    const options = [
        { value: 'm', label: <BsGenderFemale /> },
        { value: 'f', label: <BsGenderMale /> },
    ]

    const handleChange = ({value}) => {
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
                defaultValue={{ label: <BsGenderMale />, value: 0 }}
                onChange={handleChange}
            />
        </div>
    </div>
  )
}

export default Selector



