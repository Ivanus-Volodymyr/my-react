import React, {FC} from 'react';
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import GenreBadge from "./components/GenreBadge/GenreBadge";

const App: FC = () => {
    return (
        <div>
            <MoviesPage/>
            <GenreBadge/>
        </div>
    );
};

export default App;