import './TextInput.css';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

const DateInput = ({label, type, value, setValue}) => {
    return (
        <form className="text-input">
            <label className="label-text-input">{label}:

            </label>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="Date"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </form>
    );
}

export default DateInput;