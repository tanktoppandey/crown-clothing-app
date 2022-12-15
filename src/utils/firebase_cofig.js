import { initializeApp } from 'firebase/app'
import { getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider,onAuthStateChanged, signOut} from 'firebase/auth'
import {collection, writeBatch ,getFirestore ,doc, query, getDocs}  from 'firebase/firestore'


const firebaseConfig = {

    apiKey: "AIzaSyAxgtn_xjypi0epo6UKQP-3_HXDsLvrLtI",
  
    authDomain: "react-app-tutorialdb.firebaseapp.com",
  
    projectId: "react-app-tutorialdb",
  
    storageBucket: "react-app-tutorialdb.appspot.com",
  
    messagingSenderId: "815935647354",
  
    appId: "1:815935647354:web:1d342233890b2df88515c3",
  
    measurementId: "G-9GL2JJX9X9"
  
  };

  
  
  const firebaseApp = initializeApp(firebaseConfig)
  const db = getFirestore()


  export const addcollectionAndDocument=async(collectionKEY,object)=>{
        
    const collectionRef= collection(db,collectionKEY)
    const batch= writeBatch(db)

    object.forEach(
      (object)=>{
        const docref= doc(collectionRef,object.title.toLowerCase())
        batch.set(docref,object)
      }
    )

    await batch.commit()
    console.log('succesfull transaction')
    
  }

  export const getCategoriesAndDocument=async()=>{
     const collectionref= collection(db,'catagories')

     const q= query(collectionref)
     const querrySnapshot = await getDocs(q)
     const catagoryMap = querrySnapshot.docs.reduce((acc,docSnapshot)=>{
      const {title,items} = docSnapshot.data();
      acc[title.toLowerCase()]=items;
      return acc
     },{})

     return catagoryMap
  }

  const providers= new GoogleAuthProvider();
  
  providers.setCustomParameters(
    {
        prompt:"select_account"
    }
  )

  export const auth = getAuth();
  export const SignInGoogle=()=>signInWithPopup(auth,providers);
  export const SigninwithGoogleRedirect=()=>signInWithRedirect(auth,providers)

  export const AuthStatechangeListner=(callback)=>onAuthStateChanged(auth,callback)
  export const SignOutUser=()=>{
       signOut(auth);
  }
