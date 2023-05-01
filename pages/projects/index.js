import Head from 'next/head'
import Master from '/components/Master'
import {projects as myProjects} from "/db/projects"
const projects = () => {
  return (
    <Master>
      <Head>
        <title>Projects | {process.env.NEXT_PUBLIC_APP_NAME}</title>
      </Head>
    <div className='row'>
      {
        myProjects.map((project, index) => {
          return (<div className="card mb-5 p-0" key={index}>
                <img className="card-img-top" src={project.image} alt="project image" />
                <div className="card-body">
                  <h4 className="card-title">{project.name}</h4>
                  <p className="card-text">{project.description}</p>
                  <a className='text-decoration-none' href={project?.github} target='_blank'>Check the code</a>
                </div>
              </div>)
        })
      }
    </div>
    </Master>
  )
}

export default projects