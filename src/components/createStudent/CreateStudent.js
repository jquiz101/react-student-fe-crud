import React, {Component} from "react";

class CreateStudent extends Component {

    //setup state and add a formData object to help keep track of the data we collect in the form
    state = {
        formData: {
            id: "",
            first_name: "",
            last_name: "",
            email: "",
            major: "",
            ip_address: ""
        }
    }

    //method that handles updating the data in state that matches the data in the form
    //runs everytime a form field changes
    handleChange = (event) => {
        //create a new object from form data in state
        let formData = Object.assign({}, this.state.formData);

        //take what is changed in the form and update the mathcing key in the form data object
        formData[event.target.name] = event.target.value;

        //update formData in state with the new object
        this.setState({formData});
    }

    //run when the form is submitted
    handleSubmit = (event) => {

        //prevent the form from refreshing the page
        event.preventDefault();
        
        //use fetch to mae a POST request with out Data from state that has been populated from
        //the data in the form
        fetch("http://localhost:5000/api/students", {
            method: "POST", //make sure whe set our method to POST when creating records
            headers: {
                'content-type': 'application/json' //make sure we set the content-type headers so the API knows it is recieveing JSON data
            },
            body: JSON.stringify(this.state.formData) //send our data form state int he body of the request
        })
        .then((response) => response.json()) // on success, turn the respons into JSON so we can work with it
        .then((data) => {
            console.log(data)
            //programatically redirect to another route on success
            this.props.history.push("/students")
        })
        .catch(e => console.log(e.message)) //console.log any errors if the previous steps fail

    }

    render(){
        return (
            <div className="CreateStudent">
                <h2>Add a new student:</h2>
                {/* 
                    1. create our form to capture student data
                    2. bind this.handleSumbit to the onSubmit of the form so it runs when the form is submitted
                    3. bind this.handleChange to every input field so it can keep the data from state and the form in sync
                    4. bind the value of the field in state to the corresponding input in the form
                 */}
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Student ID:</label>
                        <input onChange={this.handleChange} value={this.state.formData.id} required type="text" name="id" />
                    </div>
                    <div>
                        <label>First Name:</label>
                        <input onChange={this.handleChange} value={this.state.formData.first_name} required type="text" name="first_name" />
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input onChange={this.handleChange} value={this.state.formData.last_name} required type="text" name="last_name" />
                    </div>
                    <div>
                        <label>E-mail Address:</label>
                        <input onChange={this.handleChange} value={this.state.formData.email} required type="email" name="email" />
                    </div>
                    <div>
                        <label>Major:</label>
                        <input onChange={this.handleChange} value={this.state.formData.major} required type="text" name="major" />
                    </div>
                    <div>
                        <label>IP Address:</label>
                        <input onChange={this.handleChange} value={this.state.formData.ip_address} required type="text" name="ip_address" />
                    </div>
                    <div>
                        <button type="submit">Add Student</button>
                    </div>
                </form>

            </div>
        )
    }

}

export default CreateStudent;