"use client";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import { db } from "@/firebase";
import { doc, getDoc, updateDoc, addDoc, collection } from "firebase/firestore";
import { insertData2 } from "./data";

const Ari_Description = ({ ariDesc, ariAttri }) => {
  const [data, setData] = useState({
    sharePrice: "",
    propertyType: "",
    hotelStar: "",
    roomFees: "",
    carkParking: "",
  });

  const [checkboxes, setCheckboxes] = useState([]);

  useEffect(() => {
    //insertData2();

    setCheckboxes(ariAttri);
  }, [ariAttri]);

  const handleCheckboxChange = async (arr, index) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index].value = !updatedCheckboxes[index].value;
    setCheckboxes(updatedCheckboxes);

    await updateDoc(doc(db, "ariAttribute", arr.id), arr);
  };

  const [fetch, setFetch] = useState({});

  useEffect(() => {
    setData(...ariDesc);
  }, [ariDesc]);

  const [isEdited1, setIsEdited1] = useState(false);
  const [isEdited2, setIsEdited2] = useState(false);
  const [isEdited3, setIsEdited3] = useState(false);
  const [isEdited4, setIsEdited4] = useState(false);
  const [isEdited5, setIsEdited5] = useState(false);

  //input field
  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCancel = () => {
    console.log("hello");

    setData(fetch);
  };

  const handleSave = async () => {
    // await addDoc(collection(db, "ariDesc"), data);
    setFetch(data);
    await updateDoc(doc(db, "ariDesc", "ucaRXLiX5n17Xqjgky7z"), data);
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

  const handleEit5 = () => {
    setIsEdited5((prev) => !prev);
  };

  return (
    <>
      <Navbar />

      <h2 className="text-xl   font-bold  ml-6  md:ml-32 mt-14">Delux Room</h2>
      <main className="max-w-7xl  mx-auto    px-10 ">
        <div>
          <center>
            <div className="grid grid-cols-1 gap-x-4  lg:grid-cols-2 ">
              {checkboxes?.map((attribute, index) => (
                <div
                  key={attribute.name}
                  className="flex md:space-x-44 mt-6 justify-between"
                >
                  <h2 className="w-36 text-left">{attribute.name}</h2>
                  <div className="flex space-x-4 border-2 border-gray-500 p-2 rounded-md">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={attribute.value}
                        onChange={() => handleCheckboxChange(attribute, index)}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded  p-3"
                      />
                      <label
                        htmlFor="checkbox"
                        className="ml-2 block text-sm text-gray-900"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={!attribute.value}
                        onChange={() => handleCheckboxChange(attribute, index)}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded p-3"
                      />
                      <label
                        htmlFor="checkbox"
                        className="ml-2 block text-sm text-gray-900"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </center>
          <div className="mt-7 mb-7">
            <div className="flex md:space-x-2 space-x-2">
              <h2 className="w-32 text-blue-500 text-lg">Share Price</h2>
              <input
                type="text"
                name="sharePrice"
                value={data.sharePrice}
                onChange={handleChange}
                className="h-14 w-full border border-gray-300 focus:outline-none  rounded-lg p-3"
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
            <div className="flex md:space-x-2 space-x-2 mt-4">
              <h2 className="w-32 text-blue-500 text-lg">Property Type</h2>
              <input
                type="text"
                name="propertyType"
                onChange={handleChange}
                value={data.propertyType}
                className="h-14 w-full border border-gray-300 focus:outline-none  rounded-lg p-3"
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
            <div className="flex md:space-x-2 space-x-2  mt-4">
              <h2 className="w-32 text-blue-500 text-lg">Hotel Stars</h2>
              <input
                type="text"
                name="hotelStar"
                onChange={handleChange}
                value={data.hotelStar}
                className="h-14 w-full border border-gray-300 focus:outline-none  rounded-lg p-3"
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
            </div>

            <div className="flex md:space-x-2 space-x-2  mt-4">
              <h2 className="w-32 text-blue-500 text-lg">Room Fees</h2>
              <input
                type="text"
                name="roomFees"
                onChange={handleChange}
                value={data.roomFees}
                className="h-14 w-full border border-gray-300 focus:outline-none  rounded-lg p-3"
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

            <div className="flex md:space-x-2 space-x-2  mt-4">
              <h2 className="w-32 text-blue-500 text-lg">Car Parking</h2>
              <input
                type="text"
                name="carkParking"
                onChange={handleChange}
                value={data.carkParking}
                className="h-14 w-full border border-gray-300 focus:outline-none  rounded-lg p-3"
                disabled={!isEdited5}
              />
              {isEdited5 ? (
                <>
                  <div className="w-48 space-x-4">
                    <button
                      onClick={() => {
                        setIsEdited5((prev) => !prev);
                        handleCancel(); // Call handleCancel function
                      }}
                      className="bg-orange-300   py-1 text-white rounded-md  focus:outline-none w-14 md:w-20 ml-4"
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-orange-300 text-white  py-1 rounded-md  focus:outline-none  w-14 md:w-20 mt-3"
                      onClick={() => {
                        setIsEdited5((prev) => !prev);
                        handleSave();
                      }}
                    >
                      Save
                    </button>
                  </div>
                </>
              ) : (
                <button
                  onClick={handleEit5}
                  className="text-blue-500 text-lg w-20 text-right"
                >
                  Edit
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Ari_Description;
