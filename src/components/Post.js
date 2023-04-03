import React, { Component } from 'react'

export class Post extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            post_data : []
        }
    }

    componentWillMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res =>res.json())
        .then(data => this.setState({post_data:data}))
    }

  render() {
    const postItems= this.state.post_data.map( post =>
            <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        )
    return (
      <div>Post
        {postItems}
      </div>
    )
  }
}

export default Post