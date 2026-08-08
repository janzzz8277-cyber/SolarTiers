const GAMEMODES = [
  {key:'vanilla', label:'Vanilla'},
  {key:'sword', label:'Sword'},
  {key:'axe', label:'Axe'},
  {key:'uhc', label:'UHC'},
  {key:'pot', label:'Pot'},
  {key:'nethpot', label:'NethPot'},
  {key:'smp', label:'SMP'},
  {key:'mace', label:'Mace'},
];

const TIER_ORDER = [
    'HT1',
    'LT1',
    'HT2',
    'LT2',
    'HT3',
    'LT3',
    'HT4',
    'LT4',
    'HT5',
    'LT5'
];

const TIER_POINTS = {
    HT1: 60,
    LT1: 45,
    HT2: 30,
    LT2: 20,
    HT3: 10,
    LT3: 6,
    HT4: 4,
    LT4: 3,
    HT5: 2,
    LT5: 1
};

const TIER_COLOR = {
    1: 'var(--t1)',
    2: 'var(--t2)',
    3: 'var(--t3)',
    4: 'var(--t4)',
    5: 'var(--t5)'
};

const STORAGE_KEY = 'players-data';

function tierNum(t) {
    return t ? parseInt(t.slice(2)) : null;
}


/* =========================================================
   MODE ICONS
   ========================================================= */

const MODE_ICONS = {
    vanilla: '<img src="images/vanilla.png" class="mode-icon" alt="">',
    sword: '<img src="images/sword.png" class="mode-icon" alt="">',
    axe: '<img src="images/axe.png" class="mode-icon" alt="">',
    uhc: '<img src="images/uhc.png" class="mode-icon" alt="">',
    pot: '<img src="images/pot.png" class="mode-icon" alt="">',
    nethpot: '<img src="images/nethpot.png" class="mode-icon" alt="">',
    smp: '<img src="images/smp.png" class="mode-icon" alt="">',
    mace: '<img src="images/mace.png" class="mode-icon" alt="">'
};
/* =========================================================
   DEFAULT PLAYERS
   ========================================================= */

