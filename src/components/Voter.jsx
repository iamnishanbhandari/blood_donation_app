import React, { useState } from 'react'
import Web3 from 'web3'
import io from 'socket.io-client'

let id = "hello";
let data = ''
let fp = ''
let complete = false ;
import VotingMachine from '../abis/VotingMachine.json'
const Voter = () => {
  const [voter, setVoterAdd] = useState('')
  const [checkVote, setCheckVote] = useState('')
  const [balance, setBalance] = useState('')
  const [resultMessage, setresultMessage] = useState('')


  const handleCheckSubmit = async () => {
    console.log(checkVote)

    let web3 = await new Web3(Web3.givenProvider || 'http://localhost:7545')
    window.ethereum.enable()
    console.log('web3 ')
    const accounts = await web3.eth.getAccounts()
    const deployer = accounts[0]
    const abi = VotingMachine.abi
    const address = VotingMachine.networks['5777'].address
    // console.log("abis : " , abi);
    const votingMachine = new web3.eth.Contract(abi, address)
    // console.log(voteToken);[

    const balance = await votingMachine.methods
      .balanceOf(checkVote)
      .call({ from: deployer, gas: 999999 })
    setBalance(balance)
  }




  const handleAddVoterSubmit = async () => {
    console.log(voter)
 
    // console.log(voteToken);[
    const socket = await io('http://localhost:3002')
    socket.open()
    socket.emit('data', 'a')

    await socket.on('data', async (data1) => {
      if (data1.length > 30) {
        console.log('finger print data is : ', data1)
        fp = data1
      } else {
        console.log(data1)
      }
      data = data1


        if (fp === '') {
          if (data === 'a') {
            socket.emit('data', 'q')
          }
      
          if (data === 'n') {
            setresultMessage('Waiting for Valid fingerprint')
          }
          if (data === 'm') {
            setresultMessage('Remove Fingeer')
          }
          if (data === 't') {
            setresultMessage('Place Same Finger again')
          }
          if (data === 'o') {
            socket.emit('data', 'p')
            setresultMessage('FingerPrint data received. Remove finger')
          }
        } else {
          if (id === "hello" && !complete) {
            // console.log(id)
            setresultMessage('Registering on blockchain.')
      
            // socket.emit('data', 'a')
      complete = true ; 
            let web3 = await new Web3(
              Web3.givenProvider || 'http://localhost:7545',
            )
            window.ethereum.enable()
            console.log('web3 ')
            const accounts = await web3.eth.getAccounts()
            const deployer = accounts[0]
            const abi = VotingMachine.abi
            const address = VotingMachine.networks['5777'].address
            // console.log("abis : " , abi);
            const votingMachine = new web3.eth.Contract(abi, address)
        try {
      
      
          const result = await votingMachine.methods
          .AddVoter(fp)
          .send({ from: deployer, gas: 9999999999 })
        console.log(result.events.VoterRegister.returnValues[0])
        id = result.events.VoterRegister.returnValues[0];
        console.log("id is : " , id )
        
       
        setresultMessage(`Voter registered at id : ${ id}`)
      } catch (error) {
        
        console.log("err is : " , error )
        }
              
    
       
          } 
      
          if(id !== "hello" && fp !== "") {
      
      
            if (data == 'a') {
              socket.emit('data', 'r');
            }
            if( data == 'o'){
              socket.emit('data' , 'p');
              setTimeout(() => {} , 10);
              
              socket.emit('data' , id);
              setTimeout(() => {} , 50);

            }
            if( data === 's'){
              socket.emit('data' , 'a');
      complete = true ; 
      setTimeout(() => {} , 100);

      window.location.replace("/admin/voters");

     
            }
          }
      
        }




    })
  }
  return (
    <div className="flex  flex-col m-2 shadow-lg bg-white w-[95%] h-5/6  ">
 
    <img src="/Screenshot (280).png" alt="" />
    </div>
  )
}

export default Voter
