/* =========================================================
   Persona 3 Reload — Fan guide · script.js
   ========================================================= */

/* ---------- DATOS: miembros del SEES ----------
   Imágenes: guarda assets/personajes/<id>.webp (ej. yukari.webp) y se carga sola.
   Para otro nombre o formato, pon la ruta en "img". */
const CHARACTERS = [
  { id: "yukari", name: "Yukari Takeba", arcana: "Amantes", num: "VI", persona: "Io", weapon: "Arco",
    element: "Viento · Curación", color: "#ff7eb6", img: "",
    desc: "Es una compañera de clase popular y franca, y también la arquera del grupo. Se une al SEES para descubrir la verdad sobre la muerte de su padre, que era investigador del Grupo Kirijo." },
  { id: "junpei", name: "Junpei Iori", arcana: "Mago", num: "I", persona: "Hermes", weapon: "Espada a dos manos",
    element: "Fuego", color: "#3fa9f5", img: "",
    desc: "Es el payaso de la clase y el mejor amigo del protagonista. Es impulsivo y de buen corazón, y quiere sentirse importante. Detrás de su actitud relajada esconde inseguridades que irá superando." },
  { id: "akihiko", name: "Akihiko Sanada", arcana: "Emperador", num: "IV", persona: "Polydeuces", weapon: "Puños (guantes)",
    element: "Electricidad", color: "#c9d6e8", img: "",
    desc: "Es el capitán del club de boxeo y está obsesionado con hacerse más fuerte. Es uno de los fundadores del SEES y siempre busca rivales dignos." },
  { id: "mitsuru", name: "Mitsuru Kirijo", arcana: "Emperatriz", num: "III", persona: "Penthesilea", weapon: "Estoque",
    element: "Hielo", color: "#e2423a", img: "",
    desc: "Es la presidenta del consejo estudiantil y la heredera del Grupo Kirijo. Es elegante, disciplinada y siente un gran peso por los errores de su familia. Lidera el SEES junto a Akihiko." },
  { id: "fuuka", name: "Fuuka Yamagishi", arcana: "Sacerdotisa", num: "II", persona: "Lucia", weapon: "— (Navegadora)",
    element: "Apoyo · Análisis", color: "#7ad97a", img: "",
    desc: "Es una chica tímida y amable con un gran talento para la tecnología. Reemplaza a Mitsuru como navegadora: analiza a los enemigos y guía al grupo por el Tártaro." },
  { id: "aigis", name: "Aigis", arcana: "Carro", num: "VII", persona: "Palladion", weapon: "Armas de fuego",
    element: "Perforación", color: "#f5d46b", img: "",
    desc: "Es una androide creada por el Grupo Kirijo para combatir a las Sombras. Su prioridad absoluta es estar cerca del protagonista. Durante la historia aprende lo que significa ser humana." },
  { id: "ken", name: "Ken Amada", arcana: "Justicia", num: "VIII", persona: "Nemesis", weapon: "Lanza",
    element: "Luz · Electricidad", color: "#ffb347", img: "",
    desc: "Es un niño de primaria maduro para su edad. Perdió a su madre durante la Hora Oscura y se une al SEES con un objetivo personal muy serio." },
  { id: "koromaru", name: "Koromaru", arcana: "Fuerza", num: "XI", persona: "Cerberus", weapon: "Cuchillo (en la boca)",
    element: "Fuego · Oscuridad", color: "#f2f2f2", img: "",
    desc: "Es un shiba inu leal que protegía el santuario Naganaki. Puede invocar a su Persona sin Evoker y entiende perfectamente al grupo. Aigis traduce lo que dice." },
  { id: "shinjiro", name: "Shinjiro Aragaki", arcana: "Ermitaño", num: "IX", persona: "Castor", weapon: "Hacha / arma contundente",
    element: "Físico (Golpe)", color: "#8b6f5a", img: "",
    desc: "Es un antiguo miembro del SEES. Es callado y rudo, pero en el fondo se preocupa por los demás. Su relación con Akihiko y con Ken es clave en la historia." },
];