const DEFAULT_PLAYERS = [
    {
        name: 'Kradusss',
        region: 'EU',
        skinUsername: 'Kradusss',
        tiers: {
            vanilla: null,
            sword: 'LT3',
            axe: 'LT3',
            uhc: null,
            pot: 'LT3',
            nethpot: 'HT4',
            smp: 'HT4',
            mace: 'LT3'
        }
    },
    {
        name: 'T_h_r_i_f_t_y',
        region: 'EU',
        skinUsername: 'T_h_r_i_f_t_y',
        tiers: {
            vanilla: null,
            sword: 'LT4',
            axe: null,
            uhc: null,
            pot: null,
            nethpot: 'LT4',
            smp: null,
            mace: 'LT3'
        }
    },
    {
        name: 'hrucurd',
        region: 'EU',
        skinUsername: 'hrucurd',
        tiers: {
            vanilla: null,
            sword: 'HT5',
            axe: 'LT4',
            uhc: null,
            pot: 'HT5',
            nethpot: 'HT5',
            smp: null,
            mace: 'LT3'
        }
    },
    {
        name: 'Luke2093',
        region: 'EU',
        skinUsername: 'Luke2093',
        tiers: {
            vanilla: null,
            sword: 'HT5',
            axe: null,
            uhc: null,
            pot: null,
            nethpot: null,
            smp: null,
            mace: null
        }
    },
    {
        name: 'zeranstorm1',
        region: 'EU',
        skinUsername: 'zeranstorm1',
        tiers: {
            vanilla: null,
            sword: null,
            axe: null,
            uhc: null,
            pot: null,
            nethpot: 'LT4',
            smp: null,
            mace: null
        }
    },
    {
        name: '0d1xx',
        region: 'EU',
        skinUsername: '0d1xx',
        tiers: {
            vanilla: null,
            sword: 'LT5',
            axe: 'HT5',
            uhc: null,
            pot: 'LT5',
            nethpot: null,
            smp: 'LT5',
            mace: 'LT4'
        }
    },
    {
        name: 'ev11dence',
        region: 'EU',
        skinUsername: 'ev11dence',
        tiers: {
            vanilla: null,
            sword: null,
            axe: null,
            uhc: null,
            pot: null,
            nethpot: 'HT4',
            smp: null,
            mace: null
        }
    },
    {
        name: 'HOLYYY17',
        region: 'EU',
        skinUsername: 'HOLYYY17',
        tiers: {
            vanilla: null,
            sword: 'LT5',
            axe: null,
            uhc: null,
            pot: null,
            nethpot: null,
            smp: null,
            mace: null
        }
    },
    {
        name: '_XARBE',
        region: 'EU',
        skinUsername: '_XARBE',
        tiers: {
            vanilla: null,
            sword: 'LT3',
            axe: 'HT4',
            uhc: null,
            pot: 'HT4',
            nethpot: 'LT4',
            smp: null,
            mace: null
        }
    },
    {
        name: 'Martosuli',
        region: 'EU',
        skinUsername: 'Martosuli',
        tiers: {
            vanilla: null,
            sword: 'HT5',
            axe: null,
            uhc: null,
            pot: null,
            nethpot: null,
            smp: null,
            mace: null
        }
    },
    {
        name: 'ceckhla',
        region: 'EU',
        skinUsername: 'ceckhla',
        tiers: {
            vanilla: null,
            sword: null,
            axe: null,
            uhc: null,
            pot: null,
            nethpot: 'HT5',
            smp: null,
            mace: null
        }
    },
    {
        name: 'LukaMamaci',
        region: 'EU',
        skinUsername: 'LukaMamaci',
        tiers: {
            vanilla: null,
            sword: 'LT5',
            axe: null,
            uhc: null,
            pot: 'LT4',
            nethpot: null,
            smp: null,
            mace: 'HT4'
        }
    },
    {
        name: 'DangerMarIow',
        region: 'EU',
        skinUsername: 'DangerMarIow',
        tiers: {
            vanilla: null,
            sword: 'HT4',
            axe: null,
            uhc: null,
            pot: null,
            nethpot: 'LT4',
            smp: null,
            mace: null
        }
    },
    {
        name: 'tato_17',
        region: 'EU',
        skinUsername: 'tato_17',
        tiers: {
            vanilla: null,
            sword: 'LT5',
            axe: null,
            uhc: null,
            pot: null,
            nethpot: null,
            smp: null,
            mace: 'LT4'
        }
    },
    {
        name: 'hhurtfull',
        region: 'EU',
        skinUsername: 'hhurtfull',
        tiers: {
            vanilla: null,
            sword: 'LT3',
            axe: 'LT3',
            uhc: 'LT3',
            pot: 'LT3',
            nethpot: 'HT3',
            smp: 'HT3',
            mace: 'LT3'
        }
    },
    {
        name: 'Giorgavarbiwo127',
        region: 'EU',
        skinUsername: 'Giorgavarbiwo127',
        tiers: {
            vanilla: null,
            sword: null,
            axe: null,
            uhc: null,
            pot: null,
            nethpot: null,
            smp: null,
            mace: 'LT4'
        }
    },
    {
        name: 'zukiGog',
        region: 'EU',
        skinUsername: 'zukiGog',
        tiers: {
            vanilla: null,
            sword: 'HT5',
            axe: null,
            uhc: null,
            pot: null,
            nethpot: null,
            smp: null,
            mace: null
        }
    }
];


let PLAYERS = [];
let activeGamemode = null;
let editingId = null;


/* =========================================================
   CALCULATIONS
   ========================================================= */

function computePoints(tiers) {
    return GAMEMODES.reduce(
        (sum, gm) => sum + (TIER_POINTS[tiers[gm.key]] || 0),
        0
    );
}


function rankTitle(points) {
    if (points >= 180) return 'Solar Sovereign';
    if (points >= 140) return 'Solar Master';
    if (points >= 100) return 'Solar Ace';
    if (points >= 60) return 'Solar Specialist';
    if (points >= 20) return 'Solar Apprentice';
    return 'Solar Rookie';
}


function skinUrl(p) {
    const username =
        (p.skinUsername && p.skinUsername.trim()) || p.name;

    if (!username) return null;

    return `https://mc-heads.net/avatar/${encodeURIComponent(username)}/100`;
}


function withComputed(list) {
    return list
        .map(p => {
            const points = computePoints(p.tiers);

            return {
                ...p,
                points,
                title: rankTitle(points)
            };
        })
        .sort((a, b) => b.points - a.points);
}


