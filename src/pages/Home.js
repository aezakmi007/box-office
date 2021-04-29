import React, { useState } from 'react';
import MainPageLayout from '../Components/MainPageLayout';
import apiGet from '../misc/config';

function Home() {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');

  const isShowSearch = searchOption === 'shows';

  const onSearch = () => {
    apiGet(`/search/${searchOption}?q=${input}`).then(result => {
      setResults(result);
    });
  };
  const onInputChange = ev => {
    setInput(ev.target.value);
  };
  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };
  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };
  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No Results</div>;
    }
    if (results && results.length > 0) {
      return results[0].show
        ? results.map(item => <div key={item.show.id}>{item.show.name}</div>)
        : results.map(item => (
            <div key={item.person.id}>{item.person.name}</div>
          ));
    }
    return null;
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        placeholder="Search for something"
        onChange={onInputChange}
        value={input}
        onKeyDown={onKeyDown}
      />
      <button type="button" onClick={onSearch}>
        Search
      </button>
      <div>
        <lable htmlFor="shows-search">
          shows
          <input
            id="shows-serach"
            type="radio"
            value="shows"
            onChange={onRadioChange}
            checked={isShowSearch}
          />
        </lable>
        <label htmlFor="actor-search">
          <input
            id="actor-search"
            type="radio"
            value="people"
            onChange={onRadioChange}
            checked={!isShowSearch}
          />
          Actor
        </label>
      </div>

      {renderResults()}
    </MainPageLayout>
  );
}

export default Home;
