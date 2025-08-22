const H1 = ({children, className}) => {
  return(
    <h1 className={`text-2xl font-bold text-gray-800${className}`}>{children}</h1>
    )
};
export default H1;