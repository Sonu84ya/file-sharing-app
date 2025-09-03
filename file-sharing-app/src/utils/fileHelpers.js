export const validateFileType = (file) => {
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/gif'];
    return allowedTypes.includes(file.type);
};

export const validateFileSize = (file, maxSizeInMB) => {
    const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
    return file.size <= maxSizeInBytes;
};

export const formatFileSize = (sizeInBytes) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    if (sizeInBytes === 0) return '0 Byte';
    const i = parseInt(Math.floor(Math.log(sizeInBytes) / Math.log(1024)));
    return Math.round(sizeInBytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
};