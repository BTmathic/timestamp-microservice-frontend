import React from 'react';

const DashboardPage = () => (
    <div className='dashboard'>
      <h1>API Project: Timestamp Microservice</h1>
      <h3>User Stories</h3>
      <div className='dashboard__user-stories'>
        <ol>
          <li>The API endpoint is GET [project_url]/api/timestamp/:date_string?</li>
          <li>A date string is valid if it can be successfully parsed by new Date(date_string). Note that the unix timestamp needs to be an integer (not a string) specifying millisectionds. In our test we will use date strings compliant with ISO-8601 (e.g., "2016-11-20") because this will ensure a UTC timestamp.</li>
          <li>If the date string is empty it should be equivalent to trigger new Date(), i.e., the service uses the current timestamp.</li>
          <li>
            If the date string is valid the api returns a JSON having the structure
            {'{"unix": <date.getTime()>, "utc" : <date.toUTCString()> }'}
            e.g., {'{"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}'}
          </li>
          <li>
            If the date string is invalid, the api returns a JSON having the structure
            {'{"error" : "Invalid Date" }'}
          </li>
        </ol>
      </div>
      <h3>Example Usage</h3>
      <div className='dashboard__examples'>
        <a href=''>[project_url]/api/timestamp/2015-12-25</a>
        <a href=''>[project_url]/api/timestamp/1450137600</a>
      </div>
      <h3>Example Output</h3>
      <div className='dashboard__example-output'>
        ...
      </div>
      <footer>By Alexander Molnar</footer>
    </div>
);

export default DashboardPage;