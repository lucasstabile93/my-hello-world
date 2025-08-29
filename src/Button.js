// Componente Button que recebe uma prop 'label'
function Button({ label, onClick }) {
  return (
  <button onClick={onClick}>
  {label}
  </button>
  );
}  

export default Button;
