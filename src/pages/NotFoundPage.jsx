import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="not-found">
      <h1>404 - Sahifa topilmadi</h1>
      <p>Siz qidirgan sahifa mavjud emas</p>
      <Link to="/">Bosh sahifaga qaytish</Link>
    </div>
  );
}