import { doc, getDoc,collection } from "firebase/firestore/lite"
import { FirebaseDB } from "../../../firebase/config"

export const getTypeDataBase = async() =>{

    const document = doc(collection(FirebaseDB,"tiposDeCasos/Hardware/PC"))
    const gD = await getDoc(document);

    // collection(FirebaseDB,"tiposDeCasos/Hardware/PC/ErrorDiscoDuro")
    // FirebaseDB,"tiposDeCasos/Hardware/PC/ErrorDiscoDuro"


    const typeCase = gD.data();
    
    console.log(typeCase)
    

}