function makeId() {
    return (
        'p_' +
        Date.now().toString(36) +
        '_' +
        Math.random().toString(36).slice(2, 8)
    );
}


/* =========================================================
   STORAGE
   ========================================================= */

async function loadPlayers() {
    let raw = null;

    /*
     * First try window.storage.
     * This works in environments that provide the storage API.
     */
    try {
        if (
            window.storage &&
            typeof window.storage.get === 'function'
        ) {
            const result = await window.storage.get(
                STORAGE_KEY,
                true
            );

            raw = result ? result.value : null;
        }
    } catch (e) {
        console.warn(
            'window.storage unavailable, using localStorage'
        );
    }


    /*
     * Normal browser fallback.
     */
    if (!raw) {
        try {
            raw = localStorage.getItem(STORAGE_KEY);
        } catch (e) {
            console.warn('localStorage unavailable');
        }
    }


    /*
     * Existing players found.
     */
    if (raw) {
        try {
            const stored = JSON.parse(raw);

            /*
             * Make sure stored data is actually an array.
             */
            if (!Array.isArray(stored)) {
                throw new Error('Stored players data is not an array');
            }

            /*
             * Start with existing players.
             */
            const merged = [...stored];


            /*
             * Add new DEFAULT_PLAYERS that aren't already stored.
             *
             * This is what fixes the zukiGog problem.
             */
            DEFAULT_PLAYERS.forEach(defaultPlayer => {
                const exists = merged.some(
                    p =>
                        p &&
                        typeof p.name === 'string' &&
                        p.name.toLowerCase() ===
                            defaultPlayer.name.toLowerCase()
                );

                if (!exists) {
                    merged.push({
                        ...defaultPlayer,
                        id: makeId()
                    });
                }
            });


            await persistPlayers(merged);

            return merged;
        } catch (e) {
            console.error(
                'Corrupt storage, reseeding players',
                e
            );
        }
    }


    /*
     * No saved data -> seed defaults.
     */
    const seeded = DEFAULT_PLAYERS.map(p => ({
        ...p,
        id: makeId()
    }));

    await persistPlayers(seeded);

    return seeded;
}


async function persistPlayers(list) {
    const json = JSON.stringify(list);


    /*
     * Try window.storage first.
     */
    try {
        if (
            window.storage &&
            typeof window.storage.set === 'function'
        ) {
            const result = await window.storage.set(
                STORAGE_KEY,
                json,
                true
            );

            if (result) {
                return true;
            }
        }
    } catch (e) {
        console.warn(
            'window.storage unavailable, using localStorage'
        );
    }


    /*
     * Browser localStorage fallback.
     */
    try {
        localStorage.setItem(STORAGE_KEY, json);
        return true;
    } catch (e) {
        console.error(
            'Failed to save players:',
            e
        );

        alert(
            "Couldn't save — please try again."
        );

        return false;
    }
}


/* =========================================================
   GAMEMODE NAVIGATION
   ========================================================= */

function selectGamemode(key) {
    activeGamemode = key || null;

    renderGamemodeNav();
    syncHeaderNav();
    updateHeroCopy();
    renderTableHead();
    renderTable();
    renderPodium();
}


function syncHeaderNav() {
    document
        .querySelectorAll('#headerNav a[data-gm]')
        .forEach(a => {
            const key = a.dataset.gm || null;

            a.classList.toggle(
                'active',
                key === activeGamemode
            );
        });
}


function renderGamemodeNav() {
    const bar =
        document.getElementById('gamemodeNav');

    if (!bar) return;


    const allBtn = `
        <button
            class="gm-tab ${
                activeGamemode === null
                    ? 'active'
                    : ''
            }"
            data-gm=""
        >
            <span class="dot"></span>
            Overall
        </button>
    `;


    const btns = GAMEMODES
        .map(
            gm => `
                <button
                    class="gm-tab ${
                        activeGamemode === gm.key
                            ? 'active'
                            : ''
                    }"
                    data-gm="${gm.key}"
                >
                    <span class="dot"></span>
                    ${gm.label}
                </button>
            `
        )
        .join('');


    bar.innerHTML = allBtn + btns;
}


