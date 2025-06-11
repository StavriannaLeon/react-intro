// import ClassComponent from "./components/ClassComponent.tsx";More actions
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import Layout from "./components/Layout.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import Counter from "./components/Counter.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// import { useEffect } from "react";
// import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import CounterAdvanced from "./components/CounterAdvanced.tsx";
// import CounterAdvancedWithCustomHook from "./components/CounterAdvancedWithCustomHook";
// import CounterWithReducer from "./components/CounterWithReducer.tsx";
// import Todo from "./components/Todo/Todo.tsx";
// import OnlineStatus from "./components/OnlineStatus.tsx";
import {BrowserRouter, Routes, Route} from "react-router";
import HomePage from "./pages/HomePage.tsx";
import NameChangerPage from "./pages/NameChangerPage.tsx";
import OnlineStatusPage from "./pages/OnlineStatusPage.tsx";
import UserPage from "./components/UserPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import FocusInput from "./components/FocusInput.tsx";
import UncontrolledInput from "./components/UncontrolledInput.tsx";
import RouterLayout from "./components/RouterLayout.tsx";
import ExamplesPage from "./components/ExamplesPage.tsx";
import RouterExamplesLayout from "./components/RouterExamplesLayout.tsx";
import AutoRedirectPage from "./pages/AutoRedirectPage.tsx";
import ControlledInput from "./components/ControlledInput.tsx";

function App() {

    // useEffect(() => {
    //     const id: number = setInterval(() => console.log("tick"), 1000);
    //     return () => clearInterval(id);
    // }, []);

    return (
        <>
            {/*<Layout>*/}
                {/*<ClassComponent/>*/}
                {/*<FunctionalComponent/>*/}
                {/*<ArrowFunctionalComponent/>*/}
                {/*<ArrowFunctionalComponentWithProps title="Is an Arrow Functional Component with Props!"/>*/}
                {/*<ArrowFunctionalComponentWithPropsType*/}
                {/*  title="Is an Arrow Functional Component with Props!"*/}
                {/*  description="this is a description"*/}
                {/*/>*/}

                {/*<ClassComponentWithState/>*/}
                {/*<FunctionalComponentWithState/>*/}
                {/*<Counter/>*/}
                {/*<NameChanger/>*/}
                {/*<CounterWithMoreStates/>*/}
                {/*<CounterAdvanced/>*/}
                {/*<CounterWithCustomHook/>*/}
                {/*<CounterAdvancedWithCustomHook/>*/}
                {/*<CounterWithReducer/>*/}
                {/*<Todo/>*/}
                {/*<OnlineStatus/>*/}

            {/*</Layout>*/}

            <BrowserRouter>
                    <Routes>
                        <Route element={<RouterLayout/>}>
                            {/*<Route path="/" element={<HomePage/>} />*/} {/* same with: */}
                            <Route index element={<HomePage/>} />
                            <Route path="focus-input" element={<FocusInput/>} />
                            <Route path="users/:userID" element={<UserPage/>} /> {/* : | path parameter */}
                            <Route path="users" element={<UserPage/>} />
                        </Route>

                        {/*<Route path="examples/name-changer" element={<NameChangerPage/>} />*/}
                        {/*<Route path="examples/online-status" element={<OnlineStatus/>} />*/}

                        {/*<Route path="examples?"> /!* optional segments | "/examples/" in the url can be omitted *!/*/}
                        <Route path="examples" element={<RouterExamplesLayout/>}>
                            <Route index element={<ExamplesPage/>} /> {/* here index = /examples/ */}
                            <Route path="name-changer" element={<NameChangerPage/>} />
                            <Route path="online-status" element={<OnlineStatusPage/>} />
                            <Route path="auto-redirect" element={<AutoRedirectPage/>} />
                            <Route path="controlled-input" element={<ControlledInput />}/>
                            <Route path="uncontrolled-input" element={<UncontrolledInput />}/>
                            <Route path="focus-input" element={<FocusInput />}/>
                        </Route>

                        {/*<Route path="files/*" element={<FilePage/>} /> /!* star segment = all *!/*/}
                        <Route path="*" element={<NotFoundPage/>} />
                        {/* NotFoundPage has to be put last */}
                    </Routes>
            </BrowserRouter>
        </>
    )
}

export default App