import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    const [count, setCount] = useState(0)
    const [check, setCheck] = useState(false)

    const handleClick = () => {
        setCount((prevState) => prevState + 1)
    }

    useEffect(() => {
        setCheck((prevState) => !prevState)

    }, [count])
    return (
        <div>
            <Button onClick={handleClick}>+

            </Button>
            {
                check ? <Typography>It is Even</Typography> : <Typography>It is Odd</Typography>

            }
        </div>
    )
}

export default UseEffectHook