/* ---------- DATOS: Social Links ---------- */
const SOCIAL_LINKS = [
  { num: "0", start: "4/18",     arcana: "Loco",        who: "SEES",                         note: "Avanza con la historia." },
  { num: "I", start: "4/22",     arcana: "Mago",        who: "Kenji Tomochika",              note: "Un compañero de clase entusiasta." },
  { num: "II", start: "6/29",    arcana: "Sacerdotisa", who: "Fuuka Yamagishi",              note: "Compañera de clase y navegadora del SEES." },
  { num: "III", start: "11/21",   arcana: "Emperatriz",  who: "Mitsuru Kirijo",               note: "Presidenta del consejo estudiantil.", req: "Academics al máximo y el 1.º puesto en los exámenes." },
  { num: "IV", start: "4/27",    arcana: "Emperador",   who: "Hidetoshi Odagiri",            note: "Miembro estricto del consejo estudiantil." },
  { num: "V", start: "4/25",     arcana: "Hierofante",  who: "Bunkichi y Mitsuko",           note: "Un matrimonio de ancianos, dueños de la librería Bookworms." },
  { num: "VI", start: "7/25",    arcana: "Amantes",     who: "Yukari Takeba",                note: "Compañera de clase y del SEES.", req: "Charm al máximo." },
  { num: "VII", start: "4/23",   arcana: "Carro",       who: "Kazushi Miyamoto",             note: "Un compañero del club deportivo." },
  { num: "VIII", start: "5/7",  arcana: "Justicia",    who: "Chihiro Fushimi",              note: "La tímida tesorera del consejo estudiantil." },
  { num: "IX", start: "4/29",    arcana: "Ermitaño",    who: "Maya",                         note: "Una amiga de un juego online. Se accede desde el PC de tu cuarto." },
  { num: "X", start: "6/17",     arcana: "Fortuna",     who: "Keisuke Hiraga",               note: "Un compañero del club cultural." },
  { num: "XI", start: "4/24",    arcana: "Fuerza",      who: "Yuko Nishiwaki",               note: "La mánager del club deportivo." },
  { num: "XII", start: "5/11",   arcana: "Colgado",     who: "Maiko Oohashi",                note: "Una niña que juega en el santuario Naganaki." },
  { num: "XIII", start: "6/12",  arcana: "Muerte",      who: "Pharos",                       note: "Un niño misterioso que te visita de noche." },
  { num: "XIV", start: "5/26",   arcana: "Templanza",   who: "André Laurent Jean Géraux (Bebe)", note: "Un estudiante de intercambio francés." },
  { num: "XV", start: "7/11",    arcana: "Diablo",      who: "President Tanaka",             note: "Un empresario de la televisión con dudosa ética." },
  { num: "XVI", start: "7/25",   arcana: "Torre",       who: "Mutatsu",                      note: "Un monje que bebe en el club Escapade." },
  { num: "XVII", start: "9/9",  arcana: "Estrella",    who: "Mamoru Hayase",                note: "Un atleta estrella de otra escuela." },
  { num: "XVIII", start: "5/30", arcana: "Luna",        who: "Nozomi Suemitsu",              note: "Un estudiante glotón y excéntrico." },
  { num: "XIX", start: "9/6",   arcana: "Sol",         who: "Akinari Kamiki",               note: "Un joven enfermo que escribe una historia." },
  { num: "XX", start: "1/10",    arcana: "Juicio",      who: "SEES",                         note: "El vínculo final del grupo." },
  { num: "XXI", start: "1/9",   arcana: "Eón",         who: "Aigis",                        note: "Exclusivo de Reload, en la recta final del juego." },
];

/* ---------- DATOS: mes a mes (ruta 100% de la guía de TenSquare3, GameFAQs) ----------
   floor = piso del Tártaro al que llega la ruta de la guía a fin de mes (aprox.). */
