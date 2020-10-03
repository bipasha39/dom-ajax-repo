var a = document.createElement("a");
a.setAttribute("href", link);
var linkText = document.createTextNode(link);
a.appendChild(linkText);
td_link.appendChild(a);

function fetchGithubEndpoint(endpoint) {
  const githubAPIBaseURL = "https://api.github.com";
  fetch(`${githubAPIBaseURL}${endpoint}`)
    .then(function(response) {
      console.log(response.status);
      return response.json();
    })
    .then(function(repositories) {
      console.log(repositories);
      const reposList = document.getElementById("pull-request-list");

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
