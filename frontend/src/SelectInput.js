import './TextInput.css';
const SelectInput = ({label, setValue}) => {

    return (
        <form className="text-input">
            <label className="label-text-input">{label}:
            </label>
            <select
                className="input-margin"
                onChange={(e) => setValue(e.target.value)}
            >
                <option value="EAT_IN">Sur place</option>
                <option value="TO_GO">A emporter</option>
                <option value="DELIVERY">Livraison</option>
            </select>
        </form>
    );
}

export default SelectInput;