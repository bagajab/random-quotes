import React, { Component } from 'react'
import axios from 'axios';
import Loading from './Loading';
import Quote from './Quote';
const QOUTE_API = 'https://api.quotable.io/random';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = { author: "", content: "", tags: [], loading: true };
  }

  componentDidMount() {
    axios.get(QOUTE_API).then((res) => {
      const { author, content, tags } = res.data;
      this.setState({ author, content, tags, loading: false })
    }).catch((err) => console.log(err))
  }

  generateRandomQuote = () => {
    this.setState({ loading: true })
    axios.get(QOUTE_API).then((res) => {
      const { author, content, tags } = res.data;
      this.setState({ author, content, tags, loading: false })
    }).catch((err) => console.log(err))
  }
  render() {
    const { author, content, tags, loading } = this.state;
    if (loading) return <Loading />
    return <Quote author={author} content={content} tags={tags}
                  generateRandomQuote={this.generateRandomQuote} />
  }
}

export default App
