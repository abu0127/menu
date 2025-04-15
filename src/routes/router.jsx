import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home";
import CategoryPage from "../pages/CatigoryPage";
import ErrorPage from "../pages/ErrorPage";
import NotFoundPage from "../pages/NotFoundPage";
import { menu } from "../data/menuData";

const categoryLoader = async ({ params }) => {
  const categoryName = params.categoryName.toLowerCase();
  const category = menu.find(c => 
    c.category.toLowerCase() === categoryName
  );
  
  if (!category) {
    throw new Response("Not Found", { 
      status: 404,
      statusText: "Kategoriya topilmadi"
    });
  }
  return category;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <main/>
      },
      {
        path: "category/:categoryName",
        element: <CategoryPage />,
        loader: categoryLoader,
        errorElement: <NotFoundPage />
      }
    ]
  }
]);