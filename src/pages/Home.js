import React, {useContext} from 'react'
import {Search} from '../components/Search'
import {Card} from '../components/Card'
import {GithubContext} from "../context/github/githubContext";

export const Home = () => {

  const {loading, users} = useContext(GithubContext)

  return (
    <>
      <Search />

      <div className="row">

          {loading
            ? (<div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
              </div>)
            : users.map(user => (
                <div className="col-sm-4 mb-4" key={user.id}>
                    <Card user={user}/>
                </div>)
              )
          }

      </div>

    </>
  )
}
