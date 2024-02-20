import type React from 'react'
import Loader from './Loader'
type FormType = {
  children: React.JSX.Element
  fetching: boolean
  onSubmit: () => void
}

function FormComponent({ children, onSubmit, fetching }: FormType) {
  return (
    <form
      onSubmit={onSubmit}
      //   action=""
      method="POST"
      className="relative z-0 md:w-96 w-10/12 mx-auto border border-slate-100 rounded-md shadow-sm p-7 bg-white"
    >
      {fetching && <Loader />}
      {children}
    </form>
  )
}

export default FormComponent
