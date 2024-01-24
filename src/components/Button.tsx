import { useNavigate } from 'react-router-dom'
import { paths } from '../config/constants'


type ButtonTypes = {
  path?: keyof typeof paths
  type: 'submit' | 'button'
  className?: string
  child: JSX.Element | string
}
function Button({ className, child, path, type }: ButtonTypes) {
  const navigate = useNavigate()
  return (
    <>
      <button
        type={type}
        onClick={() => navigate(paths[path!])}
        className={`${className} bg-primary-color w-32 text-white p-2 rounded-md hover:bg-hover-color`}
      >
        {child}
      </button>
    </>
  )
}

export default Button
