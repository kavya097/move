const seats = Array.from({ length: 30 }, (_, index) => `S${index + 1}`);

export default function SeatSelection({ selectedSeats, toggleSeat }) {
  return (
    <div className="form-group">
      <p id="seat-instructions">Select your seats (use Tab and Enter/Space).</p>
      <div className="screen">SCREEN THIS WAY</div>

      <div className="seat-grid" role="group" aria-label="Available seats" aria-describedby="seat-instructions">
        {seats.map((seat) => {
          const selected = selectedSeats.includes(seat);

          return (
            <button
              type="button"
              key={seat}
              className={`seat ${selected ? "selected" : ""}`}
              aria-label={`Seat ${seat}${selected ? ", selected" : ", available"}`}
              aria-label={`Seat ${seat}${selected ? ", selected" : ", available"}`}
              aria-pressed={selected}
              onClick={() => toggleSeat(seat)}
            >
              {seat}
            </button>
          );
        })}
      </div>

      <div className="seat-legend">
        <span><i className="legend-box" /> Available</span>
        <span><i className="legend-box chosen" /> Selected</span>
      </div>

      <p>
        Selected seats: {selectedSeats.length
          ? selectedSeats.join(", ")
          : "None"}
      </p>
    </div>
  );
}