const MONTHS = [
  { id: "abr", name: "Abril", en: "APRIL", floor: 22,
    intro: "Llegas a Iwatodai, despiertas tu Persona y te unes al SEES. Es el mes para montar tu rutina.",
    todo: [
      "Únete a un club deportivo para abrir el Social Link del Carro (y después el de la Fuerza).",
      "Entra al consejo estudiantil para abrir el Emperador.",
      "Empieza a subir Courage y Charm con comida, cine y arcade: hay actividades que dan el doble de puntos.",
      "Visita Bookworms en el centro comercial para abrir el Hierofante.",
      "Ve a Tártaro en cuanto puedas y entrega las primeras peticiones de Elizabeth.",
    ],
    dates: [
      ["4/9", "Despertar y primer combate", "story"],
      ["4/22", "Mago · Kenji", "link"], ["4/23", "Carro · Kazushi", "link"], ["4/24", "Fuerza · Yuko", "link"],
      ["4/25", "Hierofante", "link"], ["4/27", "Emperador · Odagiri", "link"], ["4/29", "Ermitaño · Maya", "link"],
    ] },
  { id: "may", name: "Mayo", en: "MAY", floor: 44,
    intro: "Primera operación de luna llena y primeros exámenes. Equilibra estudio, vínculos y Tártaro.",
    todo: [
      "Prepara al grupo para la primera Sombra de Arcano Mayor del 9 de mayo.",
      "Abre la Justicia, el Colgado, la Templanza y la Luna.",
      "Estudia antes de los exámenes de mediados de mes: sacar el primer puesto da Charm.",
      "Sigue entregando peticiones a Elizabeth; algunas abren nuevas misiones.",
    ],
    dates: [
      ["5/7", "Justicia · Chihiro", "link"], ["5/9", "Luna llena: primer Arcano Mayor", "moon"],
      ["5/11", "Colgado · Maiko", "link"], ["5/25", "Resultados del examen", "exam"],
      ["5/26", "Templanza · Bebe", "link"], ["5/30", "Luna · Nozomi", "link"],
    ] },
  { id: "jun", name: "Junio", en: "JUNE", floor: 44,
    intro: "Nueva luna llena y llega la nueva navegadora. Pharos empieza a visitarte por la noche.",
    todo: [
      "Lleva una Persona débil al elemento correcto para la luna llena del 8 de junio.",
      "Aprende a usar la Theurgy: la guía la presenta este mes.",
      "Abre la Muerte (Pharos), la Fortuna y la Sacerdotisa (Fuuka).",
      "Rescata a las personas perdidas en Tártaro antes de la siguiente luna llena.",
    ],
    dates: [
      ["6/8", "Luna llena", "moon"], ["6/12", "Muerte · Pharos", "link"],
      ["6/17", "Fortuna · Keisuke", "link"], ["6/29", "Sacerdotisa · Fuuka", "link"],
    ] },
  { id: "jul", name: "Julio", en: "JULY", floor: 69,
    intro: "Mes cargado: luna llena, exámenes finales y el comienzo del verano con el viaje a Yakushima.",
    todo: [
      "Farmea Black Quartz con las Sombras Formidables del bloque actual del Tártaro.",
      "Supera la luna llena del 7 de julio.",
      "Estudia para los exámenes finales (resultados el 24).",
      "Abre el Diablo, los Amantes (Yukari) y la Torre.",
      "Disfruta el viaje a Yakushima al empezar las vacaciones.",
    ],
    dates: [
      ["7/7", "Luna llena", "moon"], ["7/11", "Diablo · Tanaka", "link"],
      ["7/20", "Viaje a Yakushima", "story"], ["7/24", "Resultados del examen", "exam"],
      ["7/25", "Amantes · Yukari / Torre · Mutatsu", "link"],
    ] },
  { id: "ago", name: "Agosto", en: "AUGUST", floor: 92,
    intro: "Vacaciones de verano: más tiempo libre, el festival de cine y nuevos miembros en el grupo.",
    todo: [
      "Supera la luna llena del 6 de agosto, que esta vez es bajo tierra.",
      "Aprovecha los días libres para subir los vínculos de la ciudad y las estadísticas sociales.",
      "Acepta las invitaciones del festival de cine de verano y de los días libres.",
      "Pasea a Koromaru y haz los Linked Episodes de los chicos del SEES.",
    ],
    dates: [
      ["8/6", "Luna llena (subterráneo)", "moon"],
    ] },
  { id: "sep", name: "Septiembre", en: "SEPTEMBER", floor: 118,
    intro: "Vuelven las clases. Aparecen los dos últimos vínculos de la ciudad.",
    todo: [
      "Supera la luna llena del 5 de septiembre.",
      "Abre el Sol (Akinari) y la Estrella (Mamoru).",
      "Recupera el ritmo de los vínculos de la escuela antes de que avance el curso.",
    ],
    dates: [
      ["9/5", "Luna llena", "moon"], ["9/6", "Sol · Akinari", "link"], ["9/9", "Estrella · Mamoru", "link"],
    ] },
  { id: "oct", name: "Octubre", en: "OCTOBER", floor: 172,
    intro: "Un mes intenso en la historia. El Tártaro avanza mucho y hay exámenes de mitad de curso.",
    todo: [
      "Fuuka te avisa el día antes de la luna llena: prepárate para el 4 de octubre.",
      "Estudia para los exámenes (resultados el 19).",
      "Sube muchos pisos del Tártaro: es el mes con más avance de la ruta.",
    ],
    dates: [
      ["10/4", "Luna llena", "moon"], ["10/19", "Resultados del examen", "exam"],
    ] },
  { id: "nov", name: "Noviembre", en: "NOVEMBER", floor: 172,
    intro: "La última Sombra de Arcano Mayor y el viaje escolar a Kioto.",
    todo: [
      "Supera el último combate de Arcano Mayor el 3 de noviembre.",
      "Disfruta el viaje escolar a Kioto.",
      "Con Academics al máximo, abre la Emperatriz (Mitsuru).",
    ],
    dates: [
      ["11/3", "Último Arcano Mayor", "moon"], ["11/17", "Viaje a Kioto", "story"],
      ["11/21", "Emperatriz · Mitsuru", "link"],
    ] },
  { id: "dic", name: "Diciembre", en: "DECEMBER", floor: 226,
    intro: "Exámenes finales, Navidad y una decisión importante a fin de mes.",
    todo: [
      "Estudia para los últimos exámenes (resultados el 21).",
      "Elige con quién pasar la Nochebuena.",
      "Antes del 31, maximiza todos los vínculos que puedas.",
      "Guarda en una ranura aparte antes del 31 de diciembre.",
    ],
    dates: [
      ["12/21", "Resultados del examen", "exam"], ["12/24", "Nochebuena", "story"],
      ["12/31", "Decisión importante", "story"],
    ] },
  { id: "ene", name: "Enero", en: "JANUARY", floor: 263,
    intro: "El último mes. Cierra todos los vínculos y prepárate para el final.",
    todo: [
      "Abre el Eón (Aigis) y el Juicio, y llévalos al máximo.",
      "Termina las peticiones de Elizabeth que te queden.",
      "Fusiona las Personas definitivas con los vínculos al máximo.",
      "Sube el Tártaro hasta la cima y prepara al grupo para el final del 31.",
    ],
    dates: [
      ["1/9", "Eón · Aigis", "link"], ["1/10", "Juicio · SEES", "link"],
      ["1/31", "El final", "moon"],
    ] },
];
const TARTARUS_TOP = 264;
const KIND_LABEL = { moon: "Luna llena / historia clave", exam: "Examen", link: "Social Link", story: "Evento" };


/* ---------- DATOS: semana a semana ----------
   Resumen calculado a partir de la ruta 100% de la guía de TenSquare3 (GameFAQs).
   Formato por semana (clave = lunes): "vínculos ; puntos de stats ; rango de stat alcanzado ; Linked Episodes" */
