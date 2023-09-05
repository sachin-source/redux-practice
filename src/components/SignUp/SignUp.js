
import { Paper, Button } from "@mui/material";
import CustomTextfield from "../CommonComponents/CustomTextField";


const SignUp = () => {

    return (
        <>
            <div className="half" >
                <Paper className="signUp left col" variant={"outlined"} >
                    <CustomTextfield label="Email" fullWidth variant="standard" />
                    <CustomTextfield label="Password" fullWidth variant="standard" />
                    <CustomTextfield label="Password" fullWidth variant="standard" />
                    <div className="remember-me" >
                        <input type="checkbox" id="checkbox" />
                        <label>Remember Me</label>
                    </div>
                    <Button variant="contained"  style={{ backgroundColor: '#000' }} >Sign Up</Button>
                </Paper>
            </div>
        </>
    );
};

export default SignUp;