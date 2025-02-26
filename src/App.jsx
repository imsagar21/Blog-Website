import AddBlog from "./components/blog/AddBlog"
import BlogList from "./components/blog/BlogList"
import CounterButton from "./components/counter/CounterButton"
import CounterValue from "./components/counter/CounterValue"


function App() {

  return (
    <>
    <h1>Blog List App</h1>
    {/* <CounterButton/>
    <CounterValue/> */}
    <AddBlog/>
    <BlogList/>

     </>
  )
}

export default App
