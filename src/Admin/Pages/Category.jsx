import { Box, Button, Card, Dialog, ListItemButton, ListItemText, Paper, Stack, Typography } from "@mui/material"
import React from "react"



const Category = ()=>{
    return(
        <Box sx={{width:"100%", height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <Card>
                <Stack direction="column" >
                <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Teacher" />
</ListItemButton>
                <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Student" />
</ListItemButton>
                <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Hirer" />
</ListItemButton>
                <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Worker" />
</ListItemButton>

                </Stack>
            </Card>
        </Box>
    )
}






export default Category