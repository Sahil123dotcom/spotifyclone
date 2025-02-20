import Header from "./Header";
import DisplayAlbum from "../components/DisplayAlbum";
import Display from "../components/Display";
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
        element: <Display />
        // children: [
        //   {
        //     path: "/",  
        //     element: <DisplayHome />,
        //   },
        // ],
      },
      {
        path: "albums", 
        element: <DisplayAlbum />,
      },
    ],
  },
];
