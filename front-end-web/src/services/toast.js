import { toast } from 'react-toastify'

const options = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined
}

export default (type, message) => {
  const types = ['success', 'warn', 'error', 'info']

  const exist = types.find(tempType => tempType === type)

  if (!exist) return console.error(`Type: ${type} is invalid`)

  return toast[type](message, options)
}
