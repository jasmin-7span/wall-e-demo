import React from "react";

const SingleEvent = ({ event, index, events }) => {
  const emptyEvent = () => {
    let width = 0;
    const eventStartTimeInHors =
      +event.start.split(":")[0] + +(event.start.split(":")[1] / 60);
    if (index === 0) {
      width = eventStartTimeInHors;
    } else {
      const minusTime =
        +events[index - 1].end.split(":")[0] +
        +events[index - 1].end.split(":")[1] / 60;
      width = eventStartTimeInHors - minusTime;
    }

    return width * 70 + "px";
  };
  const fillEvent = () => {
    const eventStartTime =
      +event.start.split(":")[0] + +event.start.split(":")[1] / 60;
    const eventEndTime =
      +event.end.split(":")[0] + +event.end.split(":")[1] / 60;

    return (eventEndTime - eventStartTime) * 70 + "px";
  };
  return (
    <>
      <div
        style={{ flexBasis: emptyEvent(), flexGrow: 0, flexShrink: 0 }}
      ></div>
      <div
        style={{
          background: event.color,
          flexBasis: fillEvent(),
          flexGrow: 0,
          flexShrink: 0,
        }}
      >
        {event.name}
      </div>
    </>
  );
};

export default React.memo(SingleEvent);
