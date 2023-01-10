import React, { useState, useEffect } from "react";

export default function Dashboard() {
  const emps = [
    {
      Name: "Bright Spark",
      image:
        "https://api.dicebear.com/5.x/bottts-neutral/svg?seed=Bailey?w=140&h=140&fit=fill&r=max&q=100",
    },
    {
      Name: "Glittering Gems",
      image:
        "https://api.dicebear.com/5.x/bottts-neutral/svg?seed=Muffin?w=140&h=140&fit=fill&r=max&q=100",
    },
    {
      Name: "Green Garden",
      image:
        "https://api.dicebear.com/5.x/bottts-neutral/svg?seed=Dusty?w=140&h=140&fit=fill&r=max&q=100",
    },
    {
      Name: "Blue Ocean",
      image:
        "https://api.dicebear.com/5.x/bottts-neutral/svg?seed=Angel?w=140&h=140&fit=fill&r=max&q=100",
    },
    {
      Name: "Velvet Touch",
      image:
        "https://api.dicebear.com/5.x/bottts-neutral/svg?seed=Missy?w=140&h=140&fit=fill&r=max&q=100",
    },
    {
      Name: "Golden Sunrise",
      image:
        "https://api.dicebear.com/5.x/bottts-neutral/svg?seed=Max?w=140&h=140&fit=fill&r=max&q=100",
    },
    {
      Name: "Silver Storm",
      image:
        "https://api.dicebear.com/5.x/bottts-neutral/svg?seed=Miss%20kitty?w=140&h=140&fit=fill&r=max&q=100",
    },
    {
      Name: "Purple Rain",
      image:
        "api.dicebear.com/5.x/bottts-neutral/svg?seed=Sadie?w=140&h=140&fit=fill&r=max&q=100",
    },
    {
      Name: "Green Rain",
      image:
        "https://api.dicebear.com/5.x/bottts-neutral/svg?seed=Bubba?w=140&h=140&fit=fill&r=max&q=100",
    },
  ];

  const [emp1, setemp1] = useState(null);
  const [emp2, setemp2] = useState(null);

  const handleChange = (event) => {
    setemp1(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();

    //set random number between 0 and length of array
    const first = Math.floor(Math.random() * emps.length);
    setemp1(first);

    //set random number between 0 and length of array but not equal to first
    let second = Math.floor(Math.random() * emps.length);
    while (second === first) {
      second = Math.floor(Math.random() * emps.length);
    }
    setemp2(second);

    handleSave;
  };

  //save the selected employees in cookies
  const handleSave = () => {
    const dish = [emps[emp1], emps[emp2]];
    document.cookie = `dishdutty=${JSON.stringify(dish)}`;
  };

  //if cookie exists then use effect to update state check if is undefined
  useEffect(() => {
    if (document.cookie) {
      const cookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith("dishdutty"));
      if (cookie) {
        const emp = JSON.parse(cookie.split("=")[1]);
        setemp1(emp[0]);
        setemp2(emp[1]);
      }
    }
  }, []);

  //onClick={() => setPeople(getRandomPeople())}

  return (
    <section className="flex flex-1 h-[35rem]">
      <div className="flex mt-[5rem] w-full p-8 justify-center">
        <div className="p-8">
          <div className="rounded-3xl overflow-hidden shadow-2xl max-w-xs my-3 bg-purple">
            <div className="bg-black h-[6rem] w-[20rem]" />
            <div className="flex justify-center -mt-8">
              <img
                src={emps[emp1]?.image ? emps[emp1].image : "/female.png"}
                className="w-[60px] rounded-full border-solid border-white border-2 -mt-3"
              />
            </div>
            <div className="text-center px-3 pb-6 pt-2">
              <h3 className="text-white text-sm bold font-sans">
                {emps[emp1]?.Name ? emps[emp1].Name : "Dish specialist 1"}
              </h3>
            </div>
          </div>
        </div>
        <div className="p-8">
          <div className="rounded-3xl overflow-hidden shadow-2xl max-w-xs my-3 bg-purple">
            <div className="bg-black h-[6rem] w-[20rem]" />
            <div className="flex justify-center -mt-8">
              <img
                src={emps[emp2]?.image ? emps[emp2].image : "male.png"}
                className="w-[60px] rounded-full border-solid border-white border-2 -mt-3"
              />
            </div>
            <div className="text-center px-3 pb-6 pt-2">
              <h3 className="text-white text-sm bold font-sans">
                {emps[emp2]?.Name ? emps[emp2].Name : "Dish specialist 2"}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center w-full -mt-[2rem]">
        <img className="self-center w-1/2" src="chef.png" alt="dish duty" />
        <div className="self-center">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple to-purple-800 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

            <button
              onClick={handleClick}
              className="bg-black relative px-7 py-4 rounded-lg leading-none flex items-center divide-x divide-gray-600"
            >
              <span className="flex items-center space-x-5">
                <span className="pr-6 text-white">&larr; See what happens</span>
              </span>
              <span className="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200">
                Spin the wheel
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