function wireHeaderNav() {
    const headerNav =
        document.getElementById('headerNav');

    const gamemodeNav =
        document.getElementById('gamemodeNav');


    if (headerNav) {
        headerNav.addEventListener(
            'click',
            e => {
                const link =
                    e.target.closest(
                        'a[data-gm]'
                    );

                if (!link) return;

                e.preventDefault();

                selectGamemode(
                    link.dataset.gm
                );
            }
        );
    }


    if (gamemodeNav) {
        gamemodeNav.addEventListener(
            'click',
            e => {
                const btn =
                    e.target.closest(
                        '.gm-tab'
                    );

                if (!btn) return;

                selectGamemode(
                    btn.dataset.gm
                );
            }
        );
    }
}


/* =========================================================
   HERO
   ========================================================= */

function updateHeroCopy() {
    const eyebrow =
        document.getElementById('heroEyebrow');

    const title =
        document.getElementById('heroTitle');

    const sub =
        document.getElementById('heroSub');


    if (!eyebrow || !title || !sub) {
        return;
    }


    if (!activeGamemode) {
        eyebrow.textContent =
            'Overall · PvP Rankings';

        title.textContent =
            'Where the best burn brightest.';

        sub.textContent =
            'Live tier rankings across Vanilla, Sword, Axe, UHC, Pot, NethPot, SMP and Mace. Brighter badge, better tier.';
    } else {
        const gm =
            GAMEMODES.find(
                g => g.key === activeGamemode
            );

        if (!gm) return;

        eyebrow.textContent =
            gm.label + ' · PvP Rankings';

        title.textContent =
            gm.label + ' leaderboard.';

        sub.textContent =
            `Players ranked by their current ${gm.label} tier, from HT1 down to LT5.`;
    }
}


/* =========================================================
   PODIUM
   ========================================================= */

function renderPodium() {
    const podium =
        document.getElementById('podium');

    if (!podium) return;


    let ranked;


    if (activeGamemode) {
        ranked = PLAYERS
            .filter(
                p =>
                    p.tiers &&
                    p.tiers[activeGamemode]
            )
            .sort(
                (a, b) =>
                    TIER_ORDER.indexOf(
                        a.tiers[activeGamemode]
                    ) -
                    TIER_ORDER.indexOf(
                        b.tiers[activeGamemode]
                    )
            );
    } else {
        ranked = PLAYERS;
    }


    const top3 = ranked.slice(0, 3);


    if (top3.length === 0) {
        podium.innerHTML =
            'No ranked players yet — add the first one.';

        return;
    }


    const order = [
        top3[1],
        top3[0],
        top3[2]
    ];

    const classes = [
        'p2',
        'p1',
        'p3'
    ];


    podium.innerHTML = '';


    order.forEach((p, i) => {
        if (!p) return;


        const url = skinUrl(p);


        const badgeText =
            activeGamemode
                ? p.tiers[activeGamemode]
                : p.points + ' pts';


        const rankLabel =
            p.title;


        const div =
            document.createElement('div');


        div.className =
            'planet ' + classes[i];


        div.innerHTML = `
            <div class="orb ${classes[i]}">
                ${
                    url
                        ? `<img
                            src="${url}"
                            alt="${p.name}"
                            onerror="
                                this.parentElement.textContent='${escapeHtml(
                                    p.name.charAt(0)
                                )}';
                            "
                          >`
                        : escapeHtml(
                              p.name.charAt(0)
                          )
                }
            </div>

            <div class="pname">
                ${escapeHtml(p.name)}
            </div>

            <div class="ppts">
                ${escapeHtml(badgeText)}
            </div>

            <div class="prank">
                ${escapeHtml(rankLabel)}
            </div>
        `;


        div.onclick = () =>
            openDetailModal(p);


        podium.appendChild(div);
    });
}


/* =========================================================
   TABLE HEAD
   ========================================================= */

function renderTableHead() {
    const head =
        document.getElementById('tableHead');

    if (!head) return;


    if (!activeGamemode) {
        head.innerHTML = `
            <tr>
                <th class="center">#</th>
                <th>Player</th>
                <th class="center">Pts</th>

                ${GAMEMODES.map(
                    gm => `
                        <th class="center">
                            ${MODE_ICONS[gm.key]}
                            ${gm.label}
                        </th>
                    `
                ).join('')}
            </tr>
        `;
    } else {
        const gm =
            GAMEMODES.find(
                g => g.key === activeGamemode
            );

        if (!gm) return;


        head.innerHTML = `
            <tr>
                <th class="center">#</th>
                <th>Player</th>

                <th class="center gm-active">
                    <span class="gm-head">
                        ${MODE_ICONS[gm.key]}
                        ${gm.label} Tier
                    </span>
                </th>
            </tr>
        `;
    }
}


