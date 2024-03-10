import React from 'react';
import axios from 'axios';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  form: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginBottom: '16px',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    background: '#4caf50',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

function AddEmployee() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [department, setDepartment] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/addemp', {
        name: name,
        email: email,
        department: department,
        password: password,
      });

      if (response.data === 'added') {
        alert('Employee Added Successfully');
      } else if (response.data.error === 'Employee already exists') {
        alert('Employee already exists');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form}>
        <label style={styles.label}>Enter Name</label>
        <input
          type='text'
          style={styles.input}
          onChange={(event) => setName(event.target.value)}
          name='name'
        />

        <label style={styles.label}>Enter Email</label>
        <input
          type='email'
          style={styles.input}
          onChange={(event) => setEmail(event.target.value)}
          name='email'
        />

        <label style={styles.label}>Enter Department</label>
        <input
          type='text'
          style={styles.input}
          onChange={(event) => setDepartment(event.target.value)}
          name='department'
        />

        <label style={styles.label}>Enter Password</label>
        <input
          type='password'
          style={styles.input}
          onChange={(event) => setPassword(event.target.value)}
          name='password'
        />

        <button type='submit' style={styles.button} onClick={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  );
}

export default AddEmployee;
