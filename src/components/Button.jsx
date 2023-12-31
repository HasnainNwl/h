// eslint-disable-next-line react/prop-types
const Button = ({onclick, children}) => {
  return (
    <button className="bg-indigo-600 text-white py-2 px-6 my-10 rounded hover:bg-indigo-700" onClick={onclick}>{children}</button>
  )
}

export default Button