/* =========================================================
   TIER PILL
   ========================================================= */

function tierPill(t) {
    if (!t) return '—';

    const n = tierNum(t);

    return `
        <span
            class="tier-pill"
            style="background:${TIER_COLOR[n]}"
        >
            ${escapeHtml(t)}
        </span>
    `;
}


/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}


/* =========================================================
   PLAYER ROW
   ========================================================= */

function rowPlayerHtml(p) {
    const url = skinUrl(p);


    const safeName =
        escapeHtml(p.name);

    const safeRegion =
        escapeHtml(p.region);


    const avatar = url
        ? `
            <img
                src="${url}"
                alt="${safeName}"
                onerror="
                    this.style.display='none';
                    this.parentElement.textContent='${escapeHtml(
                        p.name.charAt(0)
                    )}';
                "
            >
          `
        : escapeHtml(
              p.name.charAt(0)
          );


    return `
        <span class="row-player">
            <span class="row-avatar">
                ${avatar}
            </span>

            <span>
                ${safeName}

                <span class="region-tag">
                    ${safeRegion}
                </span>
            </span>
        </span>
    `;
}


/* =========================================================
   TABLE BODY
   ========================================================= */

function renderTable() {
    const searchEl =
        document.getElementById('search');

    const regionEl =
        document.getElementById(
            'regionFilter'
        );

    const sortEl =
        document.getElementById('sortBy');

    const tbody =
        document.getElementById('tableBody');


    if (!tbody) return;


    const search =
        searchEl
            ? searchEl.value.toLowerCase()
            : '';


    const region =
        regionEl
            ? regionEl.value
            : 'ALL';


    const sortBy =
        sortEl
            ? sortEl.value
            : 'points-desc';


    let list = PLAYERS.filter(p => {
        const name =
            String(p.name || '')
                .toLowerCase();

        const playerRegion =
            p.region || '';


        return (
            name.includes(search) &&
            (
                region === 'ALL' ||
                playerRegion === region
            )
        );
    });


    /* -----------------------------------------
       GAMEMODE VIEW
       ----------------------------------------- */

    if (activeGamemode) {
        list = list.filter(
            p =>
                p.tiers &&
                p.tiers[activeGamemode]
        );


        list.sort(
            (a, b) =>
                TIER_ORDER.indexOf(
                    a.tiers[activeGamemode]
                ) -
                TIER_ORDER.indexOf(
                    b.tiers[activeGamemode]
                )
        );


        updateResultCount(list.length);


        if (list.length === 0) {
            tbody.innerHTML = `
                <tr class="empty-row">
                    <td colspan="3">
                        No players ranked in this
                        gamemode yet.
                    </td>
                </tr>
            `;

            return;
        }


        tbody.innerHTML = list
            .map(
                (p, i) => `
                    <tr data-id="${p.id}">
                        <td class="rank center">
                            ${i + 1}
                        </td>

                        <td class="player">
                            ${rowPlayerHtml(p)}
                        </td>

                        <td class="center gm-active">
                            ${tierPill(
                                p.tiers[
                                    activeGamemode
                                ]
                            )}
                        </td>
                    </tr>
                `
            )
            .join('');
    }


    /* -----------------------------------------
       OVERALL VIEW
       ----------------------------------------- */

    else {
        if (sortBy === 'points-desc') {
            list.sort(
                (a, b) =>
                    b.points - a.points
            );
        }

        if (sortBy === 'points-asc') {
            list.sort(
                (a, b) =>
                    a.points - b.points
            );
        }

        if (sortBy === 'name-asc') {
            list.sort(
                (a, b) =>
                    a.name.localeCompare(
                        b.name
                    )
            );
        }


        updateResultCount(list.length);


        if (list.length === 0) {
            tbody.innerHTML = `
                <tr class="empty-row">
                    <td colspan="${
                        3 + GAMEMODES.length
                    }">
                        No players match your filters.
                    </td>
                </tr>
            `;

            return;
        }


        tbody.innerHTML = list
            .map(p => {
                const overallRank =
                    PLAYERS.findIndex(
                        pl =>
                            pl.id === p.id
                    ) + 1;


                return `
                    <tr data-id="${p.id}">
                        <td class="rank center">
                            ${overallRank}
                        </td>

                        <td class="player">
                            ${rowPlayerHtml(p)}
                        </td>

                        <td class="pts center">
                            ${p.points}
                        </td>

                        ${GAMEMODES.map(
                            gm => `
                                <td class="center">
                                    ${tierPill(
                                        p.tiers[
                                            gm.key
                                        ]
                                    )}
                                </td>
                            `
                        ).join('')}
                    </tr>
                `;
            })
            .join('');
    }


    /* -----------------------------------------
       ROW CLICK
       ----------------------------------------- */

    tbody
        .querySelectorAll(
            'tr[data-id]'
        )
        .forEach(row => {
            row.onclick = () => {
                const p =
                    PLAYERS.find(
                        pl =>
                            pl.id ===
                            row.dataset.id
                    );

                if (p) {
                    openDetailModal(p);
                }
            };
        });
}


