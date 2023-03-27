import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/system";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  InputAdornment,
  OutlinedInput,
  Paper,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { validateAdminData } from "../Helper/InputValidation";
import { Toaster } from "react-hot-toast";
import axios from "axios";

const information = () => {
  const [data, setData] = React.useState([]);
  console.log(data);
  React.useEffect(() => {
    axios
      .get("http://localhost:5000/admin/uplodehotelDeteals")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [data]);

  const [inputdata, setInputdata] = React.useState({
    name: "",
    place: "",
    rating: "",
    amount: "",
    discription: "",
  });

  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState();

  const handleChange = (event) => {
    setInputdata({ ...inputdata, [event.target.name]: event.target.value });
  };
  const HandleSubmit = () => {
    console.log("error", error);
    setError(validateAdminData({ inputdata }));
  };

  return (
    <div
      style={{
        marginTop: 15,
        display: "flex",
        justifyContent: "space-between",
        gap: 15,
      }}
    >
      {/* Upload informations for api  */}

      <div>
        {`${
          inputdata.catogory ? inputdata.catogory : `----------`
        } ${""} INFPRMATION`}
        <Toaster />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Paper>
            <FormControl sx={{ m: 1, minWidth: 120, gap: 2 }} size="small">
              <InputLabel id="demo-select-small">Category</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                label="Category"
                onChange={handleChange}
                name="category"
              >
                <MenuItem value={"Hotels"}>Hotels</MenuItem>
                <MenuItem value={"Appartments"}>Appartments</MenuItem>
                <MenuItem value={"Thirty"}>Thirty</MenuItem>
              </Select>

              <TextField
                type={"text"}
                label={` Name `}
                id="outlined-size-small"
                size="small"
                name="name"
                onChange={handleChange}
                required={true}
              />
              <TextField
                label={"Place"}
                id="outlined-size-small"
                size="small"
                name="place"
                onChange={handleChange}
                required={true}
              />
              <Rating
                onChange={handleChange}
                name="rating"
                value={inputdata && inputdata.rating}
                required={true}
              />
              <FormControl fullWidth sx={{ mt: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Amount
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  label="Amount"
                  size="small"
                  type="number"
                  onChange={handleChange}
                  name="amount"
                  required={true}
                />
              </FormControl>
              <TextField
                id="filled-multiline-static"
                label="Discription"
                multiline
                rows={4}
                placeholder="Discription"
                variant="filled"
                name="discription"
                onChange={handleChange}
                required={true}
              />
              <LoadingButton
                size="small"
                loading={false}
                loadingIndicator="Loading…"
                variant="outlined"
                onClick={HandleSubmit}
                required={true}
              >
                <span>UPLODE</span>
              </LoadingButton>
            </FormControl>
          </Paper>
        </Box>
      </div>
      {/* Uploded data in table */}
      <div style={{width:'70%'}}>
        <Typography sx={{ mb: 2 }}> {`CATOGORY `}</Typography>

        {data &&
          data.map((data, i) => {
            return (
              <Accordion key={i} expanded={open} onClick={() => setOpen(!open)}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: "25%", flexShrink: 0 }}>
                    {``}
                    {data.name}
                  </Typography>
                  <Typography sx={{ width: "25%", flexShrink: 0 }}>
                    {``}
                    {data.place}
                  </Typography>
                  <Typography sx={{ width: "25%", flexShrink: 0 }}>
                    {data.amount}
                  </Typography>
                  <Typography sx={{ width: "25%", flexShrink: 0 }}>
                    <Rating  value={data.rating} />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{data.discription}</Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
      </div>
    </div>
  );
};

export default information;
