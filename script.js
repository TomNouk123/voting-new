const groupContainer = document.getElementById("groupContainer");
const groupTitle = document.getElementById("groupTitle");
const toggleArrow = document.getElementById("toggleArrow");
const voteBtn = document.getElementById("voteBtn");

let showingBoys = true;

const boyGroups = [
    {
        name: "STRAY KIDS",
        agency: "JYP ENTERTAINMENT",
        desc: "Bangchan, Lee Know, Changbin, Hyunjin, Han, Felix, Seungmin, I.N",
        short: "Een self-producing groep bekend om hun krachtige, unieke geluid en intense performances.",
        votes: 26,
        img: "images/boygroups/straykids.jpeg"
    },
    {
        name: "BTS",
        agency: "HYBE",
        desc: "RM, Jin, Suga, J-Hope, Jimin, V, Jungkook",
        short: "Een wereldwijd fenomeen dat bekendstaat om hun emotionele muziek en baanbrekende impact op de popcultuur.",
        votes: 20,
        img: "images/boygroups/bts.jpg"
    },
    {
        name: "SEVENTEEN",
        agency: "PLEDIS ENTERTAINMENT",
        desc: "S.Coups, Joshua, Jun, DK, Mingyu, The8, Woozi…",
        short: "Een 13-koppige self-producing groep beroemd om hun strakke choreografie en veelzijdige eenheden.",
        votes: 14,
        img: "images/boygroups/seventeen.jpg"
    },
    {
        name: "TXT",
        agency: "HYBE",
        desc: "Yeonjun, Soobin, Beomgyu, Taehyun, Hueningkai",
        short: "Een frisse, moderne groep die bekendstaat om hun verhaalvertelling en jeugdige concepten.",
        votes: 13,
        img: "images/boygroups/txt.jpg"
    },
    {
        name: "ATEEZ",
        agency: "KQ ENTERTAINMENT",
        desc: "Hongjoong, Seonghwa, Yunho, Yeosang, San, Mingi, Wooyoung, Jongho",
        short: "Een krachtige performancegroep met een piratenachtig avontuurconcept en explosieve energie.",
        votes: 12,
        img: "images/boygroups/ateez.jpg"
    },
    {
        name: "ENHYPEN",
        agency: "BELIFT LAB",
        desc: "Jungwon, Heeseung, Jay, Jake, Sunghoon, Sunoo, Ni-Ki",
        short: "Een groep die thema’s als groei en dualiteit verkent via een uniek vampierachtig universum.",
        votes: 11,
        img: "images/boygroups/enhypen.jpg"
    },
    {
        name: "NCT127",
        agency: "SM ENTERTAINMENT",
        desc: "Johnny, Taeyong, Yuta, Doyoung, Jaehyun, Winwin, Jungwoo, Mark, Haechan",
        short: "Een energieke groep bekend om hun jeugdige charme en opbouwende YG-sound.",
        votes: 10,
        img: "images/boygroups/nct127.jpg"
    },
    {
        name: "NCT DREAM",
        agency: "SM ENTERTAINMENT",
        desc: "Mark, Renjun, Jeno, Haechan, Jaemin, Chenle, Jisung",
        short: "Een subunit die van een jeugdig concept evolueerde naar volwassen, verfijnde popmuziek.",
        votes: 9,
        img: "images/boygroups/nctdream.jpg"
    },
    {
        name: "BOYNEXTDOOR",
        agency: "KOZ ENTERTAINMENT",
        desc: "Jaehyun, Sungho, Riwoo, Taesan, Leehan, Woonhak",
        short: "Bekend om hun uitzonderlijk precieze choreografie en sterke, filmische concepten.",
        votes: 8,
        img: "images/boygroups/bnd.jpg"
    },
    {
        name: "ZEROBASEONE",
        agency: "WAKEONE",
        desc: "Sung Hanbin, Zhang Hao, Seok Matthew, Ricky, Kim Gyuvin, Park Gunwook, Han Yujin",
        short: "Een projectgroep die snel populair werd door hun frisse stijl en emotionele popmuziek.",
        votes: 8,
        img: "images/boygroups/zb1.jpg"
    },
    {
        name: "P1HARMONY",
        agency: "FNC ENTERTAINMENT",
        desc: "Keeho, Theo, Jiung, Intak, Soul, Jongseob",
        short: "Een veelzijdige groep die bekendstaat om hun sterke vocals, rap en dynamische urban sound.",
        votes: 7,
        img: "images/boygroups/p1harmony.jpg"
    },
    {
        name: "RIIZE",
        agency: "SM ENTERTAINMENT",
        desc: "Shotaro, Eunseok, Sungchan, Wonbin, Sohee, Anton",
        short: "Een creatieve groep die elektronische pop combineert met elegante choreografie.",
        votes: 6,
        img: "images/boygroups/riize.jpg"
    }
];

