# Node.js File Upload and Download App

This is a simple Node.js application built with Express.js that allows you to upload any type of file to the server and download it back to your browser.

## Prerequisites

To run this application, you need to have the following installed on your system:

- Node.js (https://nodejs.org)
- npm (Node Package Manager)

## Installation

1. Clone the repository or download the source code from [GitHub](https://github.com/drshtaant/file-upload-download.git):

   ```bash
   git clone https://github.com/drshtaant/file-upload-download.git
   ```

2. Navigate to the project directory:

   ```bash
   cd file-upload-download
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the Node.js server:

   ```bash
   npm start
   ```

2. Open your web browser and access the following endpoints:

   - Upload a file: `http://localhost:8000/upload`
   - Download the uploaded file: `http://localhost:8000/download`

## Endpoints

### 1. `/upload`

- Method: POST
- Description: This endpoint allows you to upload any type of file to the server. The uploaded file will be saved in the local directory `/files/uploaded.bin`.

### 2. `/download`

- Method: GET
- Description: This endpoint streams back the `uploaded.bin` file to your browser for download.

## File Overwrite

Whenever a new file is uploaded using the `/upload` endpoint, it will replace the old `uploaded.bin` file if it exists. This ensures that the latest uploaded file is always available for download.

## Acknowledgments

Special thanks to the Express.js community for providing a simple and efficient framework for building web applications with Node.js.

If you have any questions or need further assistance, please don't hesitate to contact us.

Happy uploading and downloading! 🚀
