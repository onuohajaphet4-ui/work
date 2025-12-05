import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  InputAdornment,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { Visibility, VisibilityOff, LockOutlined } from "@mui/icons-material";
import { motion } from "framer-motion";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'
// import img from '../assets/download.jpeg'
import video from '../assets/vi.mp4'


const Login = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword ] = useState ('')
  const [loading, setLoading] = useState (false)
  const [error, setError] = useState()
  const handlelogin = async () => {
    setLoading(true)
    setError('')
    try{
        const res = await
    axios.post('https://classwork-backend-yhli.onrender.com/api/users/login' , {email,password})
        console.log(res)
        navigate('/dmin')
       
        
    }catch(error){
        console.error(error)
        setError(error?.res?.data?.error)
    }finally{
        setLoading(false)
       }
 }

  

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "97 0.5%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        marginLeft: "auto",
        marginRight: "auto",
        p: 2,
      }}
    >

      <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "110%",
                      objectFit: "cover",
                      zIndex: -1,
                      backgroundColor: "rgba(0,0,0,0.65)", 
              }}
            >
              <source src={video} type="video/mp4" />
          </video>


       <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.65)",
          zIndex: 0,
          height: "110%",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Paper
          elevation={10}
         
           sx={{
          position: "relative",
          zIndex: 1,
          width: "420px",
          p: 4,
          color: "#fff",
          background: "rgba(43, 41, 41, 0.52)",
            backdropFilter: "blur(7px)",
            borderRadius:'10px',
             boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
        
          }}
        >
          {/* Lock Icon */}
          <Box
            sx={{
              width: 80,
              height: 60,
              borderRadius: "20%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mx: "auto",
              mb: 2,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
            }}
          >
            <LockOutlined sx={{ fontSize: 40, color: "#fff" }} />
          </Box>

          {/* Title */}
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ mb: 3, color: "white" }}
          >
         { (!email) ? 'wrong email' : "Login"}

        
          </Typography>

          {/* Email Input */}
          <TextField
            fullWidth
            label="Usernaame"
            type="email"
            variant="outlined"
            value={email}
            onChange={(e) =>setEmail(e.target.value)}
            sx={{

                input:{color:"white"},
        
              mb: 2,
              "& .MuiOutlinedLabel-root": { color: "white"},
              "& .MuiOutlinedLabel-root .Mui-focused ":{color:"white"},
              "& .MuiOutlinedInput-root": { borderRadius: "12px", color:"white",
                "& fieldset":{borderColor: 'white'},
              "&:hover fieldset":{ borderColor: 'white' },
              "&.Mui-focused fieldset":{borderColor: 'transparent'},
              
              },
            }}
          />

          {/* Password Input */}
          <TextField
            fullWidth
            label="Password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            value={password}
            onChange={(e) =>setPassword(e.target.value)}
            sx={{
               
              mb: 3,
              "& .MuiOutlinedInput-root": { borderRadius: "12px"   , 
              "& fieldset":{borderColor: 'white'},
              "&:hover fieldset":{ borderColor: 'white' },
              "&.Mui-focused fieldset":{borderColor: 'transparent'}
               },
              
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Login Button */}
          <Button
            fullWidth
            variant="contained"
            size="large"
            onClick={handlelogin}
            sx={{
              py: 1.4,
              fontWeight: "bold",
              borderRadius: "12px",
              textTransform: "none",
              fontSize: "1rem",

              backgroundColor:"black",
              boxShadow:"0 10px 30px rgba(0, 0, 0, 0.3)",
              "&:hover":{
                transform:"translatey(-10px)"
              }
            }}
          >
            
          
             {loading ? <CircularProgress size={24} /> : "Login"}
          </Button>
          
          


            
             

          
        </Paper>
      </motion.div>
    </Box>
  );
};

export default Login;