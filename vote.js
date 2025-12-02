const voteGrid = document.getElementById("voteGrid");
const groupTitle = document.getElementById("groupTitle");
const arrow = document.getElementById("arrow");

const params = new URLSearchParams(window.location.search);
const type = params.get("type");

let showingGirls = type === "girl";

/* ✅ BOY GROUPS (zelfde namen als homepage) */
const boyGroups = [
    { name: "STRAY KIDS", img: "images/boygroups/straykids.jpeg" },
    { name: "BTS", img: "images/boygroups/bts.jpg" },
    { name: "SEVENTEEN", img: "images/boygroups/seventeen.jpg" },
    { name: "TXT", img: "images/boygroups/txt.jpg" },
    { name: "ATEEZ", img: "images/boygroups/ateez.jpg" },
    { name: "ENHYPEN", img: "images/boygroups/enhypen.jpg" },
    { name: "NCT 127", img: "images/boygroups/nct127.jpg" },
    { name: "NCT DREAM", img: "images/boygroups/nctdream.jpg" },
    { name: "BOYNEXTDOOR", img: "images/boygroups/bnd.jpg" },
    { name: "ZEROBASEONE", img: "images/boygroups/zb1.jpg" },
    { name: "P1HARMONY", img: "images/boygroups/p1harmony.jpg" },
    { name: "RIIZE", img: "images/boygroups/riize.jpg" }
];

/* ✅ GIRL GROUPS */
const girlGroups = [
    { name: "TWICE", img: "images/girlgroups/twice.jpg" },
    { name: "BLACKPINK", img: "images/girlgroups/blackpink.jpg" },
    { name: "LE SSERAFIM", img: "images/girlgroups/lesserafim.jpg" },
    { name: "I-DLE", img: "images/girlgroups/idle.png" },
    { name: "IVE", img: "images/girlgroups/ive.jpg" },
    { name: "IZNA", img: "images/girlgroups/izna.jpg" },
    { name: "ILLIT", img: "images/girlgroups/illit.jpg" },
    { name: "ITZY", img: "images/girlgroups/itzy.jpg" },
    { name: "AESPA", img: "images/girlgroups/aespa.jpg" },
    { name: "BABYMONSTER", img: "images/girlgroups/babymonster.jpg" },
    { name: "MAMAMOO", img: "images/girlgroups/mamamoo.jpg" },
    { name: "RED VELVET", img: "images/girlgroups/redvelvet.jpg" }
];

/* ✅ GRID TEKENEN */
function renderGrid(list) {
    voteGrid.innerHTML = "";

    list.forEach(group => {
        voteGrid.innerHTML += `
            <div class="grid-item">
                <img src="${group.img}">
                <div class="grid-text">${group.name}</div>
            </div>
        `;
    });
}

/* ✅ START MET GIRL GROUPS */
if (showingGirls) {
    groupTitle.textContent = "GIRL GROUPS";
    arrow.textContent = "‹";
    renderGrid(girlGroups);
} else {
    groupTitle.textContent = "BOY GROUPS";
    arrow.textContent = "›";
    renderGrid(boyGroups);
}

/* ✅ PIJLTJE WISSELT */
arrow.addEventListener("click", () => {
    showingGirls = !showingGirls;

    if (showingGirls) {
        groupTitle.textContent = "GIRL GROUPS";
        arrow.textContent = "‹";
        renderGrid(girlGroups);
    } else {
        groupTitle.textContent = "BOY GROUPS";
        arrow.textContent = "›";
        renderGrid(boyGroups);
    }
});