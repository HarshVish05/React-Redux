import React, { Component } from 'react'

export class Form extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            title : '',
            body : ''
        }
        this.onSubmit=this.onSubmit.bind(this);
        this.onChange=this.onChange.bind(this);
    }
    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    } 

    onSubmit(e){
        e.preventDefault();

        const post_data = {
            title: this.state.title,
            body: this.state.body
        }

        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            } ,
            body: JSON.stringify(post_data)
        })
        .then(res=>res.json())
        .then(data=>console.log(data));
    }
    


  render() {
    return (
      <div>
        <h2>Add New Post</h2>
        <form onSubmit={this.onSubmit}>
            <div>
                <label>Title</label><br/>
                <input type='text' name='title' onChange={this.onChange} value={this.state.title}></input><br/>
            </div>
            <div>
                <label>Body</label><br/>
                <textarea name='body' onChange={this.onChange} value={this.state.body}></textarea><br/>
            </div>
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form