const girlGroups = [
    {
        name: "BLACKPINK",
        agency: "YG ENTERTAINMENT",
        desc: "Jisoo, Jennie, Rosé, Lisa",
        short: "Een wereldwijde supergroep bekend om hun luxe imago, krachtige performances en iconische hits.",
        votes: 24,
        img: "images/girlgroups/blackpink.jpg"
    },
    {
        name: "NEWJEANS",
        agency: "ADOR / HYBE",
        desc: "Minji, Hanni, Danielle, Haerin, Hyein",
        short: "Een frisse en innovatieve groep die K-pop vernieuwt met minimalistische muziek en Y2K-concepten.",
        votes: 20,
        img: "images/girlgroups/newjeans.jpg"
    },
    {
        name: "LE SSERAFIM",
        agency: "SOURCE MUSIC / HYBE",
        desc: "Chaewon, Sakura, Yunjin, Kazuha, Eunchae",
        short: "Een confidentie-gedreven groep die bekend is om hun krachtige choreografie en bold attitude.",
        votes: 18,
        img: "images/girlgroups/lesserafim.jpg"
    },
    {
        name: "TWICE",
        agency: "JYP ENTERTAINMENT",
        desc: "Nayeon, Jeongyeon, Momo, Sana, Jihyo, Mina, Dahyun, Chaeyoung, Tzuyu",
        short: "Een van de grootste girlgroups ooit, geliefd om hun catchy feel-good hits en charmante energie.",
        votes: 17,
        img: "images/girlgroups/twice.jpg"
    },
    {
        name: "IVE",
        agency: "STARSHIP ENTERTAINMENT",
        desc: "Yujin, Gaeul, Rei, Wonyoung, Liz, Leeseo",
        short: "Een elegante en zelfverzekerde groep bekend om hun luxe visuals en sterke popsound.",
        votes: 16,
        img: "images/girlgroups/ive.jpg"
    },
    {
        name: "AESPA",
        agency: "SM ENTERTAINMENT",
        desc: "Karina, Giselle, Winter, Ningning",
        short: "Een futuristische groep die K-pop combineert met een virtuele wereld en krachtige vocals.",
        votes: 15,
        img: "images/girlgroups/aespa.jpg"
    },
    {
        name: "RED VELVET",
        agency: "SM ENTERTAINMENT",
        desc: "Irene, Seulgi, Wendy, Joy, Yeri",
        short: "Een unieke groep die zowel velvet R&B als vrolijke red-pop perfect combineert.",
        votes: 14,
        img: "images/girlgroups/redvelvet.jpg"
    },
    {
        name: "I-DLE",
        agency: "CUBE ENTERTAINMENT",
        desc: "Soyeon, Miyeon, Minnie, Yuqi, Shuhua",
        short: "Een zelfproducerende girlgroup bekend om hun sterke identiteit en krachtige female-empowerment hits.",
        votes: 13,
        img: "images/girlgroups/idle.png"
    },
    {
        name: "ITZY",
        agency: "JYP ENTERTAINMENT",
        desc: "Yeji, Lia, Ryujin, Chaeryeong, Yuna",
        short: "Een high-energy groep die draait om self-love, krachtige dans en girl-crush vibes.",
        votes: 12,
        img: "images/girlgroups/itzy.jpg"
    },
    {
        name: "SISTAR",
        agency: "STARSHIP ENTERTAINMENT",
        desc: "Hyorin, Bora, Soyu, Dasom",
        short: "Een vocaal sterke groep met een catchy, frisse sound en herkenbare popstijl.",
        votes: 11,
        img: "images/girlgroups/sistar.jpg"
    },
    {
        name: "ILLIT",
        agency: "BE:LIFT LAB",
        desc: "Yunah, Minju, Moka, Wonhee, Iroha",
        short: "Een projectgroep die bekendstaat om hun energieke optredens en heldere popmuziek.",
        votes: 10,
        img: "images/girlgroups/illit.jpg"
    },
    {
        name: "IZNA",
        agency: "WAKEONE ENTERTAINMENT",
        desc: "Mai, Bang Jeemin, Koko, Ryu Sarang, Choi Jungeun, Jeong Saebi",
        short: "Een experimentele groep die genres mixt met krachtige vocals en unieke concepten.",
        votes: 9,
        img: "images/girlgroups/izna.jpg"
    }
];

function renderGroups(list) {
    groupContainer.innerHTML = "";

    list.forEach((g, index) => {
        groupContainer.innerHTML += `
            <div class="group-card">
                <img src="${g.img}" class="group-img">

                <div class="number-badge">${index + 1}</div>

                <div class="group-info">
                    <h2 class="group-name">${g.name}</h2>
                    <p class="agency">${g.agency}</p>

                    <!-- ✅ LEDEN -->
                    <p class="members">${g.desc}</p>

                    <!-- ✅ KORTE BESCHRIJVING -->
                    <p class="description">${g.short}</p>

                    <p class="votes">${g.votes} VOTES</p>
                </div>
            </div>
        `;
    });
}

renderGroups(boyGroups);

toggleArrow.addEventListener("click", () => {
    showingBoys = !showingBoys;

    if (showingBoys) {
        groupTitle.textContent = "BOY GROUPS";
        toggleArrow.textContent = "›";
        renderGroups(boyGroups);

        // ✅ juiste stem-pagina klaarzetten
        voteBtn.href = "vote.html?type=boy";

    } else {
        groupTitle.textContent = "GIRL GROUPS";
        toggleArrow.textContent = "‹";
        renderGroups(girlGroups);

        // ✅ juiste stem-pagina klaarzetten
        voteBtn.href = "vote.html?type=girl";
    }
});