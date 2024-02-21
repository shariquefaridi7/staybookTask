import Address from '@/components/Address';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';



const HotelAddress = ({address}) => {
  return (
    <Address address={address}/>
  )
}

export default HotelAddress;


export async function getServerSideProps(context) {
    try {
      // Fetch data from Firestore
      const querySnapshot = await getDocs(collection(db, 'address'));

      
      // Extract data from the query snapshot
      const address = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
  
  
   
  console.log(address);
      // Pass fetched data as props
      return {
        props: { address },
      
      };
    } catch (error) {
      console.error('Error fetching data from Firestore:', error);
      return {
        props: { attribute: [] }, // Return empty array or handle error
      };
    }
  }