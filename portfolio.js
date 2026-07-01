// スクロールアニメーション
/* 到達したら要素を表示させる */
function showElementAnimation() {
	var elements = document.querySelectorAll('.fadeIn, .clipTo'); // 複数のクラスを対象に
	if (elements.length === 0) return; // 要素がなかったら処理をキャンセル

	var showTiming = window.innerHeight > 768 ? 150 : 60; // 要素が出てくるタイミングをより早く調整
	var scrollY = window.scrollY; // スクロール量を取得
	var windowH = window.innerHeight; // ブラウザウィンドウのビューポート(viewport)の高さを取得

	elements.forEach(function (element) {
		var elemClientRect = element.getBoundingClientRect();
		var elemY = scrollY + elemClientRect.top;
		if (scrollY + windowH - showTiming > elemY) {
			element.classList.add('scrollin');
		} else if (scrollY + windowH < elemY) {
			element.classList.remove('scrollin');
		}
	});
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);

const datas = {
	"monster-battle":{
		title:"monster-battle",
		img:"img/image copy.png",
		discription:
		"バトルロイヤルモードとパーティーバトルモードが遊べます。<br><br>◯バトルロイヤルモード<br>5匹のモンスターでバトルロイヤル! プレイヤーはモンスターを1匹選んで操作できます。目指すはただ一人の勝者!<br>◯パーティーバトル<br>勇者パーティーとモンスターの集団のガチンコバトル! プレイヤーは勇者パーティーを操作し5匹のモンスターの集団を撃破しよう!<br><br>使用言語: Python3,HTML,CSS<br>使用フレームワーク: flask",
		link1:"https://monster-battle-p2v7.onrender.com",
		link2:"https://github.com/YA634/monster_battle"
	},
	"cards-app":{
		title:"cards-app",
		img:"img/image.png",
		discription:"バカラ、ブラックジャック、ポーカー(未実装)が遊べます。<br><br>◯バカラ<br>プレイヤーはバンカーかプレイヤーのどちらが勝つかに賭けます。<br>◯ブラックジャック<br>最強の手札は21! カードを引くも引かないもあなたの選択!<br>◯ポーカー<br>役を揃えて心理戦を挑もう!<br>使用言語: Python3,HTML,CSS<br>使用フレームワーク: Django",
		link1:"https://cards-app-6tfq.onrender.com",
		link2:"https://github.com/YA634/cards"
	}
};
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const data = datas[id];
document.querySelector('h5.works-title').innerText = data.title;
document.querySelector('h2.works-title').innerText = data.title;
const imgEl = document.createElement('img');
imgEl.src = data.img;
imgEl.alt = data.title;
document.getElementById('works-img').appendChild(imgEl);
document.getElementById('works-discription').innerHTML=data.discription
const linkEl1 = document.createElement('a');
linkEl1.href= data.link1
linkEl1.textContent = 'アプリを開く';
linkEl1.target = '_blank';
const linkEl2 = document.createElement('a');
linkEl2.href= data.link2
linkEl2.textContent = 'GitHubのリンク';
linkEl2.target = '_blank';
document.getElementById('works-link').appendChild(linkEl1);
document.getElementById('works-link').appendChild(document.createElement('br'));
document.getElementById('works-link').appendChild(linkEl2);