const WEEKS = {
  "4/6": "; Cha1 Aca1 ; ;", "4/13": "Fool1 ; Cha1 ; ;",
  "4/20": "Fool2 Magic1 Chari2 Stren1 Hiero1 ; Aca6 Cou7 Cha4 ; ;",
  "4/27": "Emper1 Chari3 Hermi2 Hiero2 Stren2 ; Cha3 Cou2 Aca9 ; Cha2 Cou2 Aca2 ;",
  "5/4": "Hermi4 Stren3 Justi1 Magic2 Fool3 ; Cou8 Cha3 ; Cou3 ;",
  "5/11": "Hange3 Hiero4 Hermi5 ; Aca11 Cou2 Cha2 ; Cha3 Aca3 ; Jun1",
  "5/18": "Justi2 ; Cha2 ; ;",
  "5/25": "Emper3 Tempe1 Magic4 Moon1 ; Cha2 Aca5 Cou5 ; ; Aki1",
  "6/1": "Emper5 Magic6 Justi3 Stren4 ; Cou7 Aca3 Cha2 ; Cha4 Cou4 ;",
  "6/8": "Tempe2 Emper6 Magic7 Chari4 Death1 Hange4 ; Cou3 Aca3 Cha1 ; ;",
  "6/15": "Chari6 Fortu2 Emper7 ; Cha2 Cou6 Aca1 ; Cou5 ;",
  "6/22": "Chari8 Tempe3 Emper9 Justi4 Hermi6 ; Cha4 Cou7 ; Cou6 ;",
  "6/29": "Pries3 Magic8 Emper10 Justi5 ; Cha6 Cou1 Aca3 ; Cha5 ;",
  "7/6": "Pries4 Fool4 Hiero5 Moon3 Devil1 Hermi7 Death3 ; Cha8 Aca7 ; Aca4 ;",
  "7/13": "Hange5 Devil2 Hermi8 ; Aca6 ; ;",
  "7/20": "Fool5 Magic9 Lover1 Tower1 Moon4 ; Cha3 Aca2 ; Cha6 ; Aki2",
  "7/27": "; Aca3 ; ;",
  "8/3": "Hange7 Death5 ; Cha2 Cou1 ; ; Jun2",
  "8/10": "; Aca12 ; ;",
  "8/17": "Devil3 Moon5 ; Cou6 Aca3 Cha4 ; ;",
  "8/24": "Tower2 ; Aca9 Cou4 Cha4 ; Aca5 ;",
  "8/31": "Chari9 Devil4 Lover2 Sun1 ; Cou2 Aca1 Cha3 ; ; Kor1",
  "9/7": "Lover3 Star1 Justi6 Pries5 Death6 ; Cou4 Cha2 Aca1 ; ; Kor2 Ken1 Shi1",
  "9/14": "; Cha2 Cou1 Aca1 ; ; Shi3 Kor3",
  "9/21": "Hermi10 Pries6 Stren5 ; Cou5 Aca1 Cha2 ; ; Shi4",
  "9/28": "Lover5 Justi7 Stren7 Pries7 ; Aca3 Cha1 Cou2 ; ;",
  "10/5": "Hiero8 Death8 Star3 Sun2 ; Aca14 Cha2 ; ; Shi5",
  "10/12": "Moon6 Stren8 Sun3 ; Aca3 ; ;",
  "10/19": "Lover6 Fortu4 Tempe5 Justi8 ; Cha5 Aca6 Cou1 ; Aca6 ; Aki3",
  "10/26": "Chari10 Fortu6 Tempe7 Tower3 Justi9 Sun4 ; Cha2 ; ;",
  "11/2": "Lover7 Fool7 Death10 Tower5 Tempe8 Sun5 ; Cha1 Aca1 ; ; Jun3",
  "11/9": "Justi10 Devil5 Stren10 Tower8 Tempe9 Sun6 ; Cha2 ; ; Ryo2 Ken3",
  "11/16": "Lover8 Empre1 Devil6 Sun7 ; ; ; Ryo3",
  "11/23": "Moon7 Tower9 Empre2 Fool9 Devil7 Sun8 ; ; ;",
  "11/30": "Pries8 Empre4 Tower10 Lover9 Devil8 Sun9 ; Cha1 Cou1 ; ; Ryo4",
  "12/7": "Hange8 Empre8 Star4 Sun10 ; Cha3 Cou1 Aca9 ; ;",
  "12/14": "Moon8 ; Cou1 ; ; Jun4 Aki4",
  "12/21": "Pries9 Empre10 Star6 Tempe10 Devil9 ; Cha3 ; ; Ken4",
  "12/28": "Hange9 Hiero10 Devil10 Star8 Moon9 Fool10 ; Cou2 ; ; Ryo5",
  "1/4": "Hange10 Magic10 Aeon1 Judge1 ; Cha3 ; ; Aki5 Kor5",
  "1/11": "Moon10 Fortu8 Lover10 Aeon2 Star9 ; ; ; Jun5",
  "1/18": "Aeon5 Fortu10 Star10 ; Cha1 ; ; Ken5",
  "1/25": "Pries10 Aeon10 ; ; ;",
};
const ARC_ES = { Fool: "Loco", Magic: "Mago", Pries: "Sacerdotisa", Empre: "Emperatriz", Emper: "Emperador",
  Hiero: "Hierofante", Lover: "Amantes", Chari: "Carro", Justi: "Justicia", Hermi: "Ermitaño", Fortu: "Fortuna",
  Stren: "Fuerza", Hange: "Colgado", Death: "Muerte", Tempe: "Templanza", Devil: "Diablo", Tower: "Torre",
  Star: "Estrella", Moon: "Luna", Sun: "Sol", Judge: "Juicio", Aeon: "Eón" };
