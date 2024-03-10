import React, { useState } from 'react';
import './Apply.css'; // Import the CSS file
import axios from 'axios';

const ApplyLeaveForm = () => {
  const [leaveType, setLeaveType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic for handling form submission here
    console.log('Leave application submitted:', { leaveType, startDate, endDate, reason });
  };

  return (
    <div className="apply-container">
      <form className="apply-form" onSubmit={handleSubmit}>
        <table className="apply-table">
          <tbody>
            {/* ... (rest of the code) */}
          </tbody>
        </table>

        <button type="submit" className="apply-button">Apply for Leave</button>
      </form>
    </div>
  );
};

export default ApplyLeaveForm;
 