import { useState } from "react";
import UnitCounter from "./UnitCounter";

function UnitCalculator() {
  // Shared State 실습
  const [length, setLength] = useState(1);

  const handleChange = (e) => {
    setLength(Number(e.target.value));
  };

  return (
    <>
      <p>단위 변환 계산기</p>
      <label>
        <input type="number" value={length} onChange={handleChange} min={0} />
        미터(m)
      </label>
      <hr />
      <UnitCounter length={length} onLengthChange={setLength} />
      <br />
      <UnitCounter length={length} onLengthChange={setLength} />
    </>
  );
};

export default UnitCalculator;