function updateResultCount(count) {
    const el =
        document.getElementById(
            'resultCount'
        );

    if (!el) return;


    el.textContent =
        `${count} player${
            count !== 1 ? 's' : ''
        }`;
}


/* =========================================================
   DETAIL MODAL
   ========================================================= */

function openDetailModal(p) {
    const overallRank =
        PLAYERS.findIndex(
            pl => pl.id === p.id
        ) + 1;


    const modalOrb =
        document.getElementById(
            'modalOrb'
        );


    const url = skinUrl(p);


    if (modalOrb) {
        if (url) {
            modalOrb.innerHTML = `
                <img
                    src="${url}"
                    alt="${escapeHtml(p.name)}"
                    onerror="
                        this.style.display='none';
                        this.parentElement.textContent='${escapeHtml(
                            p.name.charAt(0)
                        )}';
                    "
                >
            `;
        } else {
            modalOrb.innerHTML = '';
            modalOrb.textContent =
                p.name.charAt(0);
        }
    }


    const modalName =
        document.getElementById(
            'modalName'
        );

    const modalSub =
        document.getElementById(
            'modalSub'
        );

    const modalPoints =
        document.getElementById(
            'modalPoints'
        );

    const modalRankNum =
        document.getElementById(
            'modalRankNum'
        );

    const modalRegion =
        document.getElementById(
            'modalRegion'
        );

    const modalBreakdown =
        document.getElementById(
            'modalBreakdown'
        );


    if (modalName) {
        modalName.textContent =
            p.name;
    }

    if (modalSub) {
        modalSub.textContent =
            p.title;
    }

    if (modalPoints) {
        modalPoints.textContent =
            p.points;
    }

    if (modalRankNum) {
        modalRankNum.textContent =
            '#' + overallRank;
    }

    if (modalRegion) {
        modalRegion.textContent =
            p.region;
    }


    if (modalBreakdown) {
        modalBreakdown.innerHTML =
            GAMEMODES.map(
                gm => `
                    <div class="breakdown-row">
                        <span class="gm">
                            ${gm.label}
                        </span>

                        ${tierPill(
                            p.tiers[
                                gm.key
                            ]
                        )}
                    </div>
                `
            ).join('');
    }


    const overlay =
        document.getElementById(
            'overlay'
        );


    if (overlay) {
        overlay.dataset.id =
            p.id;

        overlay.classList.add(
            'show'
        );
    }
}


/* =========================================================
   DETAIL MODAL BUTTONS
   ========================================================= */

const closeModal =
    document.getElementById(
        'closeModal'
    );

if (closeModal) {
    closeModal.onclick = () => {
        const overlay =
            document.getElementById(
                'overlay'
            );

        if (overlay) {
            overlay.classList.remove(
                'show'
            );
        }
    };
}


const overlay =
    document.getElementById(
        'overlay'
    );

if (overlay) {
    overlay.onclick = e => {
        if (
            e.target.id ===
            'overlay'
        ) {
            overlay.classList.remove(
                'show'
            );
        }
    };
}


