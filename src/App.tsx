import ClassComponent from "./components/ClassComponent.tsx";
import FunctionalComponent from "./components/FunctionalComponent.tsx";
import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";

function App() {

  return (
    <>
        <ClassComponent/>
        <FunctionalComponent/>
        <ArrowFunctionalComponent/>
        <ArrowFunctionalComponentWithProps title="An arrow functional component with props"/>
        <ArrowFunctionalComponentWithPropsType
            title="An arrow functional component with props"
            description="This is a description"/>
    </>
  )
}

export default App
