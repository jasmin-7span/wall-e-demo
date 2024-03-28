// import { eachDayOfInterval, format } from "date-fns";
import React, { useState } from "react";
import "./App.css";
import { LeftArrowIcon } from "./components/icons/LeftArrowIcon";
import SingleDay from "./components/single-day";

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

  const hours = Array.from({ length: 24 }, (_, index) => index);
  const eventData = [
    {
      day: 1,
      date: "11-mar-2024",
      sailings: [
        {
          start: "2:30",
          end: "4:15",
          name: "Sailing Event 1",
          color: "red",
        },
        {
          start: "04:00",
          end: "10:45",
          name: "Sailing Event 2",
          color: "green",
        },
        {
          start: "12:30",
          end: "17:00",
          name: "Sailing Event 3",
          color: "orange",
        },
        {
          start: "19:00",
          end: "23:30",
          name: "Diving Event 4",
          color: "pink",
        },
        {
          start: "22:00",
          end: "24:00",
          name: "Diving Event 5",
          color: "pink",
        },
      ],
      meals: [
        { start: "01:00", end: "04:15", name: "High Tea", color: "red" },
        { start: "03:30", end: "11:30", name: "Lunch", color: "orange" },
        { start: "15:45", end: "16:30", name: "Dinner", color: "pink" },
        { start: "18:45", end: "20:30", name: "Night", color: "green" },
      ],
      events: [
        { start: "01:45", end: "05:00", name: "Surfing", color: "pink" },
        { start: "04:00", end: "08:00", name: "Karaoke", color: "red" },
        { start: "12:30", end: "18:30", name: "DJ Night", color: "orange" },
        { start: "17:00", end: "22:30", name: "Hello", color: "gray" },
      ],
    },
    {
      day: 2,
      date: "13-mar-2024",
      sailings: [
        {
          start: "4:30",
          end: "6:15",
          name: "Sailing Event 1",
          color: "red",
        },
        {
          start: "06:00",
          end: "12:45",
          name: "Sailing Event 2",
          color: "green",
        },
        {
          start: "14:30",
          end: "19:00",
          name: "Sailing Event 3",
          color: "orange",
        },
        {
          start: "19:00",
          end: "23:30",
          name: "Diving Event 4",
          color: "pink",
        },
      ],
      meals: [
        { start: "00:00", end: "03:15", name: "High Tea", color: "red" },
        { start: "04:30", end: "10:30", name: "Lunch", color: "orange" },
        { start: "14:45", end: "17:30", name: "Dinner", color: "pink" },
        { start: "17:45", end: "21:30", name: "Night", color: "green" },
      ],
      events: [
        { start: "01:00", end: "05:45", name: "Surfing", color: "pink" },
        { start: "05:30", end: "07:45", name: "Karaoke", color: "red" },
        { start: "13:30", end: "17:30", name: "DJ Night", color: "orange" },
        { start: "17:00", end: "20:30", name: "Hello", color: "gray" },
      ],
    },
    {
      day: 3,
      date: "14-mar-2024",
      sailings: [
        {
          start: "2:30",
          end: "4:15",
          name: "Sailing Event 1",
          color: "red",
        },
        {
          start: "07:00",
          end: "10:45",
          name: "Sailing Event 2",
          color: "green",
        },
        {
          start: "10:30",
          end: "14:00",
          name: "Sailing Event 3",
          color: "orange",
        },
        {
          start: "12:00",
          end: "20:30",
          name: "Diving Event 4",
          color: "pink",
        },
      ],
      meals: [
        { start: "00:25", end: "02:15", name: "High Tea", color: "red" },
        { start: "05:30", end: "08:30", name: "Lunch", color: "orange" },
        { start: "12:45", end: "15:30", name: "Dinner", color: "pink" },
        { start: "13:45", end: "17:30", name: "Night", color: "green" },
      ],
      events: [
        { start: "03:00", end: "08:45", name: "Surfing", color: "pink" },
        { start: "08:30", end: "10:45", name: "Karaoke", color: "red" },
        { start: "16:30", end: "20:30", name: "DJ Night", color: "orange" },
        { start: "20:00", end: "23:30", name: "Hello", color: "gray" },
      ],
    },
  ];

  return (
    <div className="max-w-[1024px] mx-auto my-[100px] bg-[#ECEFF1] rounded-3xl border-8 border-black p-5">
      <div className="flex justify-between pb-5 border-b border-gray-900 mb-5">
        <div>
          <h1 className="font-bold text-xl ">Yoat Tour</h1>
          <div className="flex">
            <div>
              <label htmlFor="" className="font-bold text-gray-500">
                Start Date:
              </label>
              <span>11/03/2024</span>
            </div>
            <div className="ml-5">
              <label className="font-bold text-gray-500" htmlFor="">
                End Date:
              </label>
              <span>19/03/2024</span>
            </div>
          </div>
        </div>
        <div>
          <label className="font-bold text-lg text-gray-500">Yoat Trip:</label>
          <p>
            <b>Bombay</b> to <b>Goa</b> to <b>Bombay</b>
          </p>
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
                  date.day === selectDay
                    ? "bg-sky-500"
                    : "bg-[#B0BEC5] border-l "
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

      <div className="border border-gray-900 mt-5 rounded-xl">
        <div className="max-w-[1024px] mx-auto bg-gray-200 rounded-xl">
          <div className="w-full overflow-auto">
            <div className="flex">
              {hours.map((hour, index) => {
                return (
                  <div
                    key={index}
                    className="py-2 px-4 border-l text-sm flex-[0_0_70px] w-[70px] bg-white"
                  >
                    {hour == 0 ? "00:00 " : hour + ":" + "00"}
                  </div>
                );
              })}
            </div>
            <div>
              {/* {eventData.map((events, index) => {
                return <SingleDay key={index} events={events} />;
              })} */}
              <SingleDay
                events={eventData.find((itm) => itm.day === selectDay)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