/* =========================================================
   DELETE PLAYER
   ========================================================= */

const modalDeleteBtn =
    document.getElementById(
        'modalDeleteBtn'
    );

if (modalDeleteBtn) {
    modalDeleteBtn.onclick =
        async () => {
            const overlay =
                document.getElementById(
                    'overlay'
                );

            if (!overlay) return;


            const id =
                overlay.dataset.id;


            const p =
                PLAYERS.find(
                    pl =>
                        pl.id === id
                );


            if (!p) return;


            if (
                !confirm(
                    `Remove ${p.name} from the rankings? This can't be undone.`
                )
            ) {
                return;
            }


            const updated =
                PLAYERS
                    .filter(
                        pl =>
                            pl.id !== id
                    )
                    .map(
                        ({
                            points,
                            title,
                            ...rest
                        }) => rest
                    );


            await persistPlayers(
                updated
            );


            PLAYERS =
                withComputed(
                    updated
                );


            overlay.classList.remove(
                'show'
            );


            renderAll();
        };
}


/* =========================================================
   EDIT PLAYER
   ========================================================= */

const modalEditBtn =
    document.getElementById(
        'modalEditBtn'
    );

if (modalEditBtn) {
    modalEditBtn.onclick = () => {
        const overlay =
            document.getElementById(
                'overlay'
            );

        if (!overlay) return;


        const id =
            overlay.dataset.id;


        const p =
            PLAYERS.find(
                pl =>
                    pl.id === id
            );


        if (!p) return;


        overlay.classList.remove(
            'show'
        );


        openFormModal(p);
    };
}


/* =========================================================
   FORM
   ========================================================= */

function buildTierGrid() {
    const grid =
        document.getElementById(
            'tierGrid'
        );

    if (!grid) return;


    grid.innerHTML =
        GAMEMODES.map(
            gm => `
                <div class="form-group">
                    <label
                        for="tier-${gm.key}"
                    >
                        ${gm.label}
                    </label>

                    <select
                        id="tier-${gm.key}"
                        data-gm="${gm.key}"
                    >
                        <option value="">
                            Unranked
                        </option>

                        ${TIER_ORDER.map(
                            t => `
                                <option value="${t}">
                                    ${t}
                                </option>
                            `
                        ).join('')}
                    </select>
                </div>
            `
        ).join('');
}


function openFormModal(player) {
    editingId =
        player
            ? player.id
            : null;


    const formTitle =
        document.getElementById(
            'formTitle'
        );

    const formError =
        document.getElementById(
            'formError'
        );

    const fName =
        document.getElementById(
            'fName'
        );

    const fRegion =
        document.getElementById(
            'fRegion'
        );

    const fSkin =
        document.getElementById(
            'fSkin'
        );


    if (formTitle) {
        formTitle.textContent =
            player
                ? `Edit ${player.name}`
                : 'Add a player';
    }


    if (formError) {
        formError.classList.remove(
            'show'
        );
    }


    if (fName) {
        fName.value =
            player
                ? player.name
                : '';
    }


    if (fRegion) {
        fRegion.value =
            player
                ? player.region
                : 'NA';
    }


    if (fSkin) {
        fSkin.value =
            player
                ? player.skinUsername || ''
                : '';
    }


    GAMEMODES.forEach(gm => {
        const sel =
            document.getElementById(
                'tier-' + gm.key
            );

        if (!sel) return;


        sel.value =
            player
                ? player.tiers[
                      gm.key
                  ] || ''
                : '';
    });


    const formOverlay =
        document.getElementById(
            'formOverlay'
        );


    if (formOverlay) {
        formOverlay.classList.add(
            'show'
        );
    }
}


function closeFormModal() {
    const formOverlay =
        document.getElementById(
            'formOverlay'
        );


    if (formOverlay) {
        formOverlay.classList.remove(
            'show'
        );
    }


    editingId = null;
}


/* =========================================================
   FORM BUTTONS
   ========================================================= */

const closeFormModalBtn =
    document.getElementById(
        'closeFormModal'
    );

if (closeFormModalBtn) {
    closeFormModalBtn.onclick =
        closeFormModal;
}


const cancelFormBtn =
    document.getElementById(
        'cancelFormBtn'
    );

if (cancelFormBtn) {
    cancelFormBtn.onclick =
        closeFormModal;
}


