import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const History = (url) => {
  const Navigate = useNavigate()
 return Navigate(url)
}

export default History
