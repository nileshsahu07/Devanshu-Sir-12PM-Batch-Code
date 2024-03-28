import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

function MuiTest() {

    let Div = styled(Box)({
        backgroundColor:"black",
        color:"white"
    })

    let Heading = styled(Typography)({
        fontSize:"100px"
    })



    return ( 
        <>
            <Div>
                <Heading variant="h2">Hello Class</Heading>
                <Typography variant="h4" sx={{backgroundColor:"yellow",color:"red"}}>My name is Nilesh</Typography>
            </Div>
        </>
     );
}

export default MuiTest;