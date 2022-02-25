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
    const userName = localStorage.getItem("user_name")
    let helloText = ""
    if (userName) {
        helloText = "Hello " + userName + " 👋🏻"
    } else {
        helloText = "Hello 👋🏻"
    }

    return (
        <>
            <Button className="createLunchButton" onClick={onButtonClick}>
                A lunch to propose?
            </Button>
            <SubHeader
                title={helloText}
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