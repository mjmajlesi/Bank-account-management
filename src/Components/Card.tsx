import React from 'react'
import Container from './Container'
import Button from './Buttun'
import { useNavigate } from 'react-router-dom'

function Card({ name , path } : {name : string , path : string}) {
    const navigate = useNavigate();

    const gotolinks = ()=>{
        navigate(path)
    }
  return (
    <Container>
    <div className=" bg-gradient-to-r from-[#e09f70] to-[#FED8BE] rounded-2xl w-[300px] h-[100px]">
      <p className="text-[#000] text-2xl font-semibold flex items-center justify-center size-full ">
        <Button onClick={gotolinks} className=" transition delay-100 hover:scale-110">{name}</Button>
      </p>
    </div>
  </Container>
  )
}

export default Card