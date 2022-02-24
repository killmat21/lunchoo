import LunchCard from "./LunchCard";

const LunchList = ({lunches}) => {
    return (
        <div className="lunchesList">
            {lunches.forEach(lunch => {
                return (
                    <LunchCard
                        lunch={lunch}
                    />
                )
                console.log("wesh");
            })}
        </div>
    );
}

export default LunchList;