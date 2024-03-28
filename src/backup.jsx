// import { eachDayOfInterval, format } from "date-fns";
import "./App.css";
import { LeftArrowIcon } from "./components/icons/LeftArrowIcon";
import React, { useState } from "react";
import { useEffect } from "react";
import { RightArrowIcon } from "./components/icons/RightArrowIcon";

function App() {
  // const [Dates, setDates] = useState([]);
  const [selectDay, setSelectDay] = useState(1);
  const [loading, setLoading] = useState(false);

  const dates = [
    {
      day: 1,
      date: "11-3-2024",
    },
    {
      day: 2,
      date: "12-3-2024",
    },
    {
      day: 3,
      date: "13-3-2024",
    },
    {
      day: 4,
      date: "14-3-2024",
    },
    {
      day: 5,
      date: "15-3-2024",
    },
    {
      day: 6,
      date: "16-3-2024",
    },
    {
      day: 7,
      date: "17-3-2024",
    },
    {
      day: 8,
      date: "18-3-2024",
    },
    {
      day: 9,
      date: "19-3-2024",
    },
  ];

  const eventData = [
    {
      // tour: {
      //   startDate: "11-3-24",
      //   endDate: "20-3-24",
      // },
      day: 1,
      date: "11-mar-2024",
      sailings: [
        {
          start: 4,
          end: 5,
          eventName: "Sailing through Bombay Shore",
        },
        {
          start: 9,
          end: 12,
          eventName: "Diving in Hind Mahasagar",
        },
      ],
      meals: [
        { start: 6, end: 8, eventName: "High Tea" },
        { start: 12, end: 14, eventName: "Lunch" },
        { start: 18, end: 20, eventName: "Dinner" },
      ],
      events: [
        { start: 2, end: 4, eventName: "Surfing" },
        { start: 3, end: 6, eventName: "Karaoke" },
        { start: 5, end: 8, eventName: "DJ Night" },
        { start: 7, end: 12, eventName: "Hello" },
      ],
    },
    {
      // tour: {
      //   startDate: "11-3-24",
      //   endDate: "20-3-24",
      // },
      // dates: [
      //   {
      //     day: 1,
      //     date: "11-3-2024",
      //   },
      //   {
      //     day: 2,
      //     date: "12-3-2024",
      //   },
      //   {
      //     day: 3,
      //     date: "13-3-2024",
      //   },
      //   {
      //     day: 4,
      //     date: "14-3-2024",
      //   },
      //   {
      //     day: 5,
      //     date: "15-3-2024",
      //   },
      //   {
      //     day: 6,
      //     date: "16-3-2024",
      //   },
      //   {
      //     day: 7,
      //     date: "17-3-2024",
      //   },
      // ],
      day: 2,
      date: "12-mar-2024",
      sailings: [
        {
          start: 2,
          end: 5,
          eventName: "Sailing through Bombay Shore",
        },
        {
          start: 9,
          end: 12,
          eventName: "Diving in Hind Mahasagar",
        },
      ],
      meals: [
        { start: 7, end: 8, eventName: "High Tea" },
        { start: 15, end: 17, eventName: "Lunch" },
        { start: 20, end: 22, eventName: "Dinner" },
      ],
      events: [
        { start: 1, end: 3, eventName: "Surfing" },
        { start: 2, end: 4, eventName: "Karaoke" },
        { start: 5, end: 8, eventName: "DJ Night" },
        { start: 6, end: 7, eventName: "Hello" },
      ],
    },
  ];

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

  // const getDates = () => {
  //   const dates = eachDayOfInterval({
  //     start: new Date(2024, 3, 11),
  //     end: new Date(2024, 3, 20),
  //   });
  //   const formattedDates = dates.map((date) => format(date, "dd-MM-yyyy"));
  //   setDates(formattedDates);
  // };

  const hours = Array.from({ length: 24 }, (_, index) => index);

  // useEffect(() => {
  //   getDates();
  // }, []);

  return (
    <div className="max-w-[992px] mx-auto my-[100px] bg-[#ECEFF1] rounded-3xl border-8 border-black p-5">
      <div className="flex justify-between pb-5 border-b border-gray-900 mb-5">
        <div>
          <h1 className="font-bold text-xl ">Yoat Tour</h1>
          <div className="flex">
            <div>
              <label htmlFor="" className="font-bold text-gray-500">Start Date:</label>
              <span>11/03/2024</span>
            </div>
            <div className="ml-5">
              <label className="font-bold text-gray-500" htmlFor="">End Date:</label>
              <span>19/03/2024</span>
            </div>
          </div>
        </div>
        <div>
          <label className="font-bold text-lg text-gray-500">Yoat Trip:</label>
          <p><b>Bombay</b> to <b>Goa</b> to <b>Bombay</b></p>
        </div>
      </div>
      <div className="flex items-center">
        <LeftArrowIcon className="w-8 h-8 cursor-pointer" />
        <div className="flex rounded-lg overflow-hidden">
          {dates.map((date, index) => {
          return (
            <button
              key={index}
              className={`date-card flex flex-col ${
                date.day === selectDay ? "bg-sky-500" : "bg-[#B0BEC5] border-l "
              }`}
              onClick={() => {
                setLoading(true);
                setTimeout(() => {
                  setSelectDay(date.day);
                  setLoading(false);
                }, 500);
              }}
            >
              {date.day === 1 && <div>Check-In</div>}
              {date.day === dates.length && <div>Check-Out</div>}
              <h4>{date.date}</h4>
            </button>
          );
        })}
        </div>
        <RightArrowIcon className="w-8 h-8 cursor-pointer" />
      </div>

      <div className="overflow-auto border border-gray-900 mt-5 rounded-xl">
        <table className="w-full ">
          <thead>
            <tr>
              {hours.map((hour, index) => {
                return <th key={index}>{hour + 1}:00</th>;
              })}
            </tr>
          </thead>

          {loading ? (
            <tbody className="relative">
              <tr className="absolute top-4 flex justify-center w-full">
                <div className="loader"></div>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {/* Sailings */}
              <tr>
                <td colSpan={24}>
                  <span className="font-bold text-xl">Sailings</span>
                </td>
              </tr>
              {getSplitEvent(eventData[selectDay - 1].sailings).map(
                (row, index) => {
                  return (
                    <tr key={index}>
                      {row.map((event, index) => {
                        return (
                          <React.Fragment key={index}>
                            {index === 0 ? (
                              <td colSpan={event.start - 1}></td>
                            ) : null}
                            <td
                              colSpan={event.end - event.start}
                              className="bg-sky-500"
                            >
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
                }
              )}

              {/* Meals */}
              <tr>
                <td colSpan={24}>
                  <span className="font-bold text-xl">Meals</span>
                </td>
              </tr>
              {getSplitEvent(eventData[selectDay - 1].meals).map((row, index) => {
                console.log("row", row);
                return (
                  <tr key={index}>
                    {row.map((event, index) => {
                      return (
                        <React.Fragment key={index}>
                          {index === 0 ? (
                            <td colSpan={event.start - 1}></td>
                          ) : null}
                          <td
                            colSpan={event.end - event.start}
                            className="bg-sky-500"
                          >
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
              <tr>
                <td colSpan={24}>
                  <span className="font-bold text-xl">Events</span>
                </td>
              </tr>
              {getSplitEvent(eventData[selectDay - 1].events).map(
                (row, index) => (
                  <tr key={index}>
                    {row.map((event, index) => {
                      return (
                        <React.Fragment key={index}>
                          {index === 0 ? (
                            <td colSpan={event.start - 1}></td>
                          ) : null}
                          <td
                            colSpan={event.end - event.start}
                            className="bg-sky-500"
                          >
                            {event.eventName}
                          </td>
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
                )
              )}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}

export default App;
