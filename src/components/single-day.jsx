import SingleEvent from "./single-event";

const SingleDay = ({ events }) => {
  const notConflict = (items) =>
    items.filter((item, index) => {
      if (index !== 0) {
        const prevEventEndTime =
          +items[index - 1].end.split(":")[0] +
          +items[index - 1].end.split(":")[1] / 60;
        const eventStartTime =
          +item.start.split(":")[0] + +item.start.split(":")[1] / 60;
        return eventStartTime > prevEventEndTime;
      }
      return true;
    });
  const conflict = (items) =>
    items.filter((item, index) => {
      if (index !== 0) {
        const prevEventEndTime =
          +items[index - 1].end.split(":")[0] +
          +items[index - 1].end.split(":")[1] / 60;
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
          {notConflict(events.sailings).map((event, index) => {
            return (
              <SingleEvent
                event={event}
                events={notConflict(events.sailings)}
                key={index}
                index={index}
              />
            );
          })}
        </div>
        <div className="flex">
          {conflict(events.sailings).map((event, index) => {
            return (
              <SingleEvent
                event={event}
                events={conflict(events.sailings)}
                key={index}
                index={index}
              />
            );
          })}
        </div>
      </div>
      <div>
        <h3>Meals</h3>
        <div className="flex">
          {notConflict(events.meals).map((event, index) => {
            return (
              <SingleEvent
                event={event}
                events={notConflict(events.meals)}
                key={index}
                index={index}
              />
            );
          })}
        </div>
        <div className="flex">
          {conflict(events.meals).map((event, index) => {
            return (
              <SingleEvent
                event={event}
                events={conflict(events.meals)}
                key={index}
                index={index}
              />
            );
          })}
        </div>
      </div>
      <div>
        <h3>Events</h3>
        <div className="flex">
          {notConflict(events.events).map((event, index) => {
            return (
              <SingleEvent
                event={event}
                events={notConflict(events.events)}
                key={index}
                index={index}
              />
            );
          })}
        </div>
        <div className="flex">
          {conflict(events.events).map((event, index) => {
            return (
              <SingleEvent
                event={event}
                events={conflict(events.events)}
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
