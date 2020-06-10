import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [
        { id: 0, name: 'still feel', artist: 'half alive', album: 'something' },
        { id: 1, name: 'getaway car', artist: 'Audioslave', album: 'Audioslave' },
        { id: 2, name: 'ordinary people', artist: 'John Legend', album: 'Living' },
      ],
      playlistName: 'Lou Jams',
      playlistTracks:  [
        { id: 0, name: 'Doses & Mimosas', artist: 'dont know', album: 'no name' },
        { id: 1, name: 'Tiger', artist: 'Honeyclaws', album: 'Honeyclaws' },
        { id: 2, name: 'Volcano', artist: 'Woodkid', album: 'Live Performance' },
        { id: 3, name: 'Example', artist: 'Test', album: 'Rich' },
        { id: 4, name: 'Volcano', artist: 'Woodkid', album: 'Live Performance' },
        { id: 5, name: 'Volcano', artist: 'Woodkid', album: 'Live Performance' },
      ]
    }

    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
   if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
     return;
   }

   this.setState({
     playlistTracks: [...track]
   });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
