import { Box, Flex, Grid, GridItem, grid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const MenProduct = () => {
  const [data, setData] = useState([])
useEffect(() => {
    fetch('http://localhost:5050/men')
      .then((e) => e.json())
      .then((e) => setData(e))
  })
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
      {data.map((ele) => (
        <div>
          <Box w={350} p={6} key={ele.id}>
            <Link to={`/men/${ele.id}`}>
              <Box>
                <img
                  style={{ width: '300px', alignItems: 'center' }}
                  src={ele.image}
                  alt="men"
                />
              </Box>
              <Flex justifyContent="space-between">
                <Box fontWeight={500}>{ele.name}</Box> <Box>{ele.price}</Box>
              </Flex>
            </Link>
          </Box>
        </div>
      ))}
    </div>
  )
}

export default MenProduct
