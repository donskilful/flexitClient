import React, { useContext, useEffect } from 'react'
import { AlertContext } from '../../authContext/AlertContext'
import useAlert from '../../hooks/useAlert'
import './alert.css'

const Alert = () => {
  const { alert, type } = useContext(AlertContext)
  const { hideAlert } = useAlert()
  useEffect(() => {
    let timeout
    if (alert) {
      timeout = setTimeout(() => {
        hideAlert()
      }, 2000)
    }
    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alert])

  console.log('alert', alert)
  
  return alert && <div className={`alert ${type}`} >{alert}</div>
}

export default Alert