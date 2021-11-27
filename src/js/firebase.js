const firebaseConfig = {
    apiKey: "AIzaSyDOKMmZ49jSrVhEQUpdF8egrqAdSVKyXoo",
    authDomain: "pwa.firebaseapp.com",
    projectId: "pwa",
    storageBucket: "pwa.appspot.com",
    messagingSenderId: "221410187870",
    appId: "1:221410187870:web:208e6657378bdf7e6932cf",
    measurementId: "G-GRV0Y0X7LJ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);