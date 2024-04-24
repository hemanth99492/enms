import React from 'react';
import './ChangePassword.css';
import { callApi, errorResponse, getSession } from './main';

const tableStyle = { width: "100%" };

const updatePwd = () => {
    const uname = getSession("sid");
    const T1 = document.getElementById("T1");
    const url = "http://localhost:5000/login/signin";
    const data = JSON.stringify({
        emailid: uname,
        pwd: T1.value
    });
    callApi("POST", url, data, validatePwd, errorResponse);

    T1.value = "";
};

const validatePwd = (res) => {
    const data = JSON.parse(res);
    if (data === 0) {
        alert("Invalid Credentials...");
    } else {
        const T2 = document.getElementById('T2');
        const T3 = document.getElementById('T3');
        if (T2.value !== T3.value) {
            alert("New password and Re-Type password do not match");
            return;
        }
        const url = "http://localhost:5000/cp/updatepwd";
        const input = JSON.stringify({
            emailid: getSession("sid"),
            pwd: T2.value
        });
        callApi("POST", url, input, updatePwdSuccess, errorResponse);

        T2.value = "";
        T3.value = "";
    }
};

const updatePwdSuccess = (res) => {
    const data = JSON.parse(res);
    alert(data);
};

class ChangePassword extends React.Component {
    constructor(props) {
        super(props);
        this.sid = getSession("sid");
        if (this.sid === "") {
            window.location.replace("/");
        }
    }

    render() {
        return (
            <div className='full-height'>
                <div className='cpcontent'>
                    <h3>Change Your Password</h3>
                    <table style={tableStyle}>
                        <tbody>
                            <tr>
                                <td>Current Password* <input type='password' id='T1' className='txtbox' /></td>
                            </tr>
                            <tr>
                                <td>New Password* <input type='password' id='T2' className='txtbox' /></td>
                            </tr>
                            <tr>
                                <td>Re-type New Password* <input type='password' id='T3' className='txtbox' /></td>
                            </tr>
                            <tr>
                                <td><button className='button' onClick={updatePwd}>Update</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ChangePassword;
