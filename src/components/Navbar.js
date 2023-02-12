import React from 'react'
import '../App.css'
import { Box, Button, Flex, Link, Spacer, Image} from '@chakra-ui/react';


const Navbar = ({accounts, setAccounts}) => {
    const isConnected = Boolean(accounts[0])

    async function connectAccount(){
        if(window.ethereum){
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts)
        }
    }
  return (
    <Flex justify="space-between" align="center" padding="30px">
        {/* Left Side Nav --- Social Media Icons */}
        <Flex justify= "space-around" width="40%" padding="0 75px">
            <Link href='www.facebook.com'>
                <Image src='./assets/facebook.png' boxSize='42px' margin='0 15px'/>
            </Link>
            <Link href='www.facebook.com'>
                <Image src='./assets/email.jpg' boxSize="42px" margin="0 15px" />
            </Link>
            <Link href='www.facebook.com'>
                <Image src='./assets/Twitter-logo.svg' boxSize="42px" margin="0 15px" />
            </Link>
        </Flex>

        {/* Right Section Nav --- Connect Wallet */}
        <Flex justify= "space-around" align='center' width="40%" padding="30px">
        <Box margin='0 15px'>About</Box>
        <Spacer />
        <Box margin='0 15px'>Mint</Box>
        <Spacer />
        <Box margin='0 15px'>Team</Box>
        <Spacer />

             {/* Connect - check if connected or not */}
             {isConnected ? (
            <Box margin='0 15px'>
                connected
            </Box>
        ): (
            <Button 
            backgroundColor='#d65170'
            borderRadius = '5px'
            boxShadow="0px 2px 2px 1px #0f0f0f"
            color='white'
            cursor="pointer"
            fontFamily='inherit'
            padding='15px'
            margin='0 15px'

            onClick={connectAccount}>Connect</Button>
        )}
        </Flex>
   

    </Flex>
  )
}

export default Navbar