import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';
import Description from "@/components/Description";



const Desc = ({desc}) => {
  return (
    <>
     
     <Description  desc={desc}  />
            </>

  )
}

export default Desc;



export async function getServerSideProps(context) {
  try {
    // Fetch data from Firestore
    const querySnapshot = await getDocs(collection(db, 'desc'));

    
    // Extract data from the query snapshot
    const desc = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));


 
console.log(desc);
    // Pass fetched data as props
    return {
      props: { desc },
    
    };
  } catch (error) {
    console.error('Error fetching data from Firestore:', error);
    return {
      props: { desc: [] }, // Return empty array or handle error
    };
  }
}