const formOverlay =
    document.getElementById(
        'formOverlay'
    );

if (formOverlay) {
    formOverlay.onclick = e => {
        if (
            e.target.id ===
            'formOverlay'
        ) {
            closeFormModal();
        }
    };
}


/* =========================================================
   SAVE PLAYER
   ========================================================= */

const saveFormBtn =
    document.getElementById(
        'saveFormBtn'
    );

if (saveFormBtn) {
    saveFormBtn.onclick =
        async () => {
            const fName =
                document.getElementById(
                    'fName'
                );

            const fRegion =
                document.getElementById(
                    'fRegion'
                );

            const fSkin =
                document.getElementById(
                    'fSkin'
                );

            const errorEl =
                document.getElementById(
                    'formError'
                );


            const name =
                fName
                    ? fName.value.trim()
                    : '';


            if (!name) {
                if (errorEl) {
                    errorEl.textContent =
                        'Give the player a name.';

                    errorEl.classList.add(
                        'show'
                    );
                }

                return;
            }


            const region =
                fRegion
                    ? fRegion.value
                    : 'NA';


            const skinUsername =
                fSkin
                    ? fSkin.value.trim()
                    : '';


            const tiers = {};


            GAMEMODES.forEach(gm => {
                const sel =
                    document.getElementById(
                        'tier-' + gm.key
                    );


                const val =
                    sel
                        ? sel.value
                        : '';


                tiers[gm.key] =
                    val || null;
            });


            /*
             * Remove computed properties
             * before saving.
             */
            const base =
                PLAYERS.map(
                    ({
                        points,
                        title,
                        ...rest
                    }) => rest
                );


            if (editingId) {
                const idx =
                    base.findIndex(
                        p =>
                            p.id ===
                            editingId
                    );


                if (idx !== -1) {
                    base[idx] = {
                        ...base[idx],
                        name,
                        region,
                        skinUsername,
                        tiers
                    };
                }
            } else {
                base.push({
                    id: makeId(),
                    name,
                    region,
                    skinUsername,
                    tiers
                });
            }


            saveFormBtn.textContent =
                'Saving...';


            await persistPlayers(
                base
            );


            saveFormBtn.textContent =
                'Save player';


            PLAYERS =
                withComputed(
                    base
                );


            closeFormModal();


            renderAll();
        };
}


/* =========================================================
   FILTERS
   ========================================================= */

const searchInput =
    document.getElementById(
        'search'
    );

if (searchInput) {
    searchInput.addEventListener(
        'input',
        renderTable
    );
}


const regionFilter =
    document.getElementById(
        'regionFilter'
    );

if (regionFilter) {
    regionFilter.addEventListener(
        'change',
        renderTable
    );
}


const sortBy =
    document.getElementById(
        'sortBy'
    );

if (sortBy) {
    sortBy.addEventListener(
        'change',
        renderTable
    );
}


/* =========================================================
   RENDER ALL
   ========================================================= */

function renderAll() {
    renderPodium();
    renderTableHead();
    renderTable();
}


/* =========================================================
   INIT
   ========================================================= */

async function init() {
    buildTierGrid();

    renderGamemodeNav();

    wireHeaderNav();

    updateHeroCopy();


    const tableBody =
        document.getElementById(
            'tableBody'
        );


    if (tableBody) {
        tableBody.innerHTML = `
            <tr>
                <td
                    colspan="${
                        3 + GAMEMODES.length
                    }"
                    class="loading-row"
                >
                    Loading players…
                </td>
            </tr>
        `;
    }


    try {
        const raw =
            await loadPlayers();


        PLAYERS =
            withComputed(raw);


        renderAll();


        console.log(
            'Players loaded:',
            PLAYERS.length
        );


        console.log(
            'zukiGog:',
            PLAYERS.find(
                p =>
                    p.name.toLowerCase() ===
                    'zukigog'
            )
        );
    } catch (e) {
        console.error(
            'Failed to initialize players:',
            e
        );


        if (tableBody) {
            tableBody.innerHTML = `
                <tr>
                    <td
                        colspan="${
                            3 + GAMEMODES.length
                        }"
                        class="empty-row"
                    >
                        Failed to load players.
                    </td>
                </tr>
            `;
        }
    }
}


init();