import React from 'react';
import { Link } from "react-router-dom";

class Accounts extends React.Component{

    render() {
        return (
            <div>
                <h2>Accounts</h2>
                <Link to="/form_account">
                    <button type="button" class="btn btn-success">
                        Add Account
                    </button>
                </Link>
            </div>
        );
    }
}

export default Accounts;