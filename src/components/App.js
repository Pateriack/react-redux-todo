import React from 'react'
import AddTodoContainer from '../containers/AddTodoContainer'
import VisibleTodoList from '../containers/VisibleTodoList'
import ToggleAllContainer from '../containers/ToggleAllContainer'
import FooterContainer from '../containers/FooterContainer'

const App = () => (
    <div>
        <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <AddTodoContainer/>
            </header>
            <section className="main">
                <ToggleAllContainer/>
                <VisibleTodoList/>
            </section>
            <FooterContainer/>
        </section>
        <footer className="info">
            <p>Double-click to edit a todo</p>
            <p>Built by Patrick Eidt using React and Redux</p>
            <p>CSS from <a href="https://github.com/tastejs/todomvc-app-css">todomvc-app-css</a></p>
        </footer>
    </div>
)

export default App
