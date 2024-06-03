import { Route, Routes } from 'react-router-dom'
import { PageHandler } from './handlers'
import { Movies, Movie } from '../pages'

export const Routing = () => (
    <Routes>
        <Route
            path="/"
            element={
                <PageHandler>
                    <Movies />
                </PageHandler>
            }
        />
        <Route
            path=":id"
            element={
                <PageHandler>
                    <Movie />
                </PageHandler>
            }
        />
    </Routes>
)
