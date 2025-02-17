import React from 'react'
import {Box, Button, Card, CardBody, Flex} from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import SliderWomen from '../Component/SliderWomen'
import SliderMen from '../Component/SliderMen'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Box height={500} paddingTop={20} backgroundImage={"https://c1.wallpaperflare.com/preview/266/464/958/lululemon-adventure-travel-san-antonio.jpg"}>
      <Box  border="1px solid" w={230} backgroundColor="white" paddingTop={10} paddingBottom={10} paddingRight={12} paddingLeft={8}    >
        <Flex flexDirection="column" gap={6} >
          <Box fontWeight={500}>lululemon</Box>
          <Flex flexDirection="column" gap={3}>
         <Link><Box to='/women'>Women's What's New</Box></Link> 
          <Link to='/men'><Box>Men's What's New</Box></Link>
          <Link to='/women/allwomen'><Box>All Women's</Box></Link>
          <Link to='/men/allmen'><Box>All Men's</Box></Link>
          <Link path='/accessories'><Box>All Accessories</Box></Link>
          </Flex>
        </Flex>
      </Box>
      <Flex justifyContent="end" marginRight={5}> <Link> <Button size='lg' backgroundColor="white" color="black">Shop What's New</Button></Link></Flex>
      </Box>
      <Flex padding={5} justifyContent="space-between" alignItems="center"><Box marginLeft={12} fontSize={40} fontWeight={500}>Invite the spotlight.</Box><Box>Cool, coordinated summer whites make every outing feel like an event.</Box></Flex>
      <Flex gap={7} padding={5}><Box>
             <img src="https://images.lululemon.com/is/image/lululemon/na_Jun24_wk5_W_OTM_1_2_Lg_MediaAction_D_SummerClothes?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" alt="" />
             <Text p={1} fontSize={30} fontWeight={500}>Noticeably soft.</Text>
             <Text p={2}>It’s a standout feeling—cool, comfy fabrics in all white are here.</Text>
            <Link to='/women/allwomen'> <Button p={2} size='lg' backgroundColor="white" color="black" border="1px solid black">SHOP SUMMER CLOTHES</Button></Link>
           </Box> 
        
        <Box>
        <img src="https://images.lululemon.com/is/image/lululemon/na_Jun24_wk5_W_OTM_1_2_Lg_MediaAction_D_Shorts?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" alt="" />
             <Text p={1} fontSize={30} fontWeight={500}>Strikingly stretchy.</Text>
             <Text p={2}>The Align Short is a flex in more ways than one.</Text>
        <Link to='/women/allwomen'>     <Button p={2} size='lg' backgroundColor="white" color="black" border="1px solid black">SHOP SHORTS</Button></Link>
          </Box></Flex>
          <Text textAlign="center" fontSize={50} fontWeight={600}>A new spin on summer.</Text>
          <Box>
            <SliderWomen/>
          </Box>
          <Box textAlign="center" marginTop={12}><Link ><Button p={2} size='lg' backgroundColor="white" color="black" border="1px solid black">SHOP SUMMER WHITES</Button></Link></Box>
          <Flex justifyContent="space-between" p={10}>
            <Box>
              <img style={{width:"400px"}} src="https://images.lululemon.com/is/image/lululemon/NA_Jun24_Wk3_W_Skirts_Ecomm_1_3_Med_MediaAction_D?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" alt="" />
              <Text p={2} fontSize={30} fontWeight={500} >A skirt for every scene.</Text>
             <Link to='/women/allwomen'> <Button p={2}  size='lg' backgroundColor="white" color="black" border="1px solid black">SHOP SHORTS</Button></Link>
            </Box>
            <Box>
            <img style={{width:"400px"}} src="https://images.lululemon.com/is/image/lululemon/na_Jun24Wk1_HPUpdates_Quickhits_1_3_Med_MediaAction_D_WomensHoodiesSweatshirts?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" alt="" />
              <Text p={2} fontSize={30} fontWeight={500}>Moving along softly.</Text>
             <Link to='/women/allwomen'> <Button p={2}  size='lg' backgroundColor="white" color="black" border="1px solid black">SHOP HOODIES & SWEATSHIRTS</Button></Link>
            </Box>
            <Box>
            <img style={{width:"400px"}} src="https://images.lululemon.com/is/image/lululemon/na_Jun24Wk1_HPUpdates_Quickhits_1_3_Med_MediaAction_D_WomensPants?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" alt="" />
              <Text p={2} fontSize={30} fontWeight={500}>Comfort’s got legs.</Text>
             <Link to='/women/allwomen'><Button p={2}  size='lg' backgroundColor="white" color="black" border="1px solid black">SHOP PANTS</Button></Link> 
            </Box>
            </Flex>
            
          <Box p={5}>
            <img  src="https://images.lululemon.com/is/image/lululemon/na_Jun24_wk5_M_Train_1_1_Med_MediaAction_D_Mens?wid=1440&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" alt="" />
            <Text fontSize={30} fontWeight={500}>Summer going strong.</Text>
            <Text p={2}>Stick to your plan, not your gear. The License to Train Shirt brings more focus with less cling.</Text>
           <Link to='/men'> <Button p={2} size='lg' backgroundColor="white" color="black" border="1px solid black">SHOP MEN'S</Button> </Link>
          </Box>
          <Text textAlign="center" fontSize={50} fontWeight={600}>Shift gear into summer.</Text>
          <Box>
            <SliderMen/>
          </Box>
          <Box textAlign="center" marginTop={12}><Link to='/men/allmen'><Button p={2} size='lg' backgroundColor="white" color="black" border="1px solid black">BEST WORKOUT GEAR</Button></Link></Box>

          <Flex justifyContent="space-between" p={10}>
            <Box>
              <img style={{width:"400px"}} src="https://images.lululemon.com/is/image/lululemon/na_Jun24Wk1_HPUpdates_Quickhits_1_3_Med_MediaAction_D_MensShirts?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" alt="" />
              <Text p={2} fontSize={30} fontWeight={500} >Tops that do the most.</Text>
              <Link to='/men/allmen'><Button p={2}  size='lg' backgroundColor="white" color="black" border="1px solid black">SHOP SHIRTS</Button></Link>
            </Box>
            <Box>
            <img style={{width:"400px"}} src="https://images.lululemon.com/is/image/lululemon/NA_May24_Wk2_M_SU24Shorts_1_3_MediaAction_M_MLP_ZeroedIn?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" alt="" />
              <Text p={2} fontSize={30} fontWeight={500}>Shorts on. Limits off.</Text>
             <Link to='/men/allmen'> <Button p={2}  size='lg' backgroundColor="white" color="black" border="1px solid black">SHOP SHORTS</Button></Link>
            </Box>
            <Box>
            <img style={{width:"400px"}} src="https://images.lululemon.com/is/image/lululemon/na_Jun24Wk1_HPUpdates_Quickhits_1_3_Med_MediaAction_D_MensPants?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" alt="" />
              <Text p={2} fontSize={30} fontWeight={500}>Keeping you in motion.</Text>
             <Link to='/men/allmen'> <Button p={2}  size='lg' backgroundColor="white" color="black" border="1px solid black">SHOP PANTS</Button></Link>
            </Box>
            </Flex>

           <Box display="flex" justifyContent="center" alignItems="center" margin={0}>
               <Box width={1333} height={350} backgroundColor="black" display="flex" justifyContent="center" alignItems="center"  >
                 <Box width={650} h={250} backgroundColor="white" display="flex" flexDirection="column" gap={5} justifyContent="center" alignItems="center" >
                  <Text fontSize={30} fontWeight={500}>Score a new favourite fit for your goals.</Text>
                 <Link> <Button p={2}  size='lg' backgroundColor="white" color="black" border="1px solid black">SHOP WE MADE TOO MUCH</Button></Link>
                 </Box>
               </Box>
           </Box>
    </div>
  )
}

export default Home