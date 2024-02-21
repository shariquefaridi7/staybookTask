import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';

import Ari_Description from "@/components/Ari_Description";

const Ari_Desc = ({ariDesc,ariAttri}) => {
     
 
     
   

  return (

    <>

     <Ari_Description  ariDesc={ariDesc}  ariAttri={ariAttri}/>
    </>
   
  )
}

export default Ari_Desc;



export async function getServerSideProps(context) {
  try {
    // Fetch data from Firestore

   
       //check box
    const ariAttribute = await getDocs(collection(db, 'ariAttribute'));

    
  
    const ariAttri = ariAttribute.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));


    console.log(ariAttri);

    // input filld
    const querySnapshot = await getDocs(collection(db, 'ariDesc'));

    

    const ariDesc = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));




 
console.log(ariDesc);
    // Pass fetched data as props
    return {
      props: { ariDesc ,ariAttri},
    
    };
  } catch (error) {
    console.error('Error fetching data from Firestore:', error);
    return {
      props: { ariDesc: [] }, // Return empty array or handle error
    };
  }
}