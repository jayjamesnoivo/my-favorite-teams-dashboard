const teams = [
  {
    name: "Toronto Raptors",
    league: "NBA",
    colors: ["#ce1141", "#000000"],
    logo: "assets/raptors.png",
    bestPlayerNow: "Scottie Barnes",
    bestPlayerAllTime: "Vince Carter",
    trophies: "Champions NBA 2019",
  },
  {
    name: "Montreal Canadiens",
    league: "NHL",
    colors: ["#AF1E2D", "#192168"],
    logo: "assets/canadiens.png",
    bestPlayerNow: "Ivan Demidov",
    bestPlayerAllTime: "Carey Price",
    trophies: "24x Coupe Stanley",
  },
  {
    name: "New England Patriots",
    league: "NFL",
    colors: ["#002244", "#C60C30"],
    logo: "assets/patriots.png",
    bestPlayerNow: "Drake Maye",
    bestPlayerAllTime: "Tom Brady",
    trophies: "6x Super Bowl",
  },
  {
    name: "Sporting CP",
    league: "Liga Portugal",
    colors: ["#008153", "#ffffff"],
    logo: "assets/sporting.png",
    bestPlayerNow: "Pedro Goncalves",
    bestPlayerAllTime: "Cristiano Ronaldo",
    trophies: "21x Champion du Portugal",
  },
  {
    name: "Portugal (Sélection nationale)",
    league: "UEFA",
    colors: ["#006e3a", "#ed1c24"],
    logo: "assets/portugal.png",
    bestPlayerNow: "Bruno Fernandes, Nuno Mendes, Vitinha, Rafael Leao",
    bestPlayerAllTime: "Cristiano Ronaldo",
    trophies: "EURO 2016 • Nations League 2019 & 2025",
  }
];

const container = document.getElementById("teams-container");

teams.forEach(team => {
  const card = document.createElement("div");
  card.className = "team-card";

  card.innerHTML = `
    <img src="${team.logo}" class="team-logo" alt="${team.name}">
    <div class="team-name">${team.name}</div>
    <div class="team-league">${team.league}</div>

    <div class="team-section-title">Couleurs :</div>
    ${team.colors.map(color => `<span class="color-box" style="background:${color}"></span>`).join("")}

    <div class="team-section-title">Meilleur joueur actuel :</div>
    <p>${team.bestPlayerNow}</p>

    <div class="team-section-title">Meilleur joueur all-time :</div>
    <p>${team.bestPlayerAllTime}</p>

    <div class="team-section-title">Trophées importants :</div>
    <p>${team.trophies}</p>
  `;

  container.appendChild(card);
});
