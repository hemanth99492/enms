import React, { useState } from 'react';
import './Apply.css'; // Import the CSS file
import axios from 'axios';

const ApplyLeaveForm = () => {
  const [leaveType, setLeaveType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Here you can make an axios request to send the form data to your backend
      const response = await axios.post('http://localhost:5000/apply-leave', {
        type: leaveType,
        sdate: startDate,
        edate : endDate,
        lreson: reason
      });
      console.log('submitted:', response.data);
      // Optionally, you can reset the form fields after successful submission
      setLeaveType('');
      setStartDate('');
      setEndDate('');
      setReason('');
    } catch (error) {
      setError('An error occurred while submitting the form. Please try again.');
      console.error('Error submitting leave application:', error);
    }
  };

  return (
    <div className="apply-container">
      <form className="apply-form" onSubmit={handleSubmit}>
        <table className="apply-table">
          <tbody>
            <tr>
              <td>Leave Type:</td>
              <td>
                <input
                  type="text"
                  value={leaveType}
                  onChange={(e) => setLeaveType(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Start Date:</td>
              <td>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>End Date:</td>
              <td>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Reason:</td>
              <td>
                <textarea
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  required
                ></textarea>
              </td>
            </tr>
            {error && (
              <tr>
                <td colSpan="2" style={{ color: 'red' }}>{error}</td>
              </tr>
            )}
          </tbody>
        </table>

        <button type="submit" className="apply-button">Apply for Leave</button>
      </form>
    </div>
  );
};

export default ApplyLeaveForm;