const STAT_ES = { Aca: "Academics", Cha: "Charm", Cou: "Courage" };
const STAT_RANKS = {
  Aca: ["Slacker", "Average", "Above Average", "Smart", "Intelligent", "Genius"],
  Cha: ["Plain", "Unpolished", "Confident", "Smooth", "Popular", "Charismatic"],
  Cou: ["Timid", "Ordinary", "Determined", "Tough", "Fearless", "Badass"],
};
const EP_ES = { Jun: "Junpei", Aki: "Akihiko", Shi: "Shinjiro", Kor: "Koromaru", Ken: "Ken", Ryo: "Ryoji" };
const GUIDE_BASE = "https://gamefaqs.gamespot.com/ps5/410283-persona-3-reload/faqs/81159/";
const GUIDE_SLUG = { abr: "april", may: "may", jun: "june", jul: "july", ago: "august", sep: "september", oct: "october", nov: "november", dic: "december", ene: "january" };

/* Imágenes de los Social Links (arte de P3 Reload). Los de la wiki se cargan desde internet. */
const WIKI_IMG = (path) => `https://static.wikia.nocookie.net/megamitensei/images/${path}/revision/latest/scale-to-width-down/400`;
const SL_IMG = {
  "0": "assets/personajes/protagonista.webp",
  "I": WIKI_IMG("d/df/Kenji_Tomochika_%28P3R%29.png") + "?cb=20231023174918",
  "II": "assets/personajes/fuuka.webp",
  "III": "assets/personajes/mitsuru.webp",
  "IV": WIKI_IMG("b/ba/Hidetoshi_Odagiri_%28P3R%29.png"),
  "V": WIKI_IMG("6/61/Bunkichi_and_Mitsuko_Kitamura_%28P3R%29.png"),
  "VI": "assets/personajes/yukari.webp",
  "VII": WIKI_IMG("c/c4/Kazushi_Miyamoto_%28P3R%29.png"),
  "VIII": WIKI_IMG("5/58/Chihiro_Fushimi_%28P3R%29.png"),
  "IX": "",
  "X": WIKI_IMG("9/99/Keisuke_Hiraga_%28P3R%29.png"),
  "XI": WIKI_IMG("f/f2/Yuko_Nishiwaki_%28P3R%29.png"),
  "XII": WIKI_IMG("c/ca/Maiko_Oohashi_%28P3R%29.png"),
  "XIII": WIKI_IMG("e/e6/P3RE_Pharos.png"),
  "XIV": WIKI_IMG("c/cf/Bebe_%28P3R%29.png"),
  "XV": WIKI_IMG("c/ce/President_Tanaka_%28P3R%29.png"),
  "XVI": WIKI_IMG("0/0c/Mutatsu_%28P3R%29.png"),
  "XVII": WIKI_IMG("d/d9/Mamoru_Hayase_%28P3R%29.png"),
  "XVIII": WIKI_IMG("c/cb/Nozomi_Suemitsu_%28P3R%29.png"),
  "XIX": WIKI_IMG("3/3d/Akinari_Kamiki_%28P3R%29.png"),
  "XX": "assets/personajes/akihiko.webp",
  "XXI": "assets/personajes/aigis.webp",
};

/* ---------- Utilidades ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const initials = (n) => n.split(" ").map((w) => w[0]).join("").slice(0, 2);
const escapeHTML = (s) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const storage = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* sin almacenamiento */ } },
};

/* Si no hay "img", busca assets/personajes/<id>.png; si no existe, muestra las iniciales. */
function portraitHTML(c) {
  const src = c.img || `assets/personajes/${c.id}.webp`;
  return `<div class="char-card__initials">${initials(c.name)}</div>
    <img src="${src}" alt="${escapeHTML(c.name)}" loading="lazy" style="position:relative"
      onerror="this.remove()">`;
}

/* ---------- Burbujas de fondo ---------- */
(function bubbles() {
  const box = $(".bubbles");
  const n = window.innerWidth < 640 ? 14 : 28;
  for (let i = 0; i < n; i++) {
    const b = document.createElement("span");
    const size = 6 + Math.random() * 28;
    Object.assign(b.style, {
      width: size + "px", height: size + "px",
      left: Math.random() * 100 + "%",
      animationDuration: 10 + Math.random() * 18 + "s",
      animationDelay: -Math.random() * 20 + "s",
    });
    box.appendChild(b);
  }
})();

