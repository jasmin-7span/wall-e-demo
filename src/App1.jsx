import React from "react";
import "./App.css";
import SingleDay from "./components/single-day";

function App1() {
  const hours = Array.from({ length: 24 }, (_, index) => index);
  const eventData = [
    {
      day: 1,
      date: "11-mar-2024",
      sailings: [
        {
          start: "4:30",
          end: "10:15",
          name: "Sailing through",
          color: "red",
        },
        {
          start: "09:00",
          end: "11:45",
          name: "Sailing dublicate",
          color: "green",
        },
        {
          start: "12:30",
          end: "17:00",
          name: "Sailing through Bombay Shore",
          color: "orange",
        },
        {
          start: "19:00",
          end: "23:30",
          name: "Diving in Hind Mahasagar",
          color: "pink",
        },
      ],
      meals: [
        { start: "06:00", end: "08:15", name: "High Tea" },
        { start: "12:30", end: "14:30", name: "Lunch" },
        { start: "18:45", end: "20:30", name: "Dinner" },
      ],
      events: [
        { start: "02:30", end: "04:00", name: "Surfing" },
        { start: "03:00", end: "06:00", name: "Karaoke" },
        { start: "05:30", end: "08:30", name: "DJ Night" },
        { start: "07:00", end: "12:30", name: "Hello" },
      ],
    },
    // {
    //   day: 2,
    //   date: "12-mar-2024",
    //   sailings: [
    //     {
    //       start: 2,
    //       end: 5,
    //       eventName: "Sailing through Bombay Shore",
    //     },
    //     {
    //       start: 9,
    //       end: 12,
    //       eventName: "Diving in Hind Mahasagar",
    //     },
    //   ],
    //   meals: [
    //     { start: '07:00', end: '08:00', eventName: "High Tea" },
    //     { start: '15:30', end: '17:30', eventName: "Lunch" },
    //     { start: '20:30', end: '22:30', eventName: "Dinner" },
    //   ],
    //   events: [
    //     { start: '01:30', end: '02:30', eventName: "Surfing" },
    //     { start: '02:30', end: '05:30', eventName: "Karaoke" },
    //     { start: '06:30', end: '8:30', eventName: "DJ Night" },
    //     { start: '07:00', end: '9:00', eventName: "Hello" },
    //   ],
    // },
  ];
  return (
    <div className="max-w-[1024px] mx-auto my-[100px] bg-gray-200 rounded-xl p-4">
      <div className="w-full overflow-auto">
        <div className="flex">
          {hours.map((hour, index) => {
            return (
              <div
                key={index}
                className="py-2 px-4 rounded-xl text-sm flex-[0_0_70px] w-[70px]"
              >
                {hour == 0 ? "00:00 " : hour + ":" + "00"}
              </div>
            );
          })}
        </div>
        <div>
          {eventData.map((events, index) => {
            return <SingleDay1 key={index} events={events} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App1;
