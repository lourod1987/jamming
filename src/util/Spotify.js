const userAccess = '';

const Spotify = {
  getAccessToken: () => {
    if (userAccess !== '') {
      return userAccess;
    }
  },
};

export default Spotify;