import { useRef } from "react";

const UnControlled = () => {
  const numberInput = useRef(null);

  const handleButtonClick = () => {
    alert(`O valor inserido é: ${numberInput.current.value}`);
  };

  return (
    <>
      <div className="card">
        <div>
          <input type="number" ref={numberInput} />
          <br />
          <button onClick={handleButtonClick}>Exibir Valor</button>
        </div>
        <p></p>
      </div>
    </>
  );
};

export default UnControlled;
