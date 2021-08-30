import './App.css';

//Import router component
import { Switch, Route } from "react-router-dom";

//Import Navigation Component
import Navigation from "./components/navigation/Navigation";

//Import Welcome Component
import Welcome from "./components/welcome/Welcome";

//Import student related components
import StudentList from "./components/studentList/StudentList";
import Student from './components/student/Student';
import CreateStudent from "./components/createStudent/CreateStudent";


//Import NoMath (404) Component
import NoMatch from "./components/noMatch/NoMatch";

function App() {
  return (
    <div className="App">
      {/* Header to display on every page */}
      <header>
        <h1>Welcome to React YOUniversity</h1>
        <Navigation />
      </header>

      {/* Define Routes to different components based on URL */}

      <Switch>
        {/* route for dislaying our homepage that loads the Welcome component */}
        <Route
          exact
          path="/"
          component={Welcome}
        />
        {/* route for listing all students that loads the StudentList component */}
        <Route
          exact
          path="/students"
          component={StudentList}
        />
        {/* 
        route for displaying a single by the id passed in the URL.
        This route loads the CreateStudent component 
        */}
        <Route
          exact
          path="/student/:id"
          component={Student}
        />
        {/* route for creating a student that loads the CreateStudent component */}
        <Route
          exact
          path="/create/student"
          component={CreateStudent}
        />
        {/* route for displaying a NoMatch (404) compnenent when no route is matched */}
        <Route
          path="*"
          component={NoMatch}
        />
      </Switch>
    </div>
  );
}

export default App;
