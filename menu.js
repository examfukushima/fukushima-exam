// 全ページ共通のメニューを生成する関数
function generateMenu() {
    const headerHtml = `
        <header>
            <button class="menu-btn" onclick="toggleMenu()"><span></span><span></span><span></span></button>
            <div class="header-title">福島県高校入試対策</div>
            <div style="width: 28px;"></div>
        </header>
        <div class="menu-bg" id="menuBg" onclick="toggleMenu()"></div>
        <nav class="nav-overlay" id="navOverlay">
            <a href="index.html">トップページ</a>
            <a href="taisaku.html">入試分析・対策</a>
            <a href="kakomon.html">過去問ライブラリ</a>
            <a href="simulator.html">シミュレーター</a>
            <a href="hensachi.html">偏差値一覧</a>
        </nav>
    `;

    // bodyの先頭に挿入
    document.body.insertAdjacentHTML('afterbegin', headerHtml);
}

// メニューの開閉機能
function toggleMenu() {
    const nav = document.getElementById('navOverlay');
    const bg = document.getElementById('menuBg');
    if (nav && bg) {
        nav.classList.toggle('active');
        bg.classList.toggle('active');
    }
}

// ページ読み込み時に実行
window.addEventListener('DOMContentLoaded', generateMenu);
