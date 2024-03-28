import SingleEvent from "./single-event";

const SingleDay = ({ events }) => {
  const notConflict = events.sailings.filter((item, index) => {
    if (index !== 0) {
      const prevEventEndTime =
        +events.sailings[index - 1].end.split(":")[0] +
        +events.sailings[index - 1].end.split(":")[1] / 60;
      const eventStartTime =
        +item.start.split(":")[0] + +item.start.split(":")[1] / 60;
      return eventStartTime > prevEventEndTime;
    }
    return true;
  });
  const conflict = events.sailings.filter((item, index) => {
    if (index !== 0) {
      const prevEventEndTime =
        +events.sailings[index - 1].end.split(":")[0] +
        +events.sailings[index - 1].end.split(":")[1] / 60;
      const eventStartTime =
        +item.start.split(":")[0] + +item.start.split(":")[1] / 60;
      return eventStartTime < prevEventEndTime;
    }
    return false;
  });

  return (
    <div>
      <div>
        <h3>Sailings</h3>
        <div className="flex">
          {notConflict.map((event, index) => {
            return (
              <SingleEvent
                event={event}
                events={notConflict}
                key={index}
                index={index}
              />
            );
          })}
        </div>
        <div className="flex">
          {conflict.map((event, index) => {
            return (
              <SingleEvent
                event={event}
                events={conflict}
                key={index}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SingleDay;
