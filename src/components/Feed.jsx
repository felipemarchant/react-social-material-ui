import styled from '@emotion/styled'
import { Box, Stack, Skeleton } from '@mui/material'
import React, { useState } from "react"
import Post from "./Post"

const Feed = () => {
    
    const SizedBox = styled(Box) (({ theme }) => ({
        width: "60%",
        [theme.breakpoints.down('md')]: {
            width: '100%',
        },
    }))

    const [loading, setLoading] = useState(true)

    setTimeout(() => {
      setLoading(false)
    }, [3000])
  

    return (
        <SizedBox sx={{ 
            width: "60%",
         }} p={2}>
            {loading ? (
                <Stack spacing={1}>
                    <Skeleton variant="text" height={100} />
                    <Skeleton variant="text" height={20} />
                    <Skeleton variant="text" height={20} />
                    <Skeleton variant="rectangular" height={300} />
                </Stack>
            ) : (
                <>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </>
            )}
        </SizedBox>
    )
}

export default Feed