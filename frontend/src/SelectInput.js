import './TextInput.css';
const SelectInput = ({label, type, value, setValue}) => {

    return (
        <form className="text-input">
            <label className="label-text-input">{label}:
            </label>
            <select
                className="input-margin"
                onChange={(e) => setValue(e.target.value)}
            >
                <option value="on_site">Sur place</option>
                <option value="to_go">A emporter</option>
                <option value="uber_eats">Uber Eats</option>
            </select>
        </form>
    );
}

export default SelectInput;