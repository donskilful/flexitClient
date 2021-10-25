export const getToken = () => {
  let user = localStorage.getItem("user")
  if (user) {
    return JSON.parse(user).token
  }
  return 'token'
}

export const getUser = () => {
  let user = localStorage.getItem("user")
  if (user) {
    return JSON.parse(user).user
  }
  return {}
}

export const formatErrorMessage = error => {
  if (Array.isArray(error)) {
    return error[0]
  }
  return error.message
}