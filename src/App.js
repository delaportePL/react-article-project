import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { ArticleList } from "./components/ArticleList";
import { Form } from "./components/Form";

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <Form />
      </div>
      <hr/>
      <div className='row'>
        <ArticleList />
      </div>
    </div>
  );
}

export default App;
