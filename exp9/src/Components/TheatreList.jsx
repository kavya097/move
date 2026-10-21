import { theaters } from "../Movie.js";
export default function TheaterList({ theater, setTheater }) {
  return <div className="form-group"><label htmlFor="theater">Choose Theatre</label><select id="theater" value={theater} onChange={(e) => setTheater(e.target.value)}>{theaters.map((item) => <option key={item.id} value={item.name}>{item.name} — {item.location}</option>)}</select></div>;
}
