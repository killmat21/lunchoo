import './TextInput.css';
import TextField from "@mui/material/TextField";
const TextInput = ({label, type, value, setValue}) => {


    return (
        <div className="text-input">
            <TextField
                label={label}
                type={type}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                size='small'
            />
        </div>
        // <form className="text-input">
        //     <label className="label-text-input">{label}:
        //
        //     </label>
        //     <input className="input-margin"
        //         type={type}
        //         value={value}
        //         onChange={(e) => setValue(e.target.value)}
        //     />
        // </form>
    );
}

export default TextInput;