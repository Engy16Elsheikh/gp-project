import React from "react";
import './table.css';

export const Table = (props) =>{
    return(
        <>
        <h2 className="time-h">Time Table</h2>
        <div className='time-table'>
        <table>
  <thead>
    <tr>
      <th>Days</th>
      <th>Internal medicine</th>
      <th>Pediatrics</th>
      <th>Neurology</th>
      <th>Surgery</th>
      <th>Obstetrics and gynecology</th>
      <th>Ophthalmology</th>
      <th>Physical medicine and rehabilitation</th>
      <th>Emergency medicine</th>
      <th>Dentist</th>
      <th>Dermatology</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Saturday</td>
      <td>
        <ul>
          <li>Doctor 1 - 10:00 AM</li>
          <li>Doctor 2 - 2:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 3 - 9:00 AM</li>
          <li>Doctor 4 - 1:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 5 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 5 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 5 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 5 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 5 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 5 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 5 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 5 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>sunday</td>
      <td>
        <ul>
          <li>Doctor 2 - 9:00 AM</li>
          <li>Doctor 3 - 1:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 4 - 10:00 AM</li>
          <li>Doctor 5 - 2:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>monday</td>
      <td>
        <ul>
          <li>Doctor 2 - 9:00 AM</li>
          <li>Doctor 3 - 1:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 4 - 10:00 AM</li>
          <li>Doctor 5 - 2:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Tuesday</td>
      <td>
        <ul>
          <li>Doctor 2 - 9:00 AM</li>
          <li>Doctor 3 - 1:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 4 - 10:00 AM</li>
          <li>Doctor 5 - 2:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>wednesday</td>
      <td>
        <ul>
          <li>Doctor 2 - 9:00 AM</li>
          <li>Doctor 3 - 1:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 4 - 10:00 AM</li>
          <li>Doctor 5 - 2:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>thursday</td>
      <td>
        <ul>
          <li>Doctor 2 - 9:00 AM</li>
          <li>Doctor 3 - 1:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 4 - 10:00 AM</li>
          <li>Doctor 5 - 2:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>friday</td>
      <td>
        <ul>
          <li>Doctor 2 - 9:00 AM</li>
          <li>Doctor 3 - 1:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 4 - 10:00 AM</li>
          <li>Doctor 5 - 2:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Doctor 1 - 11:00 AM</li>
          <li>Doctor 6 - 3:00 PM</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

        </div>
        </>
    );
}