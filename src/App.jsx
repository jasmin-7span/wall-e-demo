import React from "react";
import "./App.css";
import SingleDay from "./components/single-day";

function App() {
  const hours = Array.from({ length: 24 }, (_, index) => index);
  const eventData = [
    {
      day: 1,
      date: "11-mar-2024",
      sailings: [
        // {
        //   start: "2:30",
        //   end: "10:45",
        //   name: "Sailing through",
        //   color: "gray",
        // },
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
        {
          start: "23:00",
          end: "24:00",
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
            return <SingleDay key={index} events={events} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
