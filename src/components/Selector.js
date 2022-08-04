import './Selector.css'

import Select from 'react-select'

const Selector = ({ color, prop }) => {

    const options = [
        { value: '0', label: '0' },
        { value: '10', label: '10' },
        { value: '30', label: '30' }
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
                defaultValue={{ label: "?", value: 0 }}
                onChange={handleChange}
            />
        </div>
    </div>
  )
}

export default Selector



