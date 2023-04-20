import axios from "axios";
import toast from "react-hot-toast";
/** delete */
export const HandleDelete = ({ _id }, setOpen, fechData) => {
  setOpen(false);
  console.log("deleOne", _id);
  if (_id) {
    axios
      .post("http://localhost:5000/admin/deleteoneDeteals", { _id })
      .then((response) => console.log("ax res", response), fechData());
  } else {
    console.log("the data to be empty !");
  }
};
/** Delete image Handler */
export const DeleteimageHandler = (deletedData) => {
  console.log("deletedID recived", deletedData);
  if (deletedData.id == "" || deletedData.imgName === undefined) {
    return toast.error("you selected feald not found !!");
  }
  axios
    .post("http://localhost:5000/admin/deleteimage", { deletedData })
    .then((response) => {});
};

export const EditimageHandler = (editData) => {
  console.log("editID recived", editData);
  if (editData.id == "" || editData.imgName === undefined) {
    return toast.error("you selected feald not found !!");
  }
  axios
    .post("http://localhost:5000/admin/editimage", { editData })
    .then((response) => {});
};

export const getalldatafun = async () => {

  axios.get("http://localhost:5000/admin/getallDeteals").then((responce) => {
    return responce.data.data;
  })
    .catch((error) => {
      console.log(error);
    });
};
