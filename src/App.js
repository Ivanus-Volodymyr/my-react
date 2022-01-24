import {Route, Routes} from "react-router-dom";

import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import Posts from "./pages/Posts/Posts";
import Layout from "./components/Layout/Layout";
import UserDetails from "./components/UserDetails/UserDetails";
import UserPosts from "./components/UserPosts/UserPosts";
import PostDetails from "./components/PostDetails/PostDetails";
import PostComments from "./components/PostComments/PostComments";
import UserAlbums from "./components/UserAlbums/UserAlbums";
import AlbumsPhotos from "./components/AlbumsPhotos/AlbumsPhotos";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Home/>}/>

                    <Route path={'users'} element={<Users/>}>
                        <Route path={':id'} element={<UserDetails/>}>
                            <Route path={'posts'} element={<UserPosts/>}/>
                        </Route>
                        <Route path={':id/albums'} element={<UserAlbums/>}>
                            <Route path={':albumId/photos'} element={<AlbumsPhotos/>}/>
                        </Route>
                    </Route>

                    <Route path={'posts'} element={<Posts/>}>
                        <Route path={':id'} element={<PostDetails/>}>
                            <Route path={'comments'} element={<PostComments/>}/>
                        </Route>
                    </Route>

                </Route>
            </Routes>


        </>
    );
}

export default App;
