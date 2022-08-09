import './Selector.css'

import { useState } from 'react'

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import TextField from '@mui/material/TextField';

const SelectorNumber = ({ color, prop, callback, start }) => {

  const [value, setValue] = useState(start);

  return (
    <div style={{ backgroundColor: color}} className="outer">
        <div >{prop}</div>
        <div className="selector">

        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
                label=""
                value={value}
                onChange={(newValue) => {
                    setValue(newValue)
                    callback(newValue)
                }}
                renderInput={(params) => <TextField {...params} sx={{ backgroundColor: 'white' }} />}
            />
        </LocalizationProvider>

        </div>
    </div>
  )
}

export default SelectorNumber



