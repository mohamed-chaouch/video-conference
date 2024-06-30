import {Box, Button, IconButton, InputAdornment, TextField, Typography} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useEffect, useState } from "react";
import {Visibility, VisibilityOff, ArrowRight, Google} from '@mui/icons-material';
import { Link } from "react-router-dom";

const loadScript = (src) => {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve();
        document.body.appendChild(script);
    });
};

function CreateAccount() {

    useEffect(() => {
        loadScript('https://accounts.google.com/gsi/client').then(() => {
            window.google.accounts.id.initialize({
                client_id: "756258102097-ht8q1225lubtk4i92mh4kk59bpma9bgm.apps.googleusercontent.com",
                callback: handleCredentialResponse
            });
            window.google.accounts.id.renderButton(
                document.getElementById('googleSignInButton'),
                { theme: 'outline', size: 'large' }
            );
        });
    }, []);

    const handleCredentialResponse = (response) => {
        console.log('Encoded JWT ID token: ' + response.credential);
        // You can send this token to your server to authenticate the user
    };

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);

    const handleGoogleSignIn = () => {
        window.google.accounts.id.prompt();
    };

    return(
        <Box boxShadow={"2px 2px 2px solid black"} borderRadius={"32px"} bgcolor="#80007F" width="25%" position="absolute" right="37.5%" left="37.5%" top="2%" p="30px 40px">
            <Box display="flex" alignItems={"center"} width="51%" margin={"auto"} pb="50px">
                <img src="images/zoom-logo.jpg" alt="vidéo conférence logo" width="48px" height="48px" />
                <Typography textAlign="center" pl="16px" color="white" variant="body1">Video Conference</Typography>
            </Box>
            <Box textAlign={"center"}>
                <Typography color="white" variant="h6" fontWeight={"bold"}>Create your account</Typography>
                <Typography color={grey[400]}>Welcome! Please fill in the details to get started.</Typography>
            </Box>

            <Box textAlign={"center"}>
                <IconButton id="googleSignInButton" onClick={handleGoogleSignIn}>
                    <Google />
                </IconButton>
            </Box>
            <Box display="flex" alignItems="center"  color={grey[400]}>
                <hr width="35%" /> <Typography variant="body1">or</Typography> <hr width="35%" />
            </Box>
            <Box mt="16px">
                <Typography variant="body1" color="white">Username</Typography>
                <TextField fullWidth size="small" type="text"
                    sx={{
                        input: {
                            color: 'black',
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'black',
                            },
                            '&:hover fieldset': {
                                borderColor: 'balck',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'black',
                            },
                        },
                    }}
                />
            </Box>
            <Box mt="16px">
                <Typography variant="body1" color="white">Email Adress</Typography>
                <TextField fullWidth size="small" type="email" sx={{
                    input: {
                        color: 'black',
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'black',
                        },
                        '&:hover fieldset': {
                            borderColor: 'balck',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'black',
                        },
                    },
                }}  />
            </Box>
            <Box mt="16px">
                <Typography variant="body1" color="white">Password</Typography>
                <TextField 
                    sx={{
                        input: {
                            color: 'black',
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'black',
                            },
                            '&:hover fieldset': {
                                borderColor: 'balck',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'black',
                            },
                        },
                    }}
                    size="small"
                    fullWidth 
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                    sx={{ color:"white" }}
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </Box>
            <Box mt="16px" width="100%" textAlign={"center"}>
                <Button variant="contained" color="primary" sx={{ width:"100%",  display:"flex", alignItems:"center" }}>
                    <Typography variant="body1" color="inherit" fontSize="14px">Continue</Typography>
                    <ArrowRight />
                </Button>
            </Box>

            <Box mt="32px" display="flex" alignItems="center" justifyContent={"center"}>
                <Typography variant="body1" fontSize="14px" color={grey[400]} pr="12px">Already have an account?</Typography>
                <Link to="/" style={{ textDecoration:"none", color:"blue" }} >Sign in</Link>
            </Box>
            <Typography variant="body1" textAlign={"center"} mt="16px">Secured</Typography>
        </Box>
    )
}

export default CreateAccount;