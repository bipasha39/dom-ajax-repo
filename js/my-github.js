// Write code here to communicate with Github
function fetchGithubEndpoint(endpoint) {
  const githubAPIBaseURL = "https://api.github.com";
  fetch(`${githubAPIBaseURL}${endpoint}`)
    .then(function(response) {
      console.log(response.status);
      return response.json();
    })
    .then(function(repositories) {
      console.log(repositories);
      const reposList = document.getElementById("repos-list");

      for (let i = 0; i < repositories.length; i++) {
        const repository = repositories[i];
        const repositoryElement = document.createElement("li");
        repositoryElement.innerHTML = repository.name;
        reposList.appendChild(repositoryElement);
      }
    });
}
const userName = "bipasha39";
fetchGithubEndpoint(`/users/${userName}/repos`);
