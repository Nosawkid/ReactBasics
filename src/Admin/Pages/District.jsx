import React, { useEffect, useState } from "react"
import './style.css'
import { Box, Button, Card, Stack, TextField, Typography } from "@mui/material"

const District = () => {

    const [district, setDistrict] = useState('')
    const [showdistrict, setShowDistrict] = useState('')

    const handleSubmit = (event) => {
       event.preventDefault()
       setShowDistrict(district)

    }

    useEffect(() => {
console.log('hi');
    },[district])


    return (
        <>
        <Box sx={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} component='form' onSubmit={handleSubmit} >
            <Card sx={{ width: 500, height: 300 }}>
                <Typography variant="h4" sx={{ textAlign: 'center', pt: 4 }}>District</Typography>
                <Stack direction='column' sx={{ p: 6, gap: 4 }}>
                    <TextField id="standard-basic" label="District" variant="standard" value={district} onChange={(event) => setDistrict(event.target.value)} />
                    <Button variant="outlined" type="submit">Save</Button>
                </Stack>


            </Card>



        </Box>
        {
            showdistrict
        }
        </>
    )
}

export default District