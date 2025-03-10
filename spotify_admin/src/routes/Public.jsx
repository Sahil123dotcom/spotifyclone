import AddAlbum from "../pages/AddAlbum";
import AddSong from "../pages/AddSong";
import Header from "./Header";
import PageNotFound from "./PageNotFound";
import ListSong from "../pages/ListSong";
import ListAlbum from "../pages/ListAlbum";
import Home from "../pages/Home";

export const Public = [
  {
    path: "/",
    element: <Header />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <ListAlbum />,
      },
      {
        path: "/add-song",
        element: <AddSong />,
      },
      {
        path: "/add-album",
        element: <AddAlbum />,
      },
      {
        path: "/list-song",
        element: <ListSong />,
      },
      {
        path: "/list-album",
        element: < ListAlbum/>,
      },
    ],
  },
];
