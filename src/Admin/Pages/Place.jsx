import { Autocomplete, Box, Button, Card, Stack, TextField, Typography } from "@mui/material"
import React from "react"



const Place = () => {
    return (
        <Box sx={{ width: '100%', height: "100%", display: "flex", alignItems: "center", justifyContent: 'center' }}>
            <Card variant="outlined" sx={{ width: 500, height: 500 ,mt:10}}>
                <Typography variant="h4" sx={{textAlign:"center",mt:2,fontSize:"20px"}}>Enter Place</Typography>
                <Stack direction="row" sx={{ gap: "5px", mt: 5, px: 3 }}>
                    <TextField id="standard-basic" label="Place" variant="standard" />
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={districts}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Districts" variant="standard" />}
                    />
                    <div></div>
                </Stack>
                <Button sx={{display:"block",margin:"25px auto 0"}} variant="contained">Contained</Button>
            </Card>
        </Box>
    )
}


const districts = [
    {
        label:"Alappuzha"
    },
    {
        label:"Ernakulam"
    },
    {
        label:"Kollam"
    }
]

export default Place