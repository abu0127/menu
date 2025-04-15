import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  
  return (
    <div className="error-page">
      <h1>Xato yuz berdi!</h1>
      <p>{error.statusText || error.message}</p>
      <Link to="/">Bosh sahifaga qaytish</Link>
    </div>
  );
}