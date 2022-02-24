import './TextInput.css';
const TextInput = ({label, type, value, setValue}) => {


    return (
        <form className="text-input">
            <label className="label-text-input">{label}:

            </label>
            <input className="input-margin"
                    type={type}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
        </form>
    );
}

export default TextInput;