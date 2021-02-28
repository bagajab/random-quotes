import React from 'react'

const Quote = ({ content, author, tags, generateRandomQuote}) => {
    return (
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-12 col-lg-8 col-md-8 offset-lg-2 offset-md-2 text-center">
              <blockquote className="blockquote ">
                <span className="badge badge-secondary">{tags[0]}</span>
                <p className="mb-0">"{content}"</p>
                <footer className="blockquote-footer"><cite title="Source Title">{author}</cite></footer>
              </blockquote>
              <button type="button mt-5" onClick={generateRandomQuote} className="btn btn-primary ">Random</button>
            </div>
          </div>
        </div>
    )
}

export default Quote
