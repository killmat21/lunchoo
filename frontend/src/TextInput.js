import './TextInput.css';
import TextField from '@mui/material/TextField';

const TextInput = ({label}) => {
    return (
        <div className="TextInput">
            {label}
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </div>
    );
}

export default TextInput;