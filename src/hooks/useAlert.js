import { useContext } from "react"
import { addAlert, dismissAlert } from "../authContext/AlertActions"
import { AlertContext } from "../authContext/AlertContext"

const useAlert = () => {
  const { dispatch } = useContext(AlertContext)
  const showSuccess = (message) => dispatch(addAlert({
    type: 'success',
    message
  }))
  
  const showError = (message) => dispatch(addAlert({
    type: 'error',
    message
  }))
  
  const hideAlert = (message) => dispatch(dismissAlert())

  return { showSuccess, showError, hideAlert }
}

export default useAlert