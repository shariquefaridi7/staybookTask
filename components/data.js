import { db } from '@/firebase';
import { addDoc, collection } from 'firebase/firestore';


export const insertData = async () => {
  try {
    
    const attributeCollection = collection(db, 'attribute');

  
    const data = [
      { name:"Air Conditioning",
       value:false
     },
      { name:"Room Service",
      value:
       false
     },
      { name:"Hot Tube",
      value:false },
      {name: "Fitness Center",
      value:false },
      { name:"Child Friendly",
      vaue:false },
      {name: "Laundry Service",
      value:false },
      { name:"Restaurant",value:
       false },
      { name:"Swimming Pool",
      value: false },
      { name:"Beach Access",
      value: false },
      { 
        name:"Free BreakFast",value: false
     },
    ];

   
    for (const item of data) {
      await addDoc(attributeCollection, item);
    }

    
  } catch (error) {
    console.error('Error adding document: ', error);
  }
};

export const insertData2 = async () => {
  try {
    
    const attributeCollection = collection(db, 'ariAttribute');

  
    const data = [
      { name:"Availability",
       value:false
     },
      { name:"Inventory",
      value:
       false
     },
      { name:"Tax Fee",
      value:false },
      {name: "Hotel Website Rating",
      value:false },
      { name:"Hotel Availability",
      vaue:false },
      {name: "Laundry Service",
      value:false },
   
    ];

   
    for (const item of data) {
      await addDoc(attributeCollection, item);
    }

    
  } catch (error) {
    console.error('Error adding document: ', error);
  }
};
