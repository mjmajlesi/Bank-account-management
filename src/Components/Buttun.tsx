import React, { ComponentProps } from 'react'

type Tvariant = "dark" | "normal" | "login" | "seccece" | "danger"

type Tchildren =  ComponentProps<"button"> & {
  variant? : Tvariant
}

export default function Button({children , className , variant , ...root}:Tchildren) {
  const styleButtun = "p-2 rounded-md "
  return (
    <button  {...root} className={`${styleButtun} ${className || ""}`}  style={{...Changevariant(variant)}}>{children}</button>
  )
}

function Changevariant(variant? : Tvariant) {
  switch (variant) {
    case "normal":
      return {backgroundColor : "white" , color : "black" , border : "2px" , borderColor : "black"}
    case "dark":
      return {backgroundColor : "black" , color : "white"}
    case "login":
      return {backgroundColor : "#1e98d5" , color : "white"}
      case "seccece":
      return {backgroundColor : "green" , color : "white"}
      case "danger":
      return {backgroundColor : "red" , color : "white", padding : " 0 5px"}
  }
  }
