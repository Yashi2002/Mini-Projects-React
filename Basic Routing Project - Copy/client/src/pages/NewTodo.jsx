import {Form, Link} from "react-router-dom"
export function NewTodo() {
  return (
    <div className = "container">
      <h1 className ="page-title">
        NewTodo 
      </h1>
      <Form className="form" method="post">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="query">Title</label>
            <input type="text" name="title" id="title"/>
          </div>
        </div>
        <div className="form-btn-row form-row">
            <Link to=".." className="btn btn-outline">
            Back
            </Link>
            <button className="btn">Create</button>
        </div>
      </Form>
      </div>
  )
}
