import './TextInput.css';
import TextField from "@mui/material/TextField";
const TextInput = ({label, type, value, setValue, required, sx, className}) => {


    return (
        <div className={`text-input ${className}`}>
            <TextField
                label={label}
                type={type}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                size='small'
                required={required}
                sx={sx}
            />
        </div>
    );
}

export default TextInput;