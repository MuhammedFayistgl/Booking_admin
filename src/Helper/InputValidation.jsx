import toast from "react-hot-toast";
import axios from "axios";
/** Admin uploded data validation */

export const validateAdminData = ({ inputdata }) => {
  const { amount, category, discription, name, place, rating } = inputdata;
  // console.log(inputdata.constructor === Object);
  console.log(inputdata);
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
    } else {
      axios
        .post("http://localhost:5000/admin/uplodehotelDeteals", inputdata)
        .then(toast.success(`${category} Data uploaded successfully`));
    }
  } catch (error) {
    toast.error(error);
  }
};
