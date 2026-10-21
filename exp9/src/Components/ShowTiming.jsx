import { showTimes } from "../Movie.js";

export default function ShowTiming({ showTime, setShowTime }) {
  return (
    <div className="form-group">
      <label>Choose Show Time</label>
      <div className="show-time-grid">
        {showTimes.map((time) => (
          <button
            type="button"
            key={time}
            className={`time-btn ${showTime === time ? "selected" : ""}`}
            onClick={() => setShowTime(time)}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
}