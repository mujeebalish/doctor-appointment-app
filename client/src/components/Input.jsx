const Input = ({type, value, onChange, name, placeholder, className}) => {
  return (
    <input type={type} name={name} vlaue={value} onChange={onChange}className={className} placeholder={placeholder}/>
    );
};
export default Input;