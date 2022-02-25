import './LunchList.css';
import { useNavigate } from "react-router-dom";
import LunchCard from "./LunchCard";
import Button from '@mui/material/Button';
import SubHeader from "../SubHeader/SubHeader";

const LunchList = ({lunches}) => {
    let navigate = useNavigate();
    const onButtonClick = () => {
        navigate(`/create-lunch`);
    }

    return (
        <>
            <Button className="createLunchButton" onClick={onButtonClick}>
                A lunch to propose?
            </Button>
            <SubHeader
                title="Hello 👋"
                subtitle="Who will have the privilege of having lunch with you?"
            />

            <div className="lunchesList">
                {lunches.map(lunch => (
                        <LunchCard
                            lunch={lunch}
                        />
                    )
                )}
            </div>
        </>
    );
}

export default LunchList;