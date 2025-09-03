import React, { useState } from 'react';

const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!selectedFile) {
            alert("Please select a file to upload.");
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                alert("File uploaded successfully!");
                setSelectedFile(null);
            } else {
                alert("File upload failed.");
            }
        } catch (error) {
            console.error("Error uploading file:", error);
            alert("An error occurred while uploading the file.");
        }
    };

    return (
        <div className="file-upload">
            <h2>Upload a File</h2>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
};

export default FileUpload;