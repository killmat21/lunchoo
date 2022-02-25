import './TextInput.css';
import './LunchForm.css'
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';

const DateInput = ({label, value, setValue, className}) => {
    return (
        <form className={`text-input ${className}`}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                    label={label}
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField sx={{width: '100%', marginBottom: '16px'}} {...params} />}
                    className="width-100"
                />
            </LocalizationProvider>
        </form>
    );
}

export default DateInput;