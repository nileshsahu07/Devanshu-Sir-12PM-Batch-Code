import {Button,ButtonGroup} from "@mui/material"
import GoogleIcon from '@mui/icons-material/Google';
import { IconButton } from "@mui/material";
import AddReactionIcon from '@mui/icons-material/AddReaction';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
// import LoadingButton from "@mui/lab"
// import {SaveIcon} from "@mui/icons-material"


export default function ButtonUsage(){
    return(
        <>
            <Button variant="contained" href="http://google.in" color="error" size="small" startIcon={<GoogleIcon/>}>Hello Google</Button>

            <IconButton color="primary">
                <AddReactionIcon/>
                <FingerprintIcon/>
            </IconButton> 

            <ButtonGroup variant="contained" sx={{margin:"20px"}} orientation="vertical">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
        {/* 
            <LoadingButton loading loadingPosition="Start" startIcon={<SaveIcon/>}>
            Save
            </LoadingButton> */}

            

        </>
    )
}
