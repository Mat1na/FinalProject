import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function PublicationDetails() {
  const {pub}=useParams()
  return (
    <>
    <div>Page</div>
    {console.log(pub.split("-").slice(-1))}
    </>
  )
}

export default PublicationDetails