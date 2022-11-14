import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function LabmemberDetails() {
  const { lab } = useParams()

  return (
    <>
      <div className="text-center" >
      <h1>{lab}</h1>
      </div>

    </>

  )
}

export default LabmemberDetails