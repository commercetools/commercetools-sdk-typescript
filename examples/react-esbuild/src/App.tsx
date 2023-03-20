import * as React from 'react'
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from 'react';
import { getApiRoot, projectKey } from './lib'

function App() {
  const [projectDetails, setProjectDetails] = useState({})
  const proc = process.env

  const getProject = async () => {
    try {
      const project = await getApiRoot()
        .withProjectKey({ projectKey })
        // .products()
        // .get()
        // .execute();

        .customers()
        .get()
        .execute()

      setProjectDetails(project.body);
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getProject()
  }, [])

  return (
    <>
      <div>Project Details</div>
      <pre>
        {JSON.stringify(projectDetails, undefined, 2)}
      </pre>
    </>
  )
}


// Mount component 
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App />);

// export default App;
