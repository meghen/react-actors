# React Actors App
## Description
Duration: 1.5 hours

This is an app created to practice building components and to stretch my understanding of React.

### Technologies Used
- React

### Screenshot
![React Actors Page](https://github.com/meghen/react-actors/blob/master/Screen%20Shot%202020-02-18%20at%201.02.56%20PM.png?raw=true)

![React Actors Popup](https://github.com/meghen/react-actors/blob/master/Screen%20Shot%202020-02-18%20at%201.03.33%20PM.png?raw=true)

## Checklist
- [x] Create components for the following: App.js, Header.js, About.js, Contact.js, Footer.js 
- [x] Paste pre-made code into App.js file
    ```
    import React, { Component } from 'react';
    import './App.css';
    import Header from '../Header/Header';
    import About from '../About/About';
    import Contact from '../Contact/Contact';
    import Footer from '../Footer/Footer';

    class App extends Component {
    render() {
        return (
        <div className="App">
            <Header />
            <About />
            <Contact />
            <Footer />
        </div>
        );
    }
    }

    export default App;
    ```
-[x] Should contain an h1 that says React Actors
-[x] Should contain an h2 that says About and a paragraph describing the organization.
-[x] Should contain an h2 that says Contact, a paragraph with the phone number, and a paragraph with the email.
-[x] Should contain a copyright © React Actors (don't worry about the symbol if you can't get it working, but you should be able to copy and paste it).

## Stretch Goals
-[] A sentence should appear below the form that says who the person is and their best impression.
-[] This sentence should display only if all three fields have values. (Research conditional rendering.)
-[x] An alert should say thank you and then the first name
-[x] The form should clear after click
