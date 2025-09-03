import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FileUpload from '../components/FileUpload';
import FileList from '../components/FileList';

const Home = () => {
    return (
        <div className="home">
            <Header />
            <main>
                <h1>Welcome to the File Sharing App</h1>
                <p>Share your PDF files and images with friends easily!</p>
                <FileUpload />
                <FileList />
            </main>
            <Footer />
        </div>
    );
};

export default Home;