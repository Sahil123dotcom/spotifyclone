import Header from "./Header";
import DisplayAlbum from "../components/DisplayAlbum";
import Layout from "../components/Display";
import PageNotFound from "./PageNotFound";
import DisplayHome from "../components/DisplayHome";

export const Public = [
  {
    path: "/",
    element: <Header />, 
    errorElement: <PageNotFound />, 
    children: [
      {
        path: "/", 
        element: <Layout />
      },
      {
        path: "/albums", 
        element: <DisplayAlbum />,
      },
    ],
  },
];
