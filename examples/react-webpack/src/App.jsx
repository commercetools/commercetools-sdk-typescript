import React, { useState, useEffect } from 'react';
import { getApiRoot, projectKey } from './lib'

import './App.css'

function App() {
  const [projectDetails, setProjectDetails] = useState({})

  const getProject = async () => {
    try {
      const project = await getApiRoot()
        .withProjectKey({ projectKey })
        // .products()
        .customers()
        .get()
        .execute()
        // .get()
        // .execute();

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
      {JSON.stringify(projectDetails, undefined, 2)}
    </>
  )
}

export default App;
