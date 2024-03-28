import { useState } from "react";
import SingleEvent from "./single-event";

const SingleDay1 = ({ events }) => {
  const [conflictEvent, setConflictEvent] = useState([]);
  const [isCompleted, setIsCompleted] = useState(true);
  console.log(conflictEvent, "conflictEvent");
  return (
    <div>
      <div>
        <h3>Sailings</h3>
        {isCompleted && (
          <div className="flex">
            {events.sailings.map((event, index) => {
              return (
                <SingleEvent
                  event={event}
                  events={events}
                  key={index}
                  index={index}
                  conflictEvent={conflictEvent}
                  setConflictEvent={setConflictEvent}
                  setIsCompleted={setIsCompleted}
                />
              );
            })}
          </div>
        )}
        {conflictEvent.length && !isCompleted && (
          <div className="flex">
            {conflictEvent.map((event, index) => {
              return (
                <SingleEvent
                  event={event}
                  events={events}
                  key={index}
                  index={index}
                  conflictEvent={conflictEvent}
                  setConflictEvent={setConflictEvent}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleDay1;
