import './App.css';


function Header(props){
  console.log(props);
  return (
    <header>
      <h1>{props.name}</h1>
    </header>
  )
}

function Main(props){
  console.log(props);
  return(
    <div>
      <p>Best Recipies for quick and {props.adjective} food</p>
      <ul> {props.recipies.map((recipe,recipe_id) => (<li key={recipe_id}>{recipe}</li>))}

      </ul>
    </div>
  )
}

function Footer(props){
  console.log(props);
  return(
    <footer>
     <p>Copyright &copy; {props.year}</p>
    </footer>
  )
}

const recipies =[
"Breakfast Recipe's",
"Brunch Recipe's",
"Lunch Recipe,s",
"Dinner Recipe's",

]

const recipeObjects= recipies.map((recipe,recipe_id) =>( {
  id:recipe_id,
  title: recipe,
}));
 console.log(recipeObjects);

function App() {
  return (
    <div className="App">
       <Header name="My Recipe's"/>
        <Main adjective="delicious" recipies={recipies}/>
        <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
