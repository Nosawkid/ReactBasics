import {   Avatar, Box, Button, Card, FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Stack, TextField, Typography } from "@mui/material"
import React, { useState } from "react"
import Logo from './lock.png'

const User = () => {

    // Hooks to get Data
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [gender, setGender] = useState('')
    const [category, setCategory] = useState(null)

    const [showName,setShowName] = useState('')
    const [showEmail, setShowEmail] = useState('')
    const [showContact, setShowContact] = useState('')
    const [showPassword, setShowPassword] = useState('')
    const [showAddress, setShowAddress] = useState('')
    const [showGender, setShowGender] = useState('')
    const [showCategory, setShowCategory] = useState('')




    const handleForm = (e) => {
        e.preventDefault();
        setShowName(name)
        setShowEmail(email)
        setShowContact(contact)
        setShowAddress(address)
        setShowPassword(password)
        setShowGender(gender)
        setShowCategory(category)
    }

    return (
        <Box component="form" onSubmit={handleForm} sx={{ width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", py: 15, gap: "20px" }}>
            <Card sx={{ width: "550px" }}>
                <Avatar alt="Remy Sharp" src={Logo} sx={{ margin: "40px auto 0" }} />
                <Typography variant="h5" sx={{ textAlign: "center", mt: 3 }}>Sign Up</Typography>
                <Stack direction="column" spacing={3} sx={{ my: 3, px: 8 }}>
                    <TextField onChange={(e) => setName(e.target.value)} id="standard-basic" label="Name" variant="standard" />
                    <TextField onChange={(e) => setEmail(e.target.value)} id="standard-basic" label="Email" variant="standard" />
                    <TextField onChange={(e) => setContact(e.target.value)} id="standard-basic" label="Contact" variant="standard" />
                    <TextField onChange={(e) => setPassword(e.target.value)} id="standard-basic" label="Password" variant="standard" />
                    <TextField id="standard-basic" label="Confirm Password" variant="standard" />
                    <TextField onChange={(e) => setAddress(e.target.value)} variant="outlined" label="Address" multiline rows={5} />
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="male"
                        name="radio-buttons-group"
                        row
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <Typography variant="span" sx={{ mb: 7 }}>Gender</Typography>
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                    {/* <Autocomplete
                        
                        disablePortal
                        id="combo-box-demo"
                        options={categories}
                        autoSelect
                        onChange={(e,value) =>setCategory(value.label)}
                        renderInput={(params) => <TextField {...params} label="Category" />}
                    /> */}
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={category}
                            label="Age"
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <MenuItem value={"Hirer"}>Hirer</MenuItem>
                            <MenuItem value={"Teacher"}>Teacher</MenuItem>
                            <MenuItem value={"Student"}>Student</MenuItem>
                        </Select>
                    </FormControl>
                    <Button type="submit" variant="contained">Submit</Button>
                </Stack>
            </Card>
            <Card sx={{ p: 5 }}>
                <Typography variant="h5">Output</Typography>
                <Stack direction="column" spacing={2}>
                    <TextField disabled variant="outlined" label="Name" value={showName}></TextField>
                    <TextField disabled variant="outlined" label="Email" value={showEmail}></TextField>
                    <TextField disabled variant="outlined" label="Contact" value={showContact}></TextField>
                    <TextField disabled variant="outlined" label="Address" value={showAddress}></TextField>
                    <TextField disabled variant="outlined" label="Password" value={showPassword}></TextField>
                    <TextField disabled variant="outlined" label="Gender" value={showGender}></TextField>
                    <TextField disabled  variant="outlined"  value={showCategory}></TextField>

                </Stack>
            </Card>
        </Box>

    )
}


// const categories = [
//     {
//         label: "Student"
//     },
//     {
//         label: "Business"
//     },
//     {
//         label: "Teacher"
//     },
//     {
//         label: "Hirer"
//     },
// ]



export default User