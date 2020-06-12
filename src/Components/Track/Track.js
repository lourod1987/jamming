import React from 'react';
import './Track.css';

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.renderAction = this.renderAction.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  removeTrack() {
    this.props.onRemove(this.props.track);
  }

  renderAction(isRemoval) {
    if (isRemoval) {
      return <button className="Track-action">-</button>;
    } else {
      return <button className="Track-action">+</button>;
    }
  }

  render() {
    const { track } = this.props;

    const addButton = (
      <button className="Track-action" onClick={this.addTrack}>+</button>
    );

    const minusButton = (
      <button className="Track-action" onClick={this.removeTrack}>-</button>
    );

    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{track.name}</h3>
          <p>{track.artist} | {track.album}</p>
        </div>
          {this.props.isRemoval ? minusButton : addButton}
      </div>
    );
  }
}

export default Track;