import { useState} from 'react';
import React from 'react';

export default function Search() {

  const [inputText, setInputText] = useState('')

  const search = (e) => {
    e.preventDefault();
    window.open(`https://www.youtube.com/results?search_query=${inputText}`,"_blank","noreferrer");
  }

  return (
    <div >
      <form onSubmit={search}>

      <input  className="input" placeholder="Search"onChange={(e) => setInputText(e.target.value)}/>
      </form>
    </div>
  );
}