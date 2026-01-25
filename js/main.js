// アイコンを有効化
document.addEventListener('DOMContentLoaded', function () {
    lucide.createIcons();
});

// 経歴データの定義
const careerData = [
    {
        period: "Formation: Soccer",
        title: "副キャプテンとしての原点",
        content: "幼少期よりサッカーを始め、中学・高校にて九州、全国大会出場。副キャプテンとして「個々を支え、和を創る」サポート型リーダーシップを学びました。これが今の対人支援のルーツです。",
        icon: "trophy",
        color: "text-blue-500",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-100"
    },
    {
        period: "Expertise: Medical",
        title: "理学療法士としての探究の6年間",
        content: "首席卒業後、師匠の元で日夜研鑽。毎日勉強の習慣化。某研究会所属。トレーナーやコーチングなど挑戦。自費でポータブルエコーを購入するほどに追及。「徹底的に突き詰める姿勢」は私の最大の武器です。",
        icon: "stethoscope",
        color: "text-emerald-500",
        bgColor: "bg-emerald-50",
        borderColor: "border-emerald-100"
    },
    {
        period: "Expansion: Sales",
        title: "人材営業でのトップセールス達成",
        content: "営業へ転身し社内1位を達成。お客様の潜在ニーズを聞き出し人に寄り添う心、論理的に解決策を提案する力を武器に、目標をやり抜く完遂力を磨きました。",
        icon: "users",
        color: "text-orange-500",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-100"
    },
    {
        period: "Current: IT Journey",
        title: "ITで多くの人を支える挑戦",
        content: "何事も学ぶのが趣味に。今後、並行して通信大学にてデータサイエンスを学びます。独学やスクールにてアプリ開発を学び、「リハビリ・コネクト」を自作。貴社の戦力になることをお約束します。",
        icon: "cpu",
        color: "text-indigo-500",
        bgColor: "bg-indigo-50",
        borderColor: "border-indigo-100"
    }
];

// 経歴リストを動的に生成
function initializeCareerSection() {
    const careerContainer = document.getElementById('career-container');
    if (careerContainer) {
        careerData.forEach((step) => {
            const div = document.createElement('div');
            div.className = `career-item p-8 rounded-[2.5rem] border transition-all duration-500 ${step.bgColor} ${step.borderColor} hover:shadow-lg cursor-pointer reveal bg-white`;

            div.onclick = () => {
                const isActive = div.classList.contains('active');
                // 他の開いている項目をすべて閉じる
                document.querySelectorAll('.career-item').forEach(el => el.classList.remove('active'));
                // クリックした項目が閉じていたなら開く
                if (!isActive) div.classList.add('active');
            };

            div.innerHTML = `
                <div class="flex items-start gap-6">
                    <div class="icon-box bg-white p-4 rounded-2xl shadow-sm transition-all duration-500 shrink-0">
                        <i data-lucide="${step.icon}" class="${step.color}"></i>
                    </div>
                    <div class="flex-1 text-left">
                        <div class="text-[10px] font-black text-indigo-500 uppercase tracking-widest mb-2 text-left opacity-60">${step.period}</div>
                        <h3 class="text-2xl font-bold mb-2 flex items-center justify-between text-slate-800">
                            ${step.title}
                            <i data-lucide="chevron-right" class="arrow-icon w-6 h-6 text-slate-300 transition-transform duration-300"></i>
                        </h3>
                        <div class="career-content text-slate-600 text-lg leading-loose">
                            ${step.content}
                        </div>
                    </div>
                </div>
            `;
            careerContainer.appendChild(div);
        });
        // 動的に追加したアイコンを有効化
        lucide.createIcons();
    }
}

// スクロールに応じたふわっと表示 
function initializeScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ナビゲーションのスクロールエフェクト
function initializeNavigationEffects() {
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 50) {
            nav.classList.add('glass-nav', 'py-3');
            nav.classList.remove('py-5');
        } else {
            nav.classList.remove('glass-nav', 'py-3');
            nav.classList.add('py-5');
        }
    });
}

// スムーズスクロール
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// すべての機能を初期化
document.addEventListener('DOMContentLoaded', function () {
    initializeCareerSection();
    initializeScrollAnimations();
    initializeNavigationEffects();
    initializeSmoothScroll();
});

// 外部リンクのセキュリティ対策
document.addEventListener('click', function (e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('http')) {
        e.target.setAttribute('target', '_blank');
        e.target.setAttribute('rel', 'noopener noreferrer');
    }
});