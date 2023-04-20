import toast from "react-hot-toast";
import axios from "axios";
/** Admin uploded data validation */

export const validateAdminData = ({ inputdata },setInputdata,initialvalue,fechData,) => {
  const { amount, category, discription, name, place, rating ,profilImg } = inputdata;
  // console.log(inputdata.constructor === Object);
  console.log(inputdata,'..............................');
  try {
    if (category === undefined) {
      toast.error("category is required");
    } else if (name == "") {
      return toast.error("Nams is required");
    } else if (/[0-9]/.test(name)) {
      toast.error("number not allowed in name field");
    } else if (/[0-9]/.test(place)) {
      return toast.error("number not allowed in place field");
    } else if (rating === "") {
      return toast.error(`inglude rating your ${name}`);
    } else if (amount === "") {
      return toast.error(`pleas add your Amount  `);
    } else if (discription === "") {
      return toast.error(`pleas add your Discription `);
    } else if (profilImg === "") {
      return toast.error(`pleas add your Cover image`);
    } else {
      
    
      axios
        .post("http://localhost:5000/admin//uplodehotelDeteals", inputdata )
       
        
        .then(res => { // then print response status
          console.warn(res);
          if(res.data.success === 1){
            setSuccess("Image upload successfully");
            fechData()

          }
    
        })
      
    }
  } catch (error) {
    toast.error(error); 
  }
};

export const convertBase64 = async (file) => {
 return new Promise((resolve, reject) => {
  const filereder = new FileReader()
  filereder.readAsDataURL(file)
  
  filereder.onload = () => resolve(filereder.result)
  filereder.onerror = (error) => reject(error)
 })
}

