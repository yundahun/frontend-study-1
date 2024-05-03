function Reservation() {
  return (
    <form>
      <label>
        조식 여부:
        <input 
          type="checkbox" 
        />
      </label>

      <br />

      <label>
        투숙객 수:
        <input 
          type="number" 
        />
      </label>

      <br />

      룸 타입:
      <label>
        <input 
          type="radio" 
          name="roomType"
          value="SINGLE"
        />
        싱글
      </label>
      <label>
        <input 
          type="radio" 
          name="roomType"
          value="DOUBLE"
        />
        더블
      </label>
      <label>
        <input 
          type="radio" 
          name="roomType"
          value="TWIN"
        />
        트윈
      </label>
    </form>
  );
};

export default Reservation;