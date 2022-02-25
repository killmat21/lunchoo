import './LunchList.css';
import LunchCard from "./LunchCard";
import SubHeader from "../SubHeader/SubHeader";

const LunchList = ({lunches}) => {
    return (
        <>
            <SubHeader
                title="Hello 👋🏻"
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