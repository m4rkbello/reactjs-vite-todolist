import './App.css';
// import MyButtonComponent from './components/MyButtonComponent';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  //pag map para ma display tanang naka array!
  const cities = ['Manila City', 'Cebu Citty', 'Davao City', 'Tagum City'];

  //pag filter 
  const filterCity = cities.filter(city => city !== "Davao City");

  const persons = [
    {
      id: 0,
      fullname: 'Mark Bello',
      age: 19,
    },
    {
      id: 1,
      fullname: 'Patrick James Apolonio',
      age: 237,
    },
    {
      id: 2,
      fullname: 'Raeven John Palacio',
      age: 23,
    },
    {
      id: 3,
      fullname: 'Mark Alfred Calledo',
      age: 23,
    },
    {
      id: 4,
      fullname: 'Somerset Siang',
      age: 38,
    },
  ];
  //filter ang nasa object na naay edad 23 dapat dili maapil
  // const filterPerson = persons.filter(person > person !== 23);

  if(persons.length === 0) return <h3>...loading</h3>


  return (
    // <MyButtonComponent />
    <>
    <h4>List</h4>
      <ul  className="list-group-item">
        {filterCity.map((city, index) => (
          <li className="list-group-item" key={index}>
            {city}
          </li>
        ))}
      </ul>
      <hr />
        {persons.length > 0 &&
          <>
          <h1> Tables</h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Full Name</th>
                <th scope="col">AGE</th>
              </tr>
            </thead>
            <tbody>
                {persons.map((data) => {
                  return(
                    <tr key={data.id}>
                      <td>{data.id}</td>
                      <td>{data.fullname}</td>
                      <td>{data.age < 20 ? 'Young' : 'Old'}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          </>
        }
  
    </>
  );
}

export default App
