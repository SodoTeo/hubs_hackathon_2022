import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export default function Parking() {
  const { data: session } = useSession();
  const [parkingSpots, setParkingSpots] = useState([
    { id: 1, reserved: false, initials: "" },
    { id: 2, reserved: false, initials: "" },
    { id: 3, reserved: false, initials: "" },
    { id: 4, reserved: false, initials: "" },
    { id: 5, reserved: false, initials: "" },
    { id: 6, reserved: false, initials: "" },
    { id: 7, reserved: false, initials: "" },
    { id: 8, reserved: false, initials: "" },
    { id: 9, reserved: false, initials: "" },
    { id: 10, reserved: false, initials: "" },
  ]);

  const reserveParkingSpot = (id) => {
    if (!session) {
      alert("You must be logged in to reserve a parking spot.");
      return;
    }
    const parkingSpot = parkingSpots.find((spot) => spot.id === id);
    if (parkingSpot.reserved) {
      alert("Parking spot is already reserved");
      return;
    }

    const reservedSpots = parkingSpots.filter((spot) => spot.reserved);
    if (reservedSpots.length >= 1) {
      alert("You can only reserve 1 parking spot");
      return;
    } else {
      setParkingSpots(
        parkingSpots.map((spot) => {
          if (spot.id === id) {
            spot.reserved = true;
            spot.initials = session.user.name
              .split(" ")
              .map((n) => n[0])
              .join("");
          }
          return spot;
        })
      );
      document.cookie = `parkingSpots=${JSON.stringify(parkingSpots)}`;
      alert("Parking spots saved");
    }
  };

  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("parkingSpots"));
    if (cookie) {
      const parkingSpots = JSON.parse(cookie.split("=")[1]);
      setParkingSpots(parkingSpots);
    }
  }, []);

  return (
    <section className="mx-auto my-auto h-[35rem]">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="grid grid-cols-5 gap-40 content-center">
          {parkingSpots.map((spot) => (
            <div
              key={spot.id}
              className="flex flex-col shadow-2xl items-center justify-center w-40 h-40 border-2 border-black rounded-lg"
            >
              <div className="flex items-center justify-center w-20 h-20 border-2 border-black rounded-full">
                <p className="text-2xl font-bold">{spot.initials}</p>
              </div>
              <button
                className="w-20 h-10 mt-2 text-white bg-black rounded-lg"
                onClick={() => reserveParkingSpot(spot.id)}
              >
                Reserve
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
