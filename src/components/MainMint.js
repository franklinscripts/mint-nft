import React, { useState } from 'react'
import { ethers, BigNumber } from 'ethers'
import roboPunkNft from '../RoboPunks.json'
import { Button, Flex,Input} from '@chakra-ui/react'
import '../App.css'
const roboPunkNftAddress = '0xe1149D5c9F3EEAf6FE1bA096fBCc78a4Dcb0b363'
export const MainMint = ({accounts, setAccounts}) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);
    async function handleMint() {
        if(window.ethereum){
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                roboPunkNftAddress,
                roboPunkNft.abi,
                signer
            );
            try{
                const response  = await contract.mint(BigNumber.from(mintAmount),{
                    value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
                });
                console.log("response :> ", response)

            }catch(err){
                console.log("error >: ", err)
            }
        }
    }
    const handleDecreement = () => {
        if(mintAmount  <=  1) return;
        setMintAmount(mintAmount - 1);
    }
    const handleIncreement = () => {
        if(mintAmount  >=  3) return;
        setMintAmount(mintAmount + 1);
    }

  return (
    <Flex justify="center" align="center" height="100vh" paddingBottom="150px" >
    <div>
        <h1>RoboPunks Minting </h1>
        <p>
            It's 2050. Can the RoboPunks NFT save humans from destructive rampant NFT speculation? Mint NFT to find out.
        </p>
        {
            isConnected ? (
            <div>
              <Flex align="center" justify="center">
                    <Button
                    backgroundColor="#D65170"
                    borderRadius="5px"
                    boxShadow="0px 2px 2px 1px #ofofof"
                    color="white"
                    cursor="pointer"
                    fontFamily='inherit'
                    padding='15px'
                    marginTop='10px'
                    onClick={handleDecreement}>-</Button>
                    <Input
                    readOnly
                    fontFamily='inherit'
                    width='100px'
                    height='40px'
                    textAlign='center'
                    paddingLeft='19px'
                    marginTop='10px'
                    type='number'
                     value={mintAmount} />
                    <Button
                    backgroundColor="#D65170"
                    borderRadius="5px"
                    boxShadow="0px 2px 2px 1px #ofofof"
                    color="white"
                    cursor="pointer"
                    fontFamily='inherit'
                    padding='15px'
                    marginTop='10px'
                    onClick={handleIncreement}>+</Button>
                </Flex>
                <Button 
                backgroundColor="#D65170"
                borderRadius="5px"
                boxShadow="0px 2px 2px 1px #ofofof"
                color="white"
                cursor="pointer"
                fontFamily='inherit'
                padding='15px'
                marginTop='10px'
                onClick={handleMint}>Mint Now</Button>
                
            </div> )
            :(<p>
                You must be connected to Mint!
            </p>)
        }
    </div>
    </Flex>
  )
}
