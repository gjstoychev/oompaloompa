## Intro

This project was created with [Create React App](https://github.com/facebookincubator/create-react-app) starter kit. It sets up the development environment enabling the latest JavaScript features and uses build tools like Babel and webpack under the hood, but works with zero configuration.


## Getting started

1. Clone or download/unzip the project
```
cd oompaloompa
```

2. Enter the project directory
```
cd oompaloompa
```

3. Install the node_modules
```
npm install
```

4. Start the project
```
npm start
```

5. Or run tests
```
npm test
```

## Requirements

The application should consist of two views. The first view should list the Oompa Loompa workers and be able to filter them.<br>
The second view should show the details of an Oompa Loompa. The views layout should stick to the designs shown in their respective view description.<br>
The application should be a Single Page Application so that the navigation is done always client-side, without completely refreshing the whole document.<br>
The solution should be presented through a public repository that must include a README document where you explain how to execute the application.<br>

### Main view

```URL: /```

This view should show the list of Oompa Loompas that are available at the endpoint https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?pa
ge=1 where the page query param can be used to select the page to be retrieved. The list must have an endless scroll, so that each page of Oompa Loompas is loaded as the user scrolls down.
Once the list is obtained for the first time from the external service, it must be stored in the client so that it is only requested if more than one day has passed since the last time it was requested.<br>
The user can filter the list that has already received by profession and name (first and last name). No call is required in order to filter the list of Oompa Loompas, the filter will only
take into account the already downloaded list. Filtering must have an immediate effect, so the items on the list will change as the user types characters on the filter.<br>
When an Oompa Loompa is clicked, the router must navigate to the Detail view page.<br>

### Detail view

```URL: /{id}```

This view should show the details of the selected Oompa Loompa according to the endpoint https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas/{id}, where {id} is the Oompa Loompa identifier.<br>
Once the detail is obtained for the first time from the external service, it must be stored in the client so that it is only requested if more than one day has passed since the last time it
was requested.<br>
It must be taken into account that some episodes description include HTML and it should be shown interpreted (not escaped).<br>
When the user clicks on the header icon, the website must go back to the Main View.<br>


## Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


#### `npm test`

Launches the test runner in the interactive watch mode.<br>
On Linux or Mac OS there is a max number of system<br>
watchers that eventually need to be increased for larger<br>
projects if Jest is trying to watch too many files. Fix here:
````
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```` 


#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.


## Folder Structure

The project structure look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    components/
    containers/
    reducers/
    scripts/
    store/ 
    index.css
    index.js
```
