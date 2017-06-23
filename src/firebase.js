import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCW7dpjz0VnOxb1rVaLEv9evHFSVxYVy4c",
  authDomain: "nba-trivia-21db0.firebaseapp.com",
  databaseURL: "https://nba-trivia-21db0.firebaseio.com",
  projectId: "nba-trivia-21db0",
  storageBucket: "nba-trivia-21db0.appspot.com",
  messagingSenderId: "326867782495"
};
firebase.initializeApp(config);
export default firebase;
