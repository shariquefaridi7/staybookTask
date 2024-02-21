import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { db } from "@/firebase";
import { doc, getDoc, updateDoc, addDoc, collection } from "firebase/firestore";

const Address = ({ address }) => {
  const [fetch, setFetch] = useState({});
  const [data, setData] = useState({
    address: "",
    city: "",
    state: "",
    contact: "",
    email: "",
  });

  const [isEdited1, setIsEdited1] = useState(false);
  const [isEdited2, setIsEdited2] = useState(false);
  const [isEdited3, setIsEdited3] = useState(false);
  const [isEdited4, setIsEdited4] = useState(false);
  const [isEdited5, setIsEdited5] = useState(false);

  useEffect(() => {
    setData(...address);
    setFetch(...address);
  }, [address]);

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCancel = () => {
    setData(fetch);
  };

  const handleSave = async () => {
    // await addDoc(collection(db, "address"), data);

    setFetch(data);
    await updateDoc(doc(db, "address", "JpW8bHQWKKFaXqEN7wOu"), data);
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
      <main className="max-w-7xl  mx-auto mt-10  px-10 ">
        <div className="mt-7 mb-7">
          <div className="flex md:space-x-2 space-x-2">
            <h2 className="w-32 text-blue-500 text-lg">Address</h2>
            <textarea
              type="text"
              name="address"
              value={data.address}
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
                    className="bg-orange-300 text-white  py-1 rounded-md  focus:outline-none w-14 md:w-20 mt-3"
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
                {" "}
                Edit
              </button>
            )}
          </div>

          <div className="flex md:space-x-2 space-x-2   mt-6">
            <h2 className="w-32 text-blue-500 text-lg">City</h2>
            <input
              type="text"
              name="city"
              value={data.city}
              onChange={handleChange}
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

          <div className="flex md:space-x-2 space-x-2   mt-6">
            <h2 className="w-32 text-blue-500 text-lg">State</h2>
            <input
              type="text"
              name="state"
              value={data.state}
              onChange={handleChange}
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

          <div className="flex md:space-x-2 space-x-2   mt-6">
            <h2 className="w-32 text-blue-500 text-lg">Contact</h2>
            <input
              type="text"
              name="contact"
              value={data.contact}
              onChange={handleChange}
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

          <div className="flex md:space-x-2 space-x-2   mt-6">
            <h2 className="w-32 text-blue-500 text-lg">Email</h2>
            <input
              type="text"
              name="email"
              value={data.email}
              onChange={handleChange}
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
      </main>
    </>
  );
};

export default Address;
