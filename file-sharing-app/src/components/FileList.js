import React from 'react';

const FileList = ({ files }) => {
    return (
        <div className="file-list">
            <h2>Uploaded Files</h2>
            {files.length === 0 ? (
                <p>No files uploaded yet.</p>
            ) : (
                <ul>
                    {files.map((file, index) => (
                        <li key={index}>
                            <a href={file.url} target="_blank" rel="noopener noreferrer">
                                {file.name}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FileList;