import './App.css'
import { useFetch } from './hooks';

const url = "http://api.example.com";

interface Data {
  name: string;
  lastName: string;
  age: number;
}

function App() {
  const {data, loading, error } = useFetch<Data>(url);
  
  if(loading) {
    return <div>Loading...</div>
  }
  
  if (error) {
    return <div>UPS! There is an error: {error.message}</div>
  }
  
  return (
    <div>{JSON.stringify(data)}</div>
  )

}

export default App
