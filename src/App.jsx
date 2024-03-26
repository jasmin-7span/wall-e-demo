import { eachDayOfInterval, format } from "date-fns";
import "./App.css";
import React, { useState } from "react";
import { useEffect } from "react";

function App() {
  const [Dates, setDates] = useState([]);

  const eventData = {
    tour: {
      startDate: "11-3-24",
      endDate: "20-3-24",
    },
    meals: [
      { start: 6, end: 8, eventName: "High Tea" },
      { start: 12, end: 14, eventName: "Lunch" },
      { start: 18, end: 20, eventName: "Dinner" },
    ],
    events: [
      { start: 2, end: 4, eventName: "Surfing" },
      { start: 3, end: 6, eventName: "Karaoke" },
      { start: 5, end: 8, eventName: "DJ Night" },
      { start: 6, end: 12, eventName: "Hello" },
    ],
  };

  function findEvent(array, v) {
    for (let i = 0; i < array.length; i++) {
      if (
        (array[i].start <= v.start && array[i].end > v.start) ||
        (array[i].start < v.end && array[i].end >= v.end)
      )
        return false;
    }

    return true;
  }

  function getSplitEvent(events) {
    return events.reduce((accumulator, currentValue) => {
      const pushArray = accumulator.find((arr) => findEvent(arr, currentValue));
      if (pushArray) pushArray.push(currentValue);
      else accumulator.push([currentValue]);

      return accumulator;
    }, []);
  }

  // const getMealsCell = () => {
  //   return eventData.meals.map((item, index) => {
  //     if (index === 0) {
  //       return {
  //         beforeCell: item.start - 1,
  //         afterCell: item.end - item.start,
  //         eventName: item.eventName,
  //       };
  //     } else {
  //       return {
  //         beforeCell: item.start - eventData.meals[index - 1].end,
  //         afterCell: item.end - item.start,
  //         eventName: item.eventName,
  //       };
  //     }
  //   });
  // };

  const getDates = () => {
    const dates = eachDayOfInterval({
      start: new Date(2024, 3, 11),
      end: new Date(2024, 3, 20),
    });
    const formattedDates = dates.map((date) => format(date, "dd-MM-yyyy"));
    setDates(formattedDates);
  };

  const hours = Array.from({ length: 24 }, (_, index) => index);

  useEffect(() => {
    getDates();
  }, []);

  return (
    <div className="p-4">
      <h1 className="font-bold">React Calendar</h1>
      <div className="flex">
        {Dates.map((date, index) => {
          return (
            <div className="date-card" key={index}>
              <h4>{date}</h4>
            </div>
          );
        })}
      </div>

      <table style={{ marginTop: "10px" }}>
        <thead>
          <tr>
            {hours.map((hour, index) => {
              return <th key={index}>{hour + 1}:00</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            {getMealsCell().map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <td colSpan={item.beforeCell}>{item.beforeCell}</td>
                  <td colSpan={item.afterCell}>{item.eventName}</td>
                </React.Fragment>
              );
            })}
            <td
              colSpan={24 - eventData.meals[eventData.meals.length - 1].end + 1}
            >
              {24 - eventData.meals[eventData.meals.length - 1].end + 1}
            </td>
          </tr> */}

          {/* Meals */}
          {getSplitEvent(eventData.meals).map((row, index) => {
            console.log("row", row);
            return (
              <tr key={index}>
                {row.map((event, index) => {
                  return (
                    <React.Fragment key={index}>
                      {index === 0 ? (
                        <td colSpan={event.start - 1}></td>
                      ) : null}
                      <td colSpan={event.end - event.start}>
                        {event.eventName}
                      </td>
                      {index !== row.length - 1 ? (
                        Boolean(row[index + 1].start - event.end) && (
                          <td colSpan={row[index + 1].start - event.end}>
                            {/* {row[index + 1].start - event.end} */}
                          </td>
                        )
                      ) : (
                        <td colSpan={24 - event.end + 1}>
                          {/* {24 - event.end + 1} */}
                        </td>
                      )}
                    </React.Fragment>
                  );
                })}
              </tr>
            );
          })}

          {/* Events */}
          {getSplitEvent(eventData.events).map((row, index) => (
            <tr key={index}>
              {row.map((event, index) => {
                return (
                  <React.Fragment key={index}>
                    {index === 0 ? (
                      <td colSpan={event.start - 1}></td>
                    ) : null}
                    <td colSpan={event.end - event.start}>{event.eventName}</td>
                    {index !== row.length - 1 ? (
                      Boolean(row[index + 1].start - event.end) && (
                        <td colSpan={row[index + 1].start - event.end}>
                          {/* {row[index + 1].start - event.end} */}
                        </td>
                      )
                    ) : (
                      <td colSpan={24 - event.end + 1}></td>
                    )}
                  </React.Fragment>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
