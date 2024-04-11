import React from 'react'
import './ReservedBooks.css'

function ReservedBooks() {
    return (
        <div className='reservedbooks-container'>
            <h className='reservedbooks-title'>Books On Hold</h>
            <table className='reservedbooks-table'>
                <tr>
                    <th>Name</th>
                    <th>Book</th>
                    <th>Date</th>
                </tr>
                <tr>
                    <td>Pranav</td>
                    <td>Computer Networking</td>
                    <td>15/03/24</td>
                </tr>
                <tr>
                    <td>Sashank</td>
                    <td>Pro MERN Stack</td>
                    <td>14/03/24</td>
                </tr>
                <tr>
                    <td>Ramya</td>
                    <td>Biography of RATAN TATA</td>
                    <td>10/02/2024</td>
                </tr>
                <tr>
                    <td>Akhil</td>
                    <td>The Secret</td>
                    <td>11/03/2024</td>
                </tr>
                <tr>
                    <td>Surya</td>
                    <td>Fundamentals of C </td>
                    <td>19/02/2024</td>
                </tr>
                <tr>
                    <td>Dhanush</td>
                    <td>C# Fundamentals</td>
                    <td>01/01/2024</td>
                </tr>
            </table>
        </div>
    )
}

export default ReservedBooks