/* ---------- HUD: fecha + fase lunar ---------- */
(function hud() {
  const now = new Date();
  const days = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  $("#hud-month").textContent = now.getMonth() + 1;
  $("#hud-day").textContent = now.getDate();
  $("#hud-wday").textContent = days[now.getDay()];
  const h = now.getHours();
  $("#hud-time").textContent =
    h < 6 ? "Madrugada" : h < 8 ? "Mañana temprano" : h < 12 ? "Mañana" :
    h < 15 ? "Almuerzo" : h < 18 ? "Después de clases" : "Noche";

  // Fase lunar aproximada (ciclo sinódico de 29.53 días, luna nueva de referencia: 6 ene 2000)
  const synodic = 29.530588853;
  const ref = Date.UTC(2000, 0, 6, 18, 14);
  const phase = (((now - ref) / 86400000) % synodic + synodic) % synodic / synodic; // 0..1
  const moon = $("#hud-moon");
  // Representación simple: zona iluminada como un círculo desplazado
  const lit = phase <= 0.5 ? phase * 2 : (1 - phase) * 2; // 0 nueva → 1 llena
  const offset = (1 - lit) * 100 * (phase <= 0.5 ? 1 : -1);
  moon.style.setProperty("--moon-clip", `circle(50% at ${50 + offset}% 50%)`);
  const names = ["Luna nueva", "Creciente", "Cuarto creciente", "Gibosa creciente", "Luna llena", "Gibosa menguante", "Cuarto menguante", "Menguante"];
  moon.title = names[Math.round(phase * 8) % 8];
})();

/* ---------- Hora Oscura ---------- */
(function darkHour() {
  const btn = $(".dark-hour-toggle");
  const apply = (on) => {
    document.body.classList.toggle("dark-hour", on);
    btn.setAttribute("aria-pressed", on);
  };
  apply(storage.get("p3r-dark-hour") === "1");
  btn.addEventListener("click", () => {
    const on = !document.body.classList.contains("dark-hour");
    apply(on);
    storage.set("p3r-dark-hour", on ? "1" : "0");
  });
})();

/* ---------- Menú estilo P3R ---------- */
(function p3menu() {
  const menu = $("#p3menu");
  const openBtn = $("#menu-btn");
  const desc = $("#p3menu-desc");
  const items = $$(".p3menu__list a");
  let idx = 0;

  items.forEach((a, i) => a.style.setProperty("--i", i));

  const select = (i) => {
    idx = (i + items.length) % items.length;
    items.forEach((a, j) => a.classList.toggle("is-active", j === idx));
    desc.textContent = items[idx].dataset.desc;
  };
  const open = () => {
    menu.hidden = false;
    openBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
    select(idx);
    items[idx].focus();
  };
  const close = () => {
    menu.hidden = true;
    openBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    openBtn.focus();
  };

  openBtn.addEventListener("click", open);
  $("#menu-close").addEventListener("click", close);
  items.forEach((a, i) => {
    a.addEventListener("mouseenter", () => select(i));
    a.addEventListener("focus", () => select(i));
    a.addEventListener("click", () => { menu.hidden = true; document.body.style.overflow = ""; openBtn.setAttribute("aria-expanded", "false"); });
  });

  document.addEventListener("keydown", (e) => {
    if (menu.hidden) {
      // Tab / M abre el menú como en el juego (si no se está escribiendo)
      if ((e.key === "m" || e.key === "M") && !/input|textarea/i.test(document.activeElement.tagName)) open();
      return;
    }
    if (e.key === "Escape") close();
    else if (e.key === "ArrowDown") { e.preventDefault(); select(idx + 1); items[idx].focus(); }
    else if (e.key === "ArrowUp") { e.preventDefault(); select(idx - 1); items[idx].focus(); }
  });
})();

/* ---------- Spoilers ---------- */
(function spoilers() {
  const btn = $(".spoiler-btn");
  const box = $(".spoiler");
  btn.addEventListener("click", () => {
    const show = box.hidden;
    box.hidden = !show;
    btn.setAttribute("aria-expanded", show);
    btn.textContent = show ? "Ocultar spoilers" : "⚠ Mostrar spoilers";
  });
})();

/* ---------- Personajes: tarjetas, búsqueda y modal ---------- */
(function characters() {
  const grid = $("#char-grid");
  const empty = $("#char-empty");
  const modal = $("#char-modal");
  const body = $("#modal-body");
  let lastFocus = null;

  grid.innerHTML = CHARACTERS.map((c) => `
    <button class="char-card" data-id="${c.id}" style="--c:${c.color}"
      data-search="${escapeHTML((c.name + " " + c.arcana + " " + c.persona + " " + c.element + " " + c.weapon).toLowerCase())}">
      <div class="char-card__portrait">
        ${portraitHTML(c)}
        <span class="char-card__arcana">${c.num} · ${c.arcana}</span>
      </div>
      <div class="char-card__body">
        <h3 class="char-card__name">${escapeHTML(c.name)}</h3>
        <div class="char-card__meta">${escapeHTML(c.persona)} · ${escapeHTML(c.element)}</div>
      </div>
    </button>`).join("");

  // Animación de entrada al hacer scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en, i) => {
      if (en.isIntersecting) {
        setTimeout(() => en.target.classList.add("is-visible"), i * 70);
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.15 });
  $$(".char-card").forEach((el) => io.observe(el));

  // Búsqueda
  $("#char-search").addEventListener("input", (e) => {
    const q = e.target.value.trim().toLowerCase();
    let shown = 0;
    $$(".char-card").forEach((el) => {
      const ok = !q || el.dataset.search.includes(q);
      el.hidden = !ok;
      if (ok) { shown++; el.classList.add("is-visible"); }
    });
    empty.hidden = shown > 0;
  });

  // Modal
  const openModal = (c) => {
    lastFocus = document.activeElement;
    body.style.setProperty("--c", c.color);
    body.innerHTML = `
      <div class="modal__art">${portraitHTML(c)}</div>
      <div class="modal__info">
        <span class="modal__tag">Arcano ${c.num} · ${c.arcana}</span>
        <h3 id="modal-name">${escapeHTML(c.name)}</h3>
        <p>${escapeHTML(c.desc)}</p>
        <dl class="stats">
          <div><dt>Persona</dt><dd>${escapeHTML(c.persona)}</dd></div>
          <div><dt>Arma</dt><dd>${escapeHTML(c.weapon)}</dd></div>
          <div><dt>Afinidad</dt><dd>${escapeHTML(c.element)}</dd></div>
        </dl>
      </div>`;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    $(".modal__close", modal).focus();
  };
  const closeModal = () => {
    modal.hidden = true;
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  };

  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".char-card");
    if (card) openModal(CHARACTERS.find((c) => c.id === card.dataset.id));
  });
  modal.addEventListener("click", (e) => { if (e.target.closest("[data-close]")) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) closeModal(); });
})();

