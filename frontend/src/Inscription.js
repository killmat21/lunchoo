import './Inscription.css';
import Button from '@mui/material/Button';
import TextInput from "./TextInput";

const Inscription = () => {
    return (
        <div className="Inscription">
            <TextInput
                label={"Nom"}
            />
            <TextInput
                label={"Prénom"}
            />
            <TextInput
                label={"Team"}
            />
            <Button variant="contained">Hello World</Button>
        </div>
    );
}

export default Inscription;