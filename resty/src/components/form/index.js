import React from "react";
import { useState } from "react";
import "./form.css";

function Form(props) {
    const [url, seturl] = useState('');
    const [APImethod, setAPImethod] = useState('');

    let API = {
        url: url,
        method: APImethod,
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        props.handleApiCall(API);
    };

    return (
        <div>

            <form className="form" onSubmit={handleSubmit}>
                <label>

                    <span data-testid='span-url'>URL: </span>
                    <input onChange={(e) => { seturl(e.target.value) }} name="url" type="text" />
                    <button type="submit">GO!</button>
                </label>
                <label className="methods">
                    <button data-testid='get' onClick={(e) => { setAPImethod('GET') }} id="get">GET</button>
                    <button data-testid='post' onClick={(e) => { setAPImethod('POST') }} id="post">POST</button>
                    <button data-testid='put' onClick={(e) => { setAPImethod('PUT') }} id="put">PUT</button>
                    <button data-testid='delete' onClick={(e) => { setAPImethod('DELETE') }} id="delete">DELETE</button>
                </label>
            </form>
        </div>
    );
}

export default Form;