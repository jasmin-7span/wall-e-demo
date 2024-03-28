// import { eachDayOfInterval, format } from "date-fns";
import "./App.css";
import { LeftArrowIcon } from "./components/icons/LeftArrowIcon";
import React, { useState } from "react";
import { useEffect } from "react";
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
          start: '4:30',
          end: '10:15',
          name: "Sailing through",
          color:"red"
        },
        //  {
        //   start: '09:00',
        //   end: '11:45',
        //    name: "Sailing dublicate",
        //   color:"green"
        // },
        {
          start: '12:30',
          end: '17:00',
          name: "Sailing through Bombay Shore",
          color:"orange"
        },
        {
          start: '19:00',
          end: '23:30',
          name: "Diving in Hind Mahasagar",
          color:"pink"
        },
      ],
      meals: [
        { start: '06:00', end: '08:15', name: "High Tea" },
        { start: '12:30', end: '14:30', name: "Lunch" },
        { start: '18:45', end: '20:30', name: "Dinner" },
      ],
      events: [
        { start: '02:30', end: '04:00', name: "Surfing" },
        { start: '03:00', end: '06:00', name: "Karaoke" },
        { start: '05:30', end: '08:30', name: "DJ Night" },
        { start: '07:00', end: '12:30', name: "Hello" },
      ],
    },
    // {
    //   day: 2,
    //   date: "12-mar-2024",
    //   sailings: [
    //     {
    //       start: '04:30',
    //       end: '06:00',
    //       name: "Sailing through",
    //       color:"red"
    //     },
    //     //  {
    //     //   start: '09:00',
    //     //   end: '11:45',
    //     //    name: "Sailing dublicate",
    //     //   color:"green"
    //     // },
    //     {
    //       start: '12:30',
    //       end: '14:30',
    //       name: "Sailing through Bombay Shore",
    //       color:"orange"
    //     },
    //     {
    //       start: '19:00',
    //       end: '23:00',
    //       name: "Diving in Hind Mahasagar",
    //       color:"pink"
    //     },
    //   ],
    //   meals: [
    //     { start: '06:00', end: '08:15', name: "High Tea" },
    //     { start: '12:30', end: '14:30', name: "Lunch" },
    //     { start: '18:45', end: '20:30', name: "Dinner" },
    //   ],
    //   events: [
    //     { start: '02:30', end: '04:00', name: "Surfing" },
    //     { start: '03:00', end: '06:00', name: "Karaoke" },
    //     { start: '05:30', end: '08:30', name: "DJ Night" },
    //     { start: '07:00', end: '12:30', name: "Hello" },
    //   ],
    // },
  ];

  return (
    <div className="max-w-[1024px] mx-auto my-[100px] bg-[#ECEFF1] rounded-3xl border-8 border-black p-5">
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

      <div className="border border-gray-900 mt-5 rounded-xl">
        <div className="max-w-[1024px] mx-auto bg-gray-200 rounded-xl">
          <div className="w-full overflow-auto">
            <div className="flex">
              {hours.map((hour, index) => {
                return <div key={index} className="py-2 px-4 border-l text-sm flex-[0_0_70px] w-[70px] bg-white">{hour == 0 ? '00:00 ' : hour+':'+'00'}</div>;
              })}
            </div>
            <div>
              {eventData.map((events, index) => {
                return <SingleDay key={index} events={events} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
