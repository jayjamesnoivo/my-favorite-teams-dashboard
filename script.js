const teams = [
  {
    name: "Toronto Raptors",
    league: "NBA",
    colors: ["#CE1141", "#000000"],
    logo: "assets/Toronto_Raptors_logo.svg.png",
    bestNow: "Scottie Barnes",
    bestAllTime: "Vince Carter",
    trophies: "Champions NBA 2019",
  },
  {
    name: "Montreal Canadiens",
    league: "NHL",
    colors: ["#AF1E2D", "#192168"],
    logo: "assets/Montreal_Canadiens.svg.png",
    bestNow: "Ivan Demidov",
    bestAllTime: "Carey Price",
    trophies: "24× Coupe Stanley",
  },
  {
    name: "New England Patriots",
    league: "NFL",
    colors: ["#002244", "#C60C30"],
    logo: "assets/New_England_Patriots_logo.svg.png",
    bestNow: "Drake Maye",
    bestAllTime: "Tom Brady",
    trophies: "6× Super Bowl",
  },
  {
    name: "Sporting CP",
    league: "Liga Portugal",
    colors: ["#008153", "#FFFFFF"],
    logo: "assets/Sporting_CP_crest.svg.png",
    bestNow: "Pedro Goncalves",
    bestAllTime: "Cristiano Ronaldo",
    trophies: "21× Champion du Portugal",
  },
  {
    name: "Portugal (Sélection nationale)",
    league: "UEFA",
    colors: ["#006e3a", "#ED1C24"],
    logo: "assets/Portugal_National_Team_logo.png",
    bestNow: "Bruno Fernandes, Vitinha, Rafael Leão",
    bestAllTime: "Cristiano Ronaldo",
    trophies: "EURO 2016, Nations League 2019 & 2025",
  },
];

const dashboard = document.getElementById("dashboard");

teams.forEach(team => {
  const card = document.createElement("div");
  card.className = "team-card";

  card.innerHTML = `
    <img src="${team.logo}" class="team-logo" alt="${team.name}">

    <div class="team-name">${team.name}</div>
    <div class="team-league">${team.league}</div>

    <div class="section-title">Couleurs</div>
    ${team.colors.map(c => `<span class="color-box" style="background:${c}"></span>`).join("")}

    <div class="section-title">Meilleur joueur actuel</div>
    <div class="team-info-text">${team.bestNow}</div>

    <div class="section-title">Meilleur joueur all-time</div>
    <div class="team-info-text">${team.bestAllTime}</div>

    <div class="section-title">Trophées</div>
    <div class="team-info-text">${team.trophies}</div>
  `;

  dashboard.appendChild(card);
});
