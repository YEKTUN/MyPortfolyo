import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage, clearError, setResultData } from "../redux/SendMessageSlice";
import type { AppDispatch } from "../redux/store";
import type { DataError, DataData } from "../redux/SendMessageSlice";
import { useSnackbar } from "notistack";
import { CircularProgress } from "@mui/material";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const dispatch: AppDispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const errorMessages: DataError | null = useSelector(
    (state: any) => state.sendMessage.error
  );
  const data: DataData | null = useSelector(
    (state: any) => state.sendMessage.data
  );
  const loading: boolean = useSelector(
    (state: any) => state.sendMessage.loading
  );
  const resultData: boolean = useSelector(
    (state: any) => state.sendMessage.resultData
  );

  const handleMessageCapitalize = (value: string) => {
    const capitalizedMessage = value.charAt(0).toUpperCase() + value.slice(1); // İlk harfi büyük yap
    setMessage(capitalizedMessage);
    dispatch(clearError());
   
  };

  useEffect(() => {
    if (data?.result) {
      setName("");
      setEmail("");
      setMessage("");
     
    
      if (resultData) {
        enqueueSnackbar("Form suscessfully sent", {
          variant: "success", 
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
          autoHideDuration: 1500,
        })
        
      }
      dispatch(setResultData(false));
     
    }
  }, [data?.result,resultData ,dispatch]);
  console.log("loading",loading);
  console.log("resultData",resultData);
  

  return (
    <Box className="flex  flex-col justify-center items-center w-full ">
      <Box className="flex w-[500px] justify-start items-start">
        <h1 className="text-4xl font-semibold mb-2 ml-2 border-b-2 border-black text-[#010100]">
          For Contact
        </h1>
      </Box>
      <Box
        sx={{ "& > :not(style) ": { m: 1 } }}
        className="flex flex-col w-[500px] border-2 bg-yellow-200 rounded-2xl"
      >
       <Box className="flex justify-center items-center">
       <CircularProgress
        className="text-center"
          sx={{ display: loading? "block " : "none" }}
          color="inherit"/>
       </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="Name"
            variant="standard"
            error={errorMessages?.errorMessage.name ? true : false}
            helperText={errorMessages?.errorMessage.name}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              dispatch(clearError()); // Hataları temizle
            }}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <MailOutlineIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            helperText={errorMessages?.errorMessage.email || data?.errorMessage}
            id="input-with-sx"
            label="Email"
            variant="standard"
            value={email}
            error={
              errorMessages?.errorMessage.email || data?.errorMessage
                ? true
                : false
            }
            onChange={(e) => {
              setEmail(e.target.value);
              dispatch(clearError()); // Hataları temizle
            }}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <TextareaAutosize
            value={message}
            onChange={(e) => {
              handleMessageCapitalize(e.target.value); // Hataları temizle
            }}
            autoCapitalize="sentences"
            minRows={6}
            maxLength={300}
            placeholder="Your message"
            className="border-none w-full bg-gray-500 placeholder:text-zinc-50 p-2 text-emerald-100 rounded-lg"
            aria-placeholder="Your message"
            style={{ width: "100%" }}
          />
        </Box>
        {errorMessages?.errorMessage?.message?.[0] && (
          <p className="text-red-500">
            {errorMessages.errorMessage.message[0]}
          </p>
        )}
        <Box className=" w-full flex items-center justify-center  pr-2 ">
          <Button
            onClick={() => {
             
              dispatch(sendMessage({ name, email, message }));
            }}
            className="w-[200px]   "
            variant="contained"
            sx={{ backgroundColor: "#769B45" }}
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
