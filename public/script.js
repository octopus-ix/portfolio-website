async function loadProjects() {
  const response = await fetch("/api/projects");
  const projects = await response.json();

  const projectList = document.getElementById("project-list");

  projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <p><strong>Tech Stack:</strong> ${project.techStack}</p>
    `;

    projectList.appendChild(card);
  });
}

loadProjects();