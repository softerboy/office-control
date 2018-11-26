# Office Control
###### Control your office furniture with smarter way!

### Demonstratable Single Page Application (SPA) example for controlling office furnitures

### *How to run project?*

# Requirements
### Nodejs (version > 8)


For convenience, project is divided into two section
* Backend
* Frontend

1. Clone this repository via command: git clone https://github.com/softerboy/office-control.git
2. Go to directory containing this Readme.md file
3. From command line enter command: <b>npm install</b>. This command installs backend branch dependencies
4. After all dependencies installed, run command: <b>npm start</b>. This command starts backend server on port 3000 (Make sure your port isn't busy from another process)

5. Then from command line goto frontend directory and run command: <b>npm install</b>. This command installs frontend branch dependencies
6. After all dependencies installed run command: <b>npm start</b>. After that webpack-dev-server automatically opens project in your default browser
  and you will see project's home screen.
  
# !!! IMPORTANT !!!
If at home screen appears "No results" message, your browser blocks site by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

#### So your browser doesn't allow XMLHTTPRequests from origin http://localhost:8080

To fix this, install any CORS fixer extension into your browser, for Chrome [Moesif](https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc?hl=en) is best choise
Turn on [Moesif](https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc?hl=en) extension and refresh home page
