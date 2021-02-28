import React from 'react'

const Loading = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-2 offset-5">
                    <div className="spinner-border" role="status">
                        <span className="sr-only ">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading
