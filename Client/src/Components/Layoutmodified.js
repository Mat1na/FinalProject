import React from 'react'
import { Outlet } from "react-router-dom";
import Headermodified from './Headermodified';

function Layoutmodified() {
  return (
    <>
    <Headermodified />
    <Outlet/>
</>
  )
}

export default Layoutmodified;