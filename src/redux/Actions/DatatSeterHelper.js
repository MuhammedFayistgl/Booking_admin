import { toast } from "react-hot-toast";

// Data setter funtions
export const CatagoryHelper = (state, { payload }) => {
  payload ? (state.inputs.category = payload) : toast.error("Please fILL Catagory Option !");
};
export const NameHelper = (state, { payload }) => {
  {
    payload ? (state.inputs.name = payload) : toast.error("Please fILL Name Option !");
  }
};
export const PlaceHelper = (state, { payload }) => {
  {
    payload ? (state.inputs.place = payload) : toast.error("Please fILL Place Option !");
  }
};
export const RateHelper = (state, { payload }) => {
  {
    payload ? (state.inputs.rating = payload) : toast.error("Please fILL Rate Option !");
  }
};
export const AmountHelper = (state, { payload }) => {
  {
    payload ? (state.inputs.amount = payload) : toast.error("Please fILL Amount Option !");
  }
};
export const DiscriptionHelper = (state, { payload }) => {
  {
    payload ? (state.inputs.discription = payload) : toast.error("Please fILL Discription Option !");
  }
};
export const ProfilimageURLHelper = (state, { payload }) => {
  {
    payload ? (state.inputs.profilImg = payload) : toast.error("Please fILL ProfilimageURL Option !");
  }
};
export const RestHelper = (state, payload) => {
  state.inputs = {
    name: "",
    category: "",
    place: "",
    rating: 0,
    amount: '',
    discription: "",
  }
}
