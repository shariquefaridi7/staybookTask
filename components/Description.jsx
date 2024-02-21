import React, { useEffect, useState } from "react";
import { db } from "@/firebase";
import { doc, getDoc, updateDoc, addDoc, collection } from "firebase/firestore";
import Navbar from "./Navbar";

const Description = ({ desc }) => {
  const [data, setData] = useState({
    hotelDesc: "",
    hotelName: "",
    distance: "",
    time: "",
  });

  const [isEdited1, setIsEdited1] = useState(false);
  const [isEdited2, setIsEdited2] = useState(false);
  const [isEdited3, setIsEdited3] = useState(false);
  const [isEdited4, setIsEdited4] = useState(false);

  const [fetch, setFetch] = useState({});

  useEffect(() => {
    setData(...desc);
  }, [desc]);

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = async () => {
    //await addDoc(collection(db, "desc"), data);
    setFetch(data);
    await updateDoc(doc(db, "desc", "Et68EEjvmUYXw5DrhODn"), data);
  };

  const handleCancel = () => {
    setData(fetch);
  };

  const handleEit1 = () => {
    setIsEdited1((prev) => !prev);
  };

  const handleEit2 = () => {
    setIsEdited2((prev) => !prev);
  };
  const handleEit3 = () => {
    setIsEdited3((prev) => !prev);
  };
  const handleEit4 = () => {
    setIsEdited4((prev) => !prev);
  };
  return (
    <>
      <Navbar />
      <h2 className="text-xl   font-bold  ml-6  md:ml-32 mt-14">Delux Room</h2>
      <main className="max-w-7xl  mx-auto   px-10 ">
        <div className="flex md:space-x-2 mt-10 space-x-10">
          <h2 className=" text-blue-500 text-lg">Hotel Description</h2>
          <textarea
            type="text"
            name="hotelDesc"
            value={data.hotelDesc}
            onChange={handleChange}
            className="h-20 w-full border border-gray-300 focus:outline-none  rounded-lg p-3"
            disabled={!isEdited1}
          />
          {isEdited1 ? (
            <>
              <div className="w-48 space-x-4">
                <button
                  onClick={() => {
                    setIsEdited1((prev) => !prev);
                    handleCancel(); // Call handleCancel function
                  }}
                  className="bg-orange-300   py-1 text-white rounded-md  focus:outline-none w-14 md:w-20 ml-4"
                >
                  Cancel
                </button>
                <button
                  className="bg-orange-300 text-white  py-1 rounded-md  focus:outline-none  w-14 md:w-20 mt-3"
                  onClick={() => {
                    setIsEdited1((prev) => !prev);
                    handleSave();
                  }}
                >
                  Save
                </button>
              </div>
            </>
          ) : (
            <button
              onClick={handleEit1}
              className="text-blue-500 text-lg w-20 text-right"
            >
              Edit
            </button>
          )}
        </div>
        <div className="divide-y"></div>
        <h2 className="mt-14  text-blue-500 text-lg">
          Hotel near the Airport :{" "}
        </h2>
        <div className="flex md:space-x-2 mt-20 space-x-2">
          <h2 className="w-32 text-blue-500 text-lg">Hotel Name</h2>
          <input
            type="text"
            name="hotelName"
            value={data.hotelName}
            onChange={handleChange}
            className=" w-56 h-10  border border-gray-300 focus:outline-none  rounded-lg p-3"
            disabled={!isEdited2}
          />
          {isEdited2 ? (
            <>
              <div className="w-48 space-x-4">
                <button
                  onClick={() => {
                    setIsEdited2((prev) => !prev);
                    handleCancel(); // Call handleCancel function
                  }}
                  className="bg-orange-300   py-1 text-white rounded-md  focus:outline-none w-14 md:w-20 ml-4"
                >
                  Cancel
                </button>
                <button
                  className="bg-orange-300 text-white  py-1 rounded-md  focus:outline-none  w-14 md:w-20 mt-3"
                  onClick={() => {
                    setIsEdited2((prev) => !prev);
                    handleSave();
                  }}
                >
                  Save
                </button>
              </div>
            </>
          ) : (
            <button
              onClick={handleEit2}
              className="text-blue-500 text-lg w-20 text-right"
            >
              Edit
            </button>
          )}
        </div>

        <div className="lg:flex lg:space-x-14 mt-7 ">
          <div className="flex lg:space-x-2  space-x-2">
            <h2 className="w-32 text-blue-500 text-lg">Distance</h2>
            <input
              type="text"
              name="distance"
              value={data.distance}
              onChange={handleChange}
              className=" w-56 h-10  border border-gray-300 focus:outline-none  rounded-lg p-3"
              disabled={!isEdited3}
            />
            {isEdited3 ? (
              <>
                <div className="w-48 space-x-4">
                  <button
                    onClick={() => {
                      setIsEdited3((prev) => !prev);
                      handleCancel(); // Call handleCancel function
                    }}
                    className="bg-orange-300   py-1 text-white rounded-md  focus:outline-none w-14 md:w-20 ml-4"
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-orange-300 text-white  py-1 rounded-md  focus:outline-none  w-14 md:w-20 mt-3"
                    onClick={() => {
                      setIsEdited3((prev) => !prev);
                      handleSave();
                    }}
                  >
                    Save
                  </button>
                </div>
              </>
            ) : (
              <button
                onClick={handleEit3}
                className="text-blue-500 text-lg w-20 text-right"
              >
                Edit
              </button>
            )}
          </div>{" "}
          <div className="flex md:space-x-2  lg:mt-0 mt-4 space-x-2">
            <h2 className="w-32 text-blue-500 text-lg">Time</h2>
            <input
              type="text"
              name="time"
              value={data.time}
              onChange={handleChange}
              className=" w-56 h-10  border border-gray-300 focus:outline-none  rounded-lg p-3"
              disabled={!isEdited4}
            />
            {isEdited4 ? (
              <>
                <div className="w-48 space-x-4">
                  <button
                    onClick={() => {
                      setIsEdited4((prev) => !prev);
                      handleCancel(); // Call handleCancel function
                    }}
                    className="bg-orange-300   py-1 text-white rounded-md  focus:outline-none w-14 md:w-20 ml-4"
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-orange-300 text-white  py-1 rounded-md  focus:outline-none  w-14 md:w-20 mt-3"
                    onClick={() => {
                      setIsEdited4((prev) => !prev);
                      handleSave();
                    }}
                  >
                    Save
                  </button>
                </div>
              </>
            ) : (
              <button
                onClick={handleEit4}
                className="text-blue-500 text-lg w-20 text-right"
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Description;
