import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { convertBase64 } from "../Helper/InputValidation";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
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
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { HandleDelete } from "../Helper/CredOparations.jsx";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import ImgUplode from "./ImgUplode";
import LinearProgress from '@mui/material/LinearProgress';

const information = () => {
  const initialvalue = {
    category: "",
    name: "",
    place: "",
    rating: "",
    amount: "",
    discription: "",
  };
  const [data, setData] = React.useState([]);
  const [inputdata, setInputdata] = React.useState(initialvalue);
  const [error, setError] = React.useState();
  const [loding, setloding] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [delData, setdelData] = React.useState({});



  React.useEffect(() => {
    fechData();
  }, []);
  const fechData = async () => {
    if (data) {
      await axios
        .get("http://localhost:5000/admin/getallDeteals")
        .then((response) => {
          setData(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const handleChange = async (event) => {
    setInputdata({ ...inputdata, [event.target.name]: event.target.value });
  };


  const HandleSubmit = (e) => {
   
    e.preventDefault();
   
    setloding(true);
    
    if (!error) {
      setTimeout(() => {
        setError(
         
         validateAdminData({ inputdata }, setInputdata, initialvalue, fechData ),
         
        
        );
     
        setloding(false);
        fechData();
      }, 1000);
    }
  };


  function imagehandleChange(event) {

    setFile({...file,preview:URL.createObjectURL(event.target.files[0]),profilImg:event.target.files[0]});
  }
 
 
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
          inputdata.category ? inputdata.category : `----------`
        } ${""} INFPRMATION `}
        <Toaster />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Paper>
            <form onSubmit={HandleSubmit  }>
              <FormControl sx={{ m: 1, minWidth: 120, gap: 2 }} size="small">
                <InputLabel id="demo-select-small">Category</InputLabel>
               
                <Select
                  key={"1"}
                  required={true}
                  id="demo-select-small"
                  label="Category"
                  name="category"
                  value={inputdata.category}
                  onChange={handleChange}
                >
                  <MenuItem value={"Hotels"}>Hotels</MenuItem>
                  <MenuItem value={"Appartments"}>Appartments</MenuItem>
                  <MenuItem value={"Resorts"}>Resorts</MenuItem>
                </Select>

                <TextField
                  value={inputdata.name}
                  required={true}
                  type={"text"}
                  label={` Name `}
                  id="outlined-required"
                  size="small"
                  name="name"
                  onChange={handleChange}
                />
                <TextField
                  label={"Place"}
                  id="outlined-size-small"
                  size="small"
                  name="place"
                  value={inputdata.place}
                  required={true}
                  onChange={handleChange}
                />
                <Rating
                key={inputdata.rating}
                  size="small"
                  onChange={handleChange}
                  value={inputdata.rating}
                  name="rating"
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
                    name="amount"
                    required={true}
                    onChange={handleChange}
                    value={inputdata.amount}
                  />
                </FormControl>
                <TextField
                  required={true}
                  id="filled-multiline-static"
                  label="Discription"
                  multiline
                  rows={4}
                  placeholder="Discription"
                  variant="filled"
                  name="discription"
                  onChange={handleChange}
                  value={inputdata.discription}
                />
                {/* <Stack>
                  <Avatar
                    alt="Semy Sharp"
                    src={file.preview&&file.preview}
                    sx={{ width: 50, height: 50, objectFit: "cover" }}
                  />
                </Stack> */}

                {/* <Button
                  onChange={(e) => {
                    imagehandleChange(e)
                   
                  }}
                  aria-label="upload picture"
                  component="label"
                  variant="contained"
                  endIcon={<AddPhotoAlternateIcon />}
                >
                  Cover image
                  <input hidden accept="image/*" multiple type="file" name="file" />
                </Button> */}
                <LoadingButton
                  type="submit"
                  size="small"
                  loading={loding}
                  loadingIndicator="Loading…"
                  variant="outlined"
                  endIcon={<CloudUploadIcon />}
                >
                  <span>UPLODE</span>
                </LoadingButton>
              </FormControl>
            </form>
          </Paper>
        </Box>
       
      </div>
      {/* Uploded data in table */}
      <div
        style={{
          width: "70%",
          maxHeight: 500,
          overflowY: "scroll",
          overflowX: "hidden",
        }}
      >
        <Typography sx={{ mb: 2 }}> {`CATOGORY `}</Typography>

        {data &&
          data.map((data, i) => {
            return (
              <>
              <LinearProgress variant="determinate" value={50} />
                <Accordion key={i}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography
                      sx={{ width: "20%", fontSize: 15, flexShrink: 0 }}
                    >
                      {``}
                      {data.category}
                    </Typography>
                    <Stack sx={{ width: "15%", fontSize: 15, flexShrink: 0 }}>
                    <img   style={{ width: 40, height: 40 }} width={"50%"} src={`http://localhost:5000/${data.profilImg}`} alt="img"  />
                     
                     
                    </Stack>

                    <Typography
                      sx={{ width: "16%", fontSize: 15, flexShrink: 0 }}
                    >
                      {``}
                      {data.name}
                    </Typography>
                    <Typography
                      sx={{ width: "16%", fontSize: 15, flexShrink: 0 }}
                    >
                      {``}
                      {data.place}
                    </Typography>

                    <Typography
                      sx={{ width: "16%", fontSize: 15, flexShrink: 0 }}
                    >
                      {data.amount}
                    </Typography>
                    <Typography
                      sx={{ width: "21%", fontSize: 15, flexShrink: 0 }}
                    >
                      <Rating size="small" readOnly value={data.rating} />
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{data.discription}</Typography>
                    <IconButton
                      color="error"
                      variant="contained"
                      aria-label="delete"
                    >
                      <DeleteIcon
                        onClick={() => {
                          setOpen(true);
                          setdelData(data);
                        }}
                      />
                    </IconButton>
                    <IconButton
                      onClick={() => setInputdata(data)}
                      color="warning"
                      variant="contained"
                      aria-label="delete"
                    >
                      <EditIcon />
                    
                     
                    </IconButton>
                     
                  </AccordionDetails> 
                     
                </Accordion>
              </>
            );
          })}
      </div>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"are you sure you want to delete this item?"}
        </DialogTitle>
        {/* <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          Let Google help apps determine location. This means
                          sending anonymous location data to Google, even when
                          no apps are running.
                        </DialogContentText>
                      </DialogContent> */}
        <DialogActions>
          <Button
            color="success"
            autoFocus
            onClick={() => {
              setOpen(false), setdelData({});
            }}
          >
            Disagree
          </Button>
          <Button
            color="error"
            onClick={() => HandleDelete(delData, setOpen, fechData)}
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default information;
