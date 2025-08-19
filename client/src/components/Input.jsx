const Input = ({type, value, onChangeHandler, name, placeholder, className}) => {
  return (
    <input type={type} name={name} vlaue={value} onChange={onChangeHandler}className={className} placeholder={placeholder}/>
    );
};
export default Input;