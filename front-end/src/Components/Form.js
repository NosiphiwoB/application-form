import Navbar from "./Navbar";

const Form  = (props) => {
    const {handleSubmit, handleChange, firstname, surname, phone, email, age} = props;
    
    return(
     <div>
    <Navbar />

      <div>
        <h1>Application Form</h1>
     </div>
     
        <form onSubmit={handleSubmit}>
        <div>
        <label>First Name</label>
        <input  onChange={handleChange} value={firstname} name="firstname"  />
      </div>

      <div>
        <label>Surname</label>
        <input onChange={handleChange} value={surname} name="surname" />
      </div>
 
      <div>
       <label>Phone</label>
       <input onChange={handleChange} value={phone} name="phone"/>
      </div>

      <div>
        <label>Email</label>
        <input onChange={handleChange} value={email} name="email"/>
      </div>

     <div>
      <label>Age</label>
      <input onChange={handleChange} value={age} name="age"/>
     </div>
   
     <div>
      <button type="submit">Submit</button>
     </div>
    </form>
     </div>   
    )
}

export default Form