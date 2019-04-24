export const environment = {
  production: true
};

export let APIURL = '';

switch (window.location.hostname) {
  // this is the deployed angular application
  case 'https://cjon-red-badge-angular-project.herokuapp.com/':
    // this is the full url of your deployed API
    APIURL = 'https://cjon-red-badge-project.herokuapp.com/api/v1'
    break;
  default:
    // this is the local host name of your API
    APIURL = 'http://localhost:5000';
}