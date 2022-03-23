import React from "react";

class AddContact extends React.Component{
    render() {
        return (
             <div className="ui main">
                 <h2>Add Contact</h2>
                 <form className="ui form">
                     <div className="field">
                         <label>Name</label>
                         <input type="text" name="name" placeholder="Enter the contact name here!" />
                     </div>
                     <div className="field">
                         <label>Email</label>
                         <input type="email" name="email" placeholder="Enter the contact email here!" />
                     </div>
                     <div>
                         <button className="ui button blue">Add Contact</button>
                     </div>
                 </form>
             </div>
        );
    }
}

export default AddContact;