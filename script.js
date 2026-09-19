document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       NEWS DATABASE
    ===================================================== */

    const newsData = {

        national: [
            {
                id: 1,
                category: "জাতীয়",
                title: "জাতীয় সংসদে নতুন শিক্ষা বিল পাস, শিক্ষার্থীদের জন্য বিশেষ সুযোগ",
                description: "নতুন বিল শিক্ষাখাতে বরাদ্দ বৃদ্ধি, উচ্চশিক্ষা ও গবেষণার জন্য বিশেষ তহবিল গঠনের ব্যবস্থা নিয়েছে।",
                image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=85",
                time: "১০ মিনিট আগে",
                views: "২.৫ হাজার"
            },

            {
                id: 2,
                category: "জাতীয়",
                title: "দেশের বিভিন্ন স্থানে নতুন উন্নয়ন প্রকল্প",
                description: "দেশের বিভিন্ন অঞ্চলে নতুন উন্নয়ন কার্যক্রম শুরু হয়েছে।",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
                time: "১ ঘণ্টা আগে",
                views: "১.৮ হাজার"
            },

            {
                id: 3,
                category: "জাতীয়",
                title: "শিক্ষার্থীদের জন্য নতুন সুযোগ ঘোষণা",
                description: "শিক্ষার্থীদের উচ্চশিক্ষায় নতুন সুযোগ তৈরি করতে উদ্যোগ নেওয়া হয়েছে।",
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
                time: "২ ঘণ্টা আগে",
                views: "১.২ হাজার"
            },

            {
                id: 4,
                category: "জাতীয়",
                title: "স্বাস্থ্যখাতে নতুন কর্মসূচি ঘোষণা",
                description: "দেশের স্বাস্থ্যসেবা আরও উন্নত করতে নতুন কর্মসূচি নেওয়া হয়েছে।",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
                time: "৩ ঘণ্টা আগে",
                views: "৯৮০"
            }
        ],


        politics: [
            {
                id: 11,
                category: "রাজনীতি",
                title: "আগামী নির্বাচনে দলগুলোর প্রস্তুতি জোরদার",
                description: "আগামী নির্বাচনকে সামনে রেখে রাজনৈতিক দলগুলো সাংগঠনিক কার্যক্রম বৃদ্ধি করেছে।",
                image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",
                time: "১ ঘণ্টা আগে",
                views: "৩.১ হাজার"
            },

            {
                id: 12,
                category: "রাজনীতি",
                title: "রাজনৈতিক দলগুলোর গুরুত্বপূর্ণ বৈঠক",
                description: "দেশের সাম্প্রতিক রাজনৈতিক পরিস্থিতি নিয়ে গুরুত্বপূর্ণ বৈঠক অনুষ্ঠিত হয়েছে।",
                image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
                time: "২ ঘণ্টা আগে",
                views: "২ হাজার"
            },

            {
                id: 13,
                category: "রাজনীতি",
                title: "নতুন রাজনৈতিক কর্মসূচি ঘোষণা",
                description: "রাজনৈতিক দলগুলো নতুন কর্মসূচি ঘোষণা করেছে।",
                image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80",
                time: "৪ ঘণ্টা আগে",
                views: "১.৫ হাজার"
            },

            {
                id: 14,
                category: "রাজনীতি",
                title: "নির্বাচনী প্রস্তুতি নিয়ে আলোচনা",
                description: "নির্বাচনকে কেন্দ্র করে বিভিন্ন পর্যায়ে আলোচনা চলছে।",
                image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80",
                time: "৬ ঘণ্টা আগে",
                views: "৮৫০"
            }
        ],


        rangpur: [
            {
                id: 21,
                category: "রংপুর",
                title: "রংপুরে শীতকালীন প্রস্তুতিতে প্রশাসনের বিশেষ নির্দেশনা",
                description: "উত্তরাঞ্চলে শীত মোকাবিলায় প্রশাসন বিশেষ প্রস্তুতি গ্রহণ করেছে।",
                image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85",
                time: "৩০ মিনিট আগে",
                views: "২.২ হাজার"
            },

            {
                id: 22,
                category: "রংপুর",
                title: "রংপুরের কৃষকদের জন্য কৃষি ঋণ সহায়তার ঘোষণা",
                description: "কৃষকদের জন্য বিশেষ ঋণ সহায়তার উদ্যোগ নেওয়া হয়েছে।",
                image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80",
                time: "২ ঘণ্টা আগে",
                views: "১.৪ হাজার"
            },

            {
                id: 23,
                category: "রংপুর",
                title: "রংপুরে নতুন সড়ক উন্নয়ন প্রকল্প",
                description: "যোগাযোগ ব্যবস্থা উন্নত করতে নতুন প্রকল্প হাতে নেওয়া হয়েছে।",
                image: "https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&w=800&q=80",
                time: "৩ ঘণ্টা আগে",
                views: "১ হাজার"
            },

            {
                id: 24,
                category: "রংপুর",
                title: "স্থানীয় বাজারে পণ্যের সরবরাহ বৃদ্ধি",
                description: "স্থানীয় বাজারে বিভিন্ন পণ্যের সরবরাহ বৃদ্ধি পেয়েছে।",
                image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=800&q=80",
                time: "৫ ঘণ্টা আগে",
                views: "৭৫০"
            }
        ],


        sports: [
            {
                id: 31,
                category: "ক্রিকেট",
                title: "টি-২০ সিরিজে বাংলাদেশের দাপুটে জয়",
                description: "দারুণ পারফরম্যান্সের মাধ্যমে বাংলাদেশ টি-২০ সিরিজে বড় জয় পেয়েছে।",
                image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1200&q=85",
                time: "২ ঘণ্টা আগে",
                views: "৪.৫ হাজার"
            },

            {
                id: 32,
                category: "ফুটবল",
                title: "প্রিমিয়ার লিগে আজ বড় ম্যাচ",
                description: "আজ প্রিমিয়ার লিগে গুরুত্বপূর্ণ ম্যাচ অনুষ্ঠিত হবে।",
                image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80",
                time: "৩ ঘণ্টা আগে",
                views: "২.৭ হাজার"
            },

            {
                id: 33,
                category: "ক্রিকেট",
                title: "ব্যাটিংয়ে নতুন রেকর্ড",
                description: "দুর্দান্ত ব্যাটিং করে নতুন রেকর্ড তৈরি হয়েছে।",
                image: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=800&q=80",
                time: "৫ ঘণ্টা আগে",
                views: "১.৯ হাজার"
            },

            {
                id: 34,
                category: "অন্যান্য",
                title: "জাতীয় অ্যাথলেটিকসে নতুন রেকর্ড",
                description: "জাতীয় অ্যাথলেটিকস প্রতিযোগিতায় নতুন রেকর্ড হয়েছে।",
                image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=800&q=80",
                time: "৬ ঘণ্টা আগে",
                views: "১.১ হাজার"
            }
        ],


        economy: [
            {
                id: 41,
                category: "অর্থনীতি",
                title: "রেমিট্যান্স প্রবাহে রেকর্ড বৃদ্ধি",
                description: "রেমিট্যান্স প্রবাহ বৃদ্ধিতে অর্থনীতিতে ইতিবাচক প্রভাব পড়ছে।",
                image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1200&q=85",
                time: "১ ঘণ্টা আগে",
                views: "৩.৮ হাজার"
            },

            {
                id: 42,
                category: "অর্থনীতি",
                title: "শেয়ারবাজারে আজ সূচকের উত্থান",
                description: "দেশের শেয়ারবাজারে আজ সূচকের উল্লেখযোগ্য পরিবর্তন হয়েছে।",
                image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
                time: "২ ঘণ্টা আগে",
                views: "২.১ হাজার"
            },

            {
                id: 43,
                category: "অর্থনীতি",
                title: "রপ্তানি আয়ে নতুন সম্ভাবনা",
                description: "রপ্তানি খাতে নতুন সম্ভাবনা তৈরি হয়েছে।",
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
                time: "৪ ঘণ্টা আগে",
                views: "১.৫ হাজার"
            },

            {
                id: 44,
                category: "অর্থনীতি",
                title: "ব্যাংকিং খাতে নতুন উদ্যোগ",
                description: "ব্যাংকিং খাতে নতুন কিছু উদ্যোগ নিয়ে আলোচনা চলছে।",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
                time: "৭ ঘণ্টা আগে",
                views: "৮৯০"
            }
        ],


        international: [
            {
                id: 51,
                category: "আন্তর্জাতিক",
                title: "বিশ্ববাজারে নতুন অর্থনৈতিক পরিবর্তন",
                description: "বিশ্ব অর্থনীতিতে সাম্প্রতিক পরিবর্তনের প্রভাব নিয়ে বিশ্লেষণ।",
                image: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=85",
                time: "১ ঘণ্টা আগে",
                views: "২.৮ হাজার"
            },

            {
                id: 52,
                category: "আন্তর্জাতিক",
                title: "আঞ্চলিক সহযোগিতা নিয়ে বৈঠক",
                description: "আঞ্চলিক সহযোগিতা বৃদ্ধি নিয়ে গুরুত্বপূর্ণ বৈঠক হয়েছে।",
                image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=800&q=80",
                time: "৩ ঘণ্টা আগে",
                views: "১.৭ হাজার"
            },

            {
                id: 53,
                category: "আন্তর্জাতিক",
                title: "নতুন বাণিজ্য চুক্তি নিয়ে আলোচনা",
                description: "বিভিন্ন দেশের মধ্যে নতুন বাণিজ্য চুক্তি নিয়ে আলোচনা চলছে।",
                image: "https://images.unsplash.com/photo-1569098644584-210bcd375b59?auto=format&fit=crop&w=800&q=80",
                time: "৫ ঘণ্টা আগে",
                views: "১.৩ হাজার"
            },

            {
                id: 54,
                category: "আন্তর্জাতিক",
                title: "বিশ্ববাজারে পণ্যের দাম নিয়ে নতুন তথ্য",
                description: "আন্তর্জাতিক বাজারে বিভিন্ন পণ্যের দামে পরিবর্তন এসেছে।",
                image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
                time: "৮ ঘণ্টা আগে",
                views: "৭২০"
            }
        ],


        entertainment: [
            {
                id: 61,
                category: "বিনোদন",
                title: "নতুন সিনেমা নিয়ে দর্শকদের মধ্যে ব্যাপক আগ্রহ",
                description: "নতুন সিনেমার ট্রেলার প্রকাশের পর দর্শকদের মধ্যে ব্যাপক আগ্রহ তৈরি হয়েছে।",
                image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=85",
                time: "১ ঘণ্টা আগে",
                views: "৩ হাজার"
            },

            {
                id: 62,
                category: "বিনোদন",
                title: "জনপ্রিয় তারকার নতুন প্রজেক্ট",
                description: "জনপ্রিয় তারকা নতুন একটি প্রজেক্টে কাজ শুরু করেছেন।",
                image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
                time: "৪ ঘণ্টা আগে",
                views: "১.৯ হাজার"
            }
        ],


        lifestyle: [
            {
                id: 71,
                category: "লাইফস্টাইল",
                title: "সুস্থ থাকতে দৈনন্দিন জীবনে যেসব অভ্যাস জরুরি",
                description: "দৈনন্দিন জীবনে কিছু ভালো অভ্যাস সুস্থ জীবনযাপনে সাহায্য করতে পারে।",
                image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=85",
                time: "২ ঘণ্টা আগে",
                views: "২.২ হাজার"
            },

            {
                id: 72,
                category: "লাইফস্টাইল",
                title: "শীতের সময় ত্বকের যত্ন",
                description: "শীত মৌসুমে ত্বকের যত্ন নেওয়ার কিছু গুরুত্বপূর্ণ উপায়।",
                image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=800&q=80",
                time: "৫ ঘণ্টা আগে",
                views: "১.৪ হাজার"
            }
        ]

    };


    /* =====================================================
       HOME PAGE DATA
    ===================================================== */

    const homeNews = [

        ...newsData.national,
        ...newsData.politics,
        ...newsData.rangpur,
        ...newsData.sports,
        ...newsData.economy,
        ...newsData.international

    ];


    /* =====================================================
       GET CURRENT PAGE
    ===================================================== */

    const fileName =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();


    let currentCategory = "home";


    if (fileName === "national.html") {
        currentCategory = "national";
    }

    else if (fileName === "politics.html") {
        currentCategory = "politics";
    }

    else if (fileName === "rangpur.html") {
        currentCategory = "rangpur";
    }

    else if (fileName === "sports.html") {
        currentCategory = "sports";
    }

    else if (fileName === "economy.html") {
        currentCategory = "economy";
    }

    else if (fileName === "international.html") {
        currentCategory = "international";
    }

    else if (fileName === "entertainment.html") {
        currentCategory = "entertainment";
    }

    else if (fileName === "lifestyle.html") {
        currentCategory = "lifestyle";
    }


    /* =====================================================
       CURRENT NEWS
    ===================================================== */

    const currentNews =
        currentCategory === "home"
            ? homeNews
            : newsData[currentCategory];


    /* =====================================================
       ACTIVE NAV
    ===================================================== */

    document
        .querySelectorAll(".nav-links a")
        .forEach(link => {

            link.classList.remove("active");

            const href =
                link.getAttribute("href");

            if (
                currentCategory === "home" &&
                href === "index.html"
            ) {
                link.classList.add("active");
            }

            else if (
                href === `${currentCategory}.html`
            ) {
                link.classList.add("active");
            }

        });


    /* =====================================================
       RENDER LEAD NEWS
    ===================================================== */

    function renderLeadNews() {

        const container =
            document.getElementById("leadNews");

        if (!container || !currentNews.length)
            return;


        const news =
            currentNews[0];


        container.innerHTML = `

            <article class="lead-card">

                <a href="news-details.html?id=${news.id}">

                    <div class="image-wrap">

                        <img
                            src="${news.image}"
                            alt="${news.title}"
                            loading="eager"
                        >

                        <span class="category-tag">
                            ${news.category}
                        </span>

                    </div>

                </a>


                <h1>

                    <a href="news-details.html?id=${news.id}">
                        ${news.title}
                    </a>

                </h1>


                <div class="meta">

                    প্রকাশ: ১৬ সেপ্টেম্বর ২০২৬
                    &nbsp;|&nbsp;

                    ${news.time}

                    &nbsp;•&nbsp;

                    ${news.views} পাঠক

                </div>


                <p>
                    ${news.description}
                </p>

            </article>

        `;

    }


    /* =====================================================
       RENDER SMALL NEWS
    ===================================================== */

    function renderSmallNews() {

        const container =
            document.getElementById("smallNews");

        if (!container)
            return;


        const news =
            currentNews.slice(1, 3);


        container.innerHTML =
            news.map(item => `

                <article class="news-card">

                    <a href="news-details.html?id=${item.id}">

                        <div class="card-image">

                            <img
                                src="${item.image}"
                                alt="${item.title}"
                                loading="lazy"
                            >

                            <span class="category-tag">
                                ${item.category}
                            </span>

                        </div>

                    </a>


                    <h3>

                        <a href="news-details.html?id=${item.id}">
                            ${item.title}
                        </a>

                    </h3>


                    <div class="meta">
                        ${item.time}
                    </div>

                </article>

            `)
            .join("");

    }


    /* =====================================================
       RENDER SPORTS / CATEGORY NEWS
    ===================================================== */

    function renderSportsNews() {

        const container =
            document.getElementById("sportsNews");

        if (!container)
            return;


        const news =
            currentCategory === "home"
                ? newsData.sports
                : currentNews.slice(1, 4);


        container.innerHTML =
            news.map(item => `

                <article class="news-card">

                    <a href="news-details.html?id=${item.id}">

                        <div class="card-image">

                            <img
                                src="${item.image}"
                                alt="${item.title}"
                                loading="lazy"
                            >

                            <span class="category-tag">
                                ${item.category}
                            </span>

                        </div>

                    </a>


                    <h3>

                        <a href="news-details.html?id=${item.id}">
                            ${item.title}
                        </a>

                    </h3>


                    <div class="meta">
                        ${item.time}
                    </div>

                </article>

            `)
            .join("");

    }


    /* =====================================================
       SECTION TITLE
    ===================================================== */

    function updateSectionTitle() {

        const title =
            document.getElementById(
                "sectionCategory"
            );

        if (!title)
            return;


        if (currentCategory === "home") {

            title.textContent =
                "খেলাধুলা";

        }

        else {

            title.textContent =
                currentNews[0]?.category ||
                "সর্বশেষ";

        }

    }


    /* =====================================================
       LATEST NEWS
    ===================================================== */

    function renderLatestNews() {

        const container =
            document.getElementById(
                "latestNews"
            );

        if (!container)
            return;


        const latest =
            homeNews.slice(0, 6);


        container.innerHTML =
            latest.map(item => `

                <li>

                    <a href="news-details.html?id=${item.id}">
                        ${item.title}
                    </a>

                    <small>
                        ${item.time}
                    </small>

                </li>

            `)
            .join("");

    }


    /* =====================================================
       POPULAR NEWS
    ===================================================== */

    function renderPopularNews() {

        const container =
            document.getElementById(
                "popularNews"
            );

        if (!container)
            return;


        const popular =
            [...homeNews]
                .sort((a, b) =>
                    parseViews(b.views) -
                    parseViews(a.views)
                )
                .slice(0, 5);


        container.innerHTML =
            popular.map(item => `

                <li>

                    <a href="news-details.html?id=${item.id}">
                        ${item.title}
                    </a>

                </li>

            `)
            .join("");

    }


    function parseViews(value) {

        if (!value)
            return 0;


        const number =
            parseFloat(value);


        if (value.includes("হাজার")) {
            return number * 1000;
        }


        return number;

    }


    /* =====================================================
       BREAKING NEWS
    ===================================================== */

    function renderBreakingNews() {

        const ticker =
            document.getElementById("ticker");

        if (!ticker)
            return;


        const breaking =
            homeNews.slice(0, 6);


        ticker.innerHTML =
            breaking.map(item => `

                <span>
                    • ${item.title}
                </span>

            `)
            .join("");

    }


    /* =====================================================
       DATE & TIME
    ===================================================== */

    function updateDateTime() {

        const dateElement =
            document.getElementById(
                "dateTime"
            );

        if (!dateElement)
            return;


        const now =
            new Date();


        const days = [
            "রবিবার",
            "সোমবার",
            "মঙ্গলবার",
            "বুধবার",
            "বৃহস্পতিবার",
            "শুক্রবার",
            "শনিবার"
        ];


        const months = [
            "জানুয়ারি",
            "ফেব্রুয়ারি",
            "মার্চ",
            "এপ্রিল",
            "মে",
            "জুন",
            "জুলাই",
            "আগস্ট",
            "সেপ্টেম্বর",
            "অক্টোবর",
            "নভেম্বর",
            "ডিসেম্বর"
        ];


        const day =
            days[now.getDay()];


        const date =
            now.getDate();


        const month =
            months[now.getMonth()];


        const year =
            now.getFullYear();


        const time =
            now.toLocaleTimeString(
                "bn-BD",
                {
                    hour: "numeric",
                    minute: "2-digit"
                }
            );


        dateElement.innerHTML = `

            ${day},
            ${date}
            ${month}
            ${year}

            &nbsp;|&nbsp;

            রংপুর

            &nbsp;|&nbsp;

            ${time}

        `;

    }


    updateDateTime();


    setInterval(
        updateDateTime,
        60000
    );


    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    const menuToggle =
        document.getElementById(
            "menuToggle"
        );


    const navLinks =
        document.getElementById(
            "navLinks"
        );


    menuToggle?.addEventListener(
        "click",
        () => {

            navLinks.classList.toggle(
                "show"
            );


            menuToggle.textContent =
                navLinks.classList.contains(
                    "show"
                )
                    ? "✕"
                    : "☰";

        }
    );


    navLinks
        ?.querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    navLinks.classList.remove(
                        "show"
                    );

                    menuToggle.textContent =
                        "☰";

                }
            );

        });


    /* =====================================================
       SEARCH
    ===================================================== */

    const searchForm =
        document.getElementById(
            "searchForm"
        );


    const searchInput =
        document.getElementById(
            "searchInput"
        );


    searchForm?.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const query =
                searchInput.value
                    .trim()
                    .toLowerCase();


            if (!query) {

                searchInput.focus();

                return;

            }


            const results =
                homeNews.filter(news =>

                    news.title
                        .toLowerCase()
                        .includes(query)

                    ||

                    news.description
                        .toLowerCase()
                        .includes(query)

                    ||

                    news.category
                        .toLowerCase()
                        .includes(query)

                );


            if (!results.length) {

                alert(
                    `"${query}" এর জন্য কোনো সংবাদ পাওয়া যায়নি।`
                );

                return;

            }


            /*
             * Search results localStorage-এ
             * রেখে search.html-এ পাঠানো হচ্ছে।
             */

            localStorage.setItem(
                "searchResults",
                JSON.stringify(results)
            );


            localStorage.setItem(
                "searchQuery",
                query
            );


            window.location.href =
                "search.html";

        }
    );


    /* =====================================================
       NEWSLETTER
    ===================================================== */

    const newsletterForm =
        document.getElementById(
            "newsletterForm"
        );


    const emailInput =
        document.getElementById(
            "emailInput"
        );


    const newsletterMessage =
        document.getElementById(
            "newsletterMessage"
        );


    newsletterForm?.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const email =
                emailInput.value.trim();


            if (!email)
                return;


            const subscribers =
                JSON.parse(
                    localStorage.getItem(
                        "newsletterSubscribers"
                    ) || "[]"
                );


            subscribers.push({

                email: email,

                date:
                    new Date().toISOString()

            });


            localStorage.setItem(
                "newsletterSubscribers",
                JSON.stringify(
                    subscribers
                )
            );


            newsletterMessage.textContent =
                "সফলভাবে সাবস্ক্রাইব করা হয়েছে। ধন্যবাদ!";


            emailInput.value = "";

        }
    );


    /* =====================================================
       BACK TO TOP
    ===================================================== */

    const backTop =
        document.getElementById(
            "backTop"
        );


    window.addEventListener(
        "scroll",
        () => {

            if (
                window.scrollY > 450
            ) {

                backTop.style.display =
                    "grid";

            }

            else {

                backTop.style.display =
                    "none";

            }

        }
    );


    backTop?.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );


    /* =====================================================
       TICKER PAUSE
    ===================================================== */

    const ticker =
        document.getElementById(
            "ticker"
        );


    ticker?.addEventListener(
        "mouseenter",
        () => {

            ticker.style.animationPlayState =
                "paused";

        }
    );


    ticker?.addEventListener(
        "mouseleave",
        () => {

            ticker.style.animationPlayState =
                "running";

        }
    );


    /* =====================================================
       INITIAL RENDER
    ===================================================== */

    renderLeadNews();

    renderSmallNews();

    renderSportsNews();

    updateSectionTitle();

    renderLatestNews();

    renderPopularNews();

    renderBreakingNews();

});
