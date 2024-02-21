import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { db } from "@/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { insertData } from "./data";

export default function Attribute(attribute) {
  const [checkboxes, setCheckboxes] = useState([]);

  useEffect(() => {
    //insertData
    setCheckboxes(attribute.attribute);
  }, [attribute]);

  const handleCheckboxChange = async (arr, index) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index].value = !updatedCheckboxes[index].value;
    setCheckboxes(updatedCheckboxes);

    await updateDoc(doc(db, "attribute", arr.id), arr);
  };

  return (
    <>
      <Navbar />
      <h2 className="text-xl   font-bold  ml-6  md:ml-32 mt-14">Delux Room</h2>
      <main className="max-w-7xl mx-auto px-10 ">
        <div>
          <center>
            <div className="grid grid-cols-1 gap-x-20 lg:grid-cols-2">
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
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
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
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
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
        </div>
      </main>
    </>
  );
}