/* ---------- Social Links con filtros ---------- */
(function socialLinks() {
  const grid = $("#social-grid");
  const filters = $("#social-filters");
  const groups = [
    { label: "Todos", test: () => true },
    { label: "SEES", test: (s) => /SEES|Yukari|Fuuka|Mitsuru|Aigis/.test(s.who) },
    { label: "Escuela", test: (s) => /Kenji|Odagiri|Chihiro|Kazushi|Yuko|Keisuke|Bebe|Nozomi/.test(s.who) },
    { label: "Ciudad", test: (s) => /Bunkichi|Maiko|Tanaka|Mutatsu|Mamoru|Akinari|Maya/.test(s.who) },
    { label: "Misterio", test: (s) => /Pharos/.test(s.who) },
  ];

  const render = (test) => {
    grid.innerHTML = SOCIAL_LINKS.filter(test).map((s) => `
      <article class="slink">
        <div class="slink__num">${s.num}</div>
        <div class="slink__pic">
          <span>${initials(s.who)}</span>
          ${SL_IMG[s.num] ? `<img class="${SL_IMG[s.num].startsWith("assets/") ? "is-local" : ""}${s.num === "V" ? " is-wide" : ""}" src="${SL_IMG[s.num]}" alt="${escapeHTML(s.who)}" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">` : ""}
        </div>
        <div>
          <h4>${s.arcana}</h4>
          <p><strong>${escapeHTML(s.who)}</strong> — ${escapeHTML(s.note)}</p>
          <p class="slink__date">Inicio: <b>${s.start}</b></p>
          ${s.req ? `<p class="req">Requisito: ${escapeHTML(s.req)}</p>` : ""}
        </div>
      </article>`).join("");
  };

  filters.innerHTML = groups.map((g, i) =>
    `<button class="chip${i === 0 ? " is-active" : ""}" data-i="${i}" role="tab" aria-selected="${i === 0}">${g.label}</button>`).join("");
  filters.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    $$(".chip", filters).forEach((c) => { c.classList.toggle("is-active", c === chip); c.setAttribute("aria-selected", c === chip); });
    render(groups[chip.dataset.i].test);
  });
  render(groups[0].test);
})();

/* ---------- Reproductor Spotify ---------- */
(function player() {
  const player = $("#player");
  const toggle = $("#player-toggle");
  const hint = $("#player-hint");

  if (storage.get("p3r-player-collapsed") === "1") {
    player.classList.add("is-collapsed");
    toggle.setAttribute("aria-expanded", "false");
  }
  if (storage.get("p3r-hint-seen") === "1") hint.hidden = true;

  toggle.addEventListener("click", () => {
    const collapsed = player.classList.toggle("is-collapsed");
    toggle.setAttribute("aria-expanded", !collapsed);
    storage.set("p3r-player-collapsed", collapsed ? "1" : "0");
  });
  $("button", hint).addEventListener("click", () => { hint.hidden = true; storage.set("p3r-hint-seen", "1"); });
})();

/* Convierte "4/20" en fecha comparable (abril–diciembre 2009, enero 2010) */
const md2date = (d) => { const [m, dd] = d.split("/").map(Number); return new Date(m < 4 ? 2010 : 2009, m - 1, dd); };
const WEEK_KEYS = Object.keys(WEEKS).sort((a, b) => md2date(a) - md2date(b));

function weekHTML(key, monthDates) {
  const [links = "", stats = "", ranks = "", eps = ""] = WEEKS[key].split(";").map((x) => x.trim());
  const start = md2date(key), end = new Date(start); end.setDate(start.getDate() + 6);
  const endTxt = `${end.getMonth() + 1}/${end.getDate()}`;
  const tok = (str) => str.split(/\s+/).filter(Boolean).map((t) => t.match(/^([A-Za-z]+?)(\d+)$/)).filter(Boolean);
  const events = monthDates.filter(([d]) => { const x = md2date(d); return x >= start && x <= end; });
  const parts = [];
  if (events.length) parts.push(`<div class="wk__events">${events.map(([d, t, k]) => `<span class="md--${k}"><time>${d}</time> ${escapeHTML(t)}</span>`).join("")}</div>`);
  const L = tok(links);
  if (L.length) parts.push(`<div class="wk__row"><b>Vínculos</b><div class="wk__chips">${L.map(([, a, r]) => `<span class="wk__chip">${ARC_ES[a] || a} <i>R${r}</i></span>`).join("")}</div></div>`);
  const S = tok(stats);
  if (S.length) parts.push(`<div class="wk__row"><b>Stats</b><div class="wk__chips">${S.map(([, a, n]) => `<span class="wk__chip wk__chip--stat">+${n} ${STAT_ES[a]}</span>`).join("")}</div></div>`);
  const R = tok(ranks);
  if (R.length) parts.push(`<div class="wk__row"><b>Sube a</b><div class="wk__chips">${R.map(([, a, n]) => `<span class="wk__chip wk__chip--rank">${STAT_ES[a]}: ${STAT_RANKS[a][n - 1]}</span>`).join("")}</div></div>`);
  const E = tok(eps);
  if (E.length) parts.push(`<div class="wk__row"><b>Episodios</b><div class="wk__chips">${E.map(([, a, n]) => `<span class="wk__chip wk__chip--ep">${EP_ES[a]} ${n}</span>`).join("")}</div></div>`);
  if (!parts.length) parts.push(`<p class="wk__quiet">Semana tranquila: Tártaro, estudio y vínculos pendientes.</p>`);
  return `<li class="wk"><div class="wk__date">${key}<small>al ${endTxt}</small></div><div class="wk__body">${parts.join("")}</div></li>`;
}

const MONTH_NUM = { abr: 4, may: 5, jun: 6, jul: 7, ago: 8, sep: 9, oct: 10, nov: 11, dic: 12, ene: 1 };
const weekKeysFor = (id) => WEEK_KEYS.filter((k) => +k.split("/")[0] === MONTH_NUM[id]);

/* ---------- Mes a mes ---------- */
(function months() {
  const tabs = $("#months-tabs");
  const panel = $("#month-panel");
  if (!tabs || !panel) return;

  tabs.innerHTML = MONTHS.map((m, i) =>
    `<button class="month-tab" role="tab" id="mt-${m.id}" data-i="${i}" aria-selected="false">
       <span class="month-tab__num">${[4,5,6,7,8,9,10,11,12,1][i]}</span><span class="month-tab__name">${m.name}</span>
     </button>`).join("");

  const show = (i) => {
    const m = MONTHS[i];
    $$(".month-tab", tabs).forEach((b, j) => {
      b.classList.toggle("is-active", j === i);
      b.setAttribute("aria-selected", j === i);
    });
    const pct = Math.round((m.floor / TARTARUS_TOP) * 100);
    panel.innerHTML = `
      <div class="month-panel__head">
        <div class="month-panel__big"><b>${m.en}</b><span>${m.name}</span></div>
        <p>${escapeHTML(m.intro)}</p>
      </div>
      <div class="month-panel__body">
        <div class="month-todo">
          <h3>Objetivos</h3>
          <ol>${m.todo.map((t) => `<li>${escapeHTML(t)}</li>`).join("")}</ol>
        </div>
        <div class="month-side">
          <h3>Fechas clave</h3>
          <ul class="month-dates">${m.dates.map(([d, txt, k]) =>
            `<li class="md md--${k}" title="${KIND_LABEL[k]}"><time>${d}</time><span>${escapeHTML(txt)}</span></li>`).join("")}</ul>
          <div class="floor">
            <div class="floor__label"><span>Tártaro</span><b>${m.floor}F</b><small>/ ${TARTARUS_TOP}F</small></div>
            <div class="floor__bar"><i style="width:${pct}%"></i></div>
          </div>
        </div>
      </div>
      <div class="weeks">
        <h3>Semana a semana</h3>
        <ol class="weeks__list">${weekKeysFor(m.id).map((k) => weekHTML(k, m.dates)).join("")}</ol>
        <a class="weeks__more" href="${GUIDE_BASE}${GUIDE_SLUG[m.id]}" target="_blank" rel="noopener">Ver los pasos día por día en la guía de GameFAQs →</a>
      </div>`;
    storage.set("p3r-month", String(i));
  };

  tabs.addEventListener("click", (e) => {
    const b = e.target.closest(".month-tab");
    if (b) show(+b.dataset.i);
  });
  tabs.addEventListener("keydown", (e) => {
    const cur = $$(".month-tab", tabs).findIndex((b) => b.classList.contains("is-active"));
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      const n = (cur + (e.key === "ArrowRight" ? 1 : -1) + MONTHS.length) % MONTHS.length;
      show(n); $$(".month-tab", tabs)[n].focus();
    }
  });

  // Por defecto: el mes guardado, o el mes real del calendario si cae entre abril y enero
  const saved = parseInt(storage.get("p3r-month"), 10);
  const order = [4,5,6,7,8,9,10,11,12,1];
  const today = order.indexOf(new Date().getMonth() + 1);
  show(!isNaN(saved) && MONTHS[saved] ? saved : today >= 0 ? today : 0);
})();

/* ---------- Botón volver arriba ---------- */
(function toTop() {
  const btn = $(".to-top");
  addEventListener("scroll", () => btn.classList.toggle("is-visible", scrollY > 600), { passive: true });
})();
