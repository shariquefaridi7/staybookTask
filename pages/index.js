import Attribute from '@/components/Attribute';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';



const Home = ({attribute}) => {
 
  return (
     <Attribute  attribute={attribute}/>
  )
}

export default Home;

export async function getServerSideProps(context) {
  try {
    // Fetch data from Firestore
    const querySnapshot = await getDocs(collection(db, 'attribute'));

    
    // Extract data from the query snapshot
    const attribute = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));


 

    // Pass fetched data as props
    return {
      props: { attribute },
    
    };
  } catch (error) {
    console.error('Error fetching data from Firestore:', error);
    return {
      props: { attribute: [] }, // Return empty array or handle error
    };
  }
}