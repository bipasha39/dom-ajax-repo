// Write code here to communicate with Github
function fetchGithubEndpoint(endpoint) {
  const githubAPIBaseURL = "https://api.github.com";
  fetch(`${githubAPIBaseURL}${endpoint}`)
    .then(function(response) {
      console.log(response);
      return response.json();
    })
    .then(function(repositories) {
      console.log(repositories);
      const reposList = document.getElementById("repos-list");

      for (let i = 0; i < repositories.length; i++) {
        const repository = repositories[i];
        const repositoryElement = document.createElement("li");
        let a = document.createElement("a");
        a.setAttribute("href", repository.html_url);
        a.innerHTML = repository.name;
        repositoryElement.appendChild(a);
        reposList.appendChild(repositoryElement);
        let x = document.getElementById("repos-count");
        x.innerHTML = repositories.length;
      }
    });
}

const userName = "ayamaui";
fetchGithubEndpoint(`/repositories`);
