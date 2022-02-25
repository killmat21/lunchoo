import LunchCard from "./LunchCard";

const LunchList = ({lunches}) => {
    return (
        <div className="lunchesList">
            {lunches.map(lunch => (
                    <LunchCard
                        lunch={lunch}
                    />
                )
            )}
        </div>
    );
}

export default LunchList;