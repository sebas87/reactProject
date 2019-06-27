import React from 'react';
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import axios from "axios";

class Users extends React.Component{

  constructor(props){
      super(props); 
      this.state = {
          users: []
      }
  }

      componentDidMount() {
        axios.get("http://kyrapps.com:4300/api/users?studentID=15",{
          responseType: 'json'
        })
          .then(response => {
            const newUsers = response.data.user.map(c => {
              return {
                id: c._id,
                name: c.name,
                email: c.email,
                studentID: c.studentID
              };
            });
            console.log(newUsers);
            this.setState({
              users: newUsers
            });
            
          })
          .catch(error => console.log(error));
      }
      
    render() {
      console.log(this.state.users);
      let usersRow = this.state.users.map( (user) =>{
        return <tr><td>{user.id}</td><td>{user.name}</td><td>{user.email}</td><td>{user.studentID}</td></tr>
      });
        return (
            <div>
                <h2>Users</h2>  
                <Link to="/form_user">
                    <button type="button" class="btn btn-success">Add User</button>
                </Link>
                <Table responsive>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Student ID</th>
                        </tr>
                    </thead>
                    <tbody >
                      {usersRow}
                    </tbody>
                </Table>
            </div>
        );
    }
}
export default Users;