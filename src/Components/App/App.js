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
        { id: 5, name: 'still feel', artist: 'half alive', album: 'something' },
        { id: 6, name: 'getaway car', artist: 'Audioslave', album: 'Audioslave' },
        { id: 7, name: 'ordinary people', artist: 'John Legend', album: 'Living' },
      ],
      playlistName: 'Lou Jams',
      playlistTracks:  [
        { id: 0, name: 'Doses & Mimosas', artist: 'dont know', album: 'no name' },
        { id: 1, name: 'Tiger', artist: 'Honeyclaws', album: 'Honeyclaws' },
        { id: 2, name: 'Volcano', artist: 'Woodkid', album: 'Live Performance' },
        { id: 3, name: 'Example', artist: 'Test', album: 'Rich' },
        { id: 4, name: 'Volcano', artist: 'Woodkid', album: 'Live Performance' },
      ]
    }

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
  }

  addTrack(track) {
   if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
     return;
   }

  const result = [...this.state.playlistTracks, track];

   this.setState({
    playlistTracks: result
   });
  }

  removeTrack(track) {
    const result = this.state.playlistTracks.filter(savedTrack => savedTrack.id !== track.id);

    this.setState({
      playlistTracks: result
    });
  }

  updatePlaylistName(name) {
    this.setState({
      playlistName: name
    })
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks;
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist 
              playlistName={this.state.playlistName} 
              playlistTracks={this.state.playlistTracks} 
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
