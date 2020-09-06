'use strict'

const li = document.querySelectorAll('.items > li');
const girl = document.querySelector('.girl');
const girls = [
	'images/josei_06_sailor/PNG/josei_06_a.png',
	'images/josei_06_sailor/PNG/josei_06_b.png',
	'images/josei_06_sailor/PNG/josei_06_c.png',
	'images/josei_06_sailor/PNG/josei_06_d.png',
	'images/josei_06_sailor/PNG/josei_06_e.png',
	'images/josei_06_sailor/PNG/josei_06_f.png',
	'images/josei_06_sailor/PNG/josei_06_g.png',
	'images/josei_06_sailor/PNG/josei_06_h.png',
]

let count = 0;
let countFav = 0;

const girlsRandom = [
	{
		serif: '高いものっていいよね。私、大好き！',
		look: girls[7]
	},
	{
		serif: '私？私は女子高生のまいっていうの！',
		look: girls[1]
	},
	{
		serif: '私の高校は女子高なの。君に会えて嬉しいな♡',
		look: girls[6]
	},
	{
		serif: 'たまにこうやって画面の前の人にプレゼントをもらえるんだ。あ、もちろん君は特別だよ？...本当だって！',
		look: girls[5]
	},
	{
		serif: '恋バナでもする？二人きりなんだし...',
		look: girls[6]
	},
	{
		serif: '私はサッカー部のマネージャーをしてるよ。女子サッカーって、すっごくかっこいいの！',
		look: girls[1]
	},
	{
		serif: 'まいって名前気に入ってるの。おばあちゃんがつけてくれたんだって。',
		look: girls[1]
	},
	{
		serif: '流行り物が好きなんだ。みんな飲んでるのちょーだーい！',
		look: girls[6]
	},
];

girl.addEventListener('click', () => {
	const n = Math.floor(Math.random() * girlsRandom.length);
	document.querySelector('.message_text').textContent = girlsRandom[n].serif;
	girl.src = girlsRandom[n].look;
});


li.forEach((item) => {
	item.addEventListener('mouseover',  () => {
		document.querySelector('.item_exp').textContent =  item.dataset.text;
	})
	item.addEventListener('click', e => {
		if (e.target.classList.contains('inactive')) {
			return;
		}

		changeExp();
		changeText();

		girl.classList.add('active');
		setTimeout(() => {
			girl.classList.remove('active');
		}, 200);

		e.target.classList.add('inactive');
		
		count++;
		document.querySelector('.count').textContent = count;


		if (countFav >= 11) {
			document.querySelector('.favors').classList.add('good');
		} else {
			document.querySelector('.favors').classList.remove('good');
		}

		if (count === 5) {
			document.querySelector('.load').classList.add('active');
			setTimeout(() => {
				if (countFav < 11) {
					location.href = 'burn.html';
				} else if (countFav >= 11) {
					location.href = 'clearrrrrrrrrrr.html';
				}
			}, 7000);
		}
	});



	function changeExp() {
		const favors = document.querySelector('.favors');
		const favor = document.querySelectorAll('.favors > li');
		if (item.dataset.favo === "0") {
			if (favor.length === 0) {
				return;
			} else {
				const last = favors.lastChild;
				favors.removeChild(last);
				countFav -= 1;
				return;
			}
		}
		for (let i = 1; i <= item.dataset.favo; i++) {
			const favor = document.createElement('li');
			favors.appendChild(favor);
			countFav += 1;
			document.querySelector('.likes_icon').classList.add('HeartAnimation');
			setTimeout(() => {
				document.querySelector('.likes_icon').classList.remove('HeartAnimation');
			}, 600);
		}
	}

	function changeText() {
		const textarea = document.querySelector('.message_text');

		switch (item.dataset.text) {
			case 'ミートパイ':
				textarea.textContent = '昔、お母さんに作ってもらったなぁ。私は甘いパイの方が好きだったけど。';
				girl.src = girls[1];
				break;
			case '虹色ドリンク':
				textarea.textContent = 'あ！今流行ってる虹色ジュース！最近ずっと飲んでるの！今度一緒にいこーよ！';
				girl.src = girls[6];
				break;
			case 'おしるこ':
				textarea.textContent = 'おしるこ・・・？おばあちゃんが食べてたなぁ。';
				girl.src = girls[1];
				break;
			case '青色カレー':
				textarea.textContent = '私、それすっごい嫌いなの！！気持ちわる〜い！馬鹿にしないでっ！！！';
				girl.src = girls[3];
				break;
			case 'ポップコーン':
				textarea.textContent = '映画館といえばポップコーンよね！今度一緒に行かない？';
				girl.src = girls[6];
				break;
			case 'ドーナツ':
				textarea.textContent = 'ドーナツ、私だ〜〜〜い好きなの♡私の好み知ってた~？ウフフ！';
				girl.src = girls[7];
				break;
			case '縄跳びで遊ぶ':
				textarea.textContent = 'わっ！縄跳びだぁ♡...私は飛ぶために使わないんだけどね。今度教えてあげよっか？';
				girl.src = girls[7];
				break;
			case 'サッカーで遊ぶ':
				textarea.textContent = '昔はサッカー少年の方がタイプだったなぁ！そういう話、よくしたよね？';
				girl.src = girls[6];
				break;
			case 'テニスで遊ぶ':
				textarea.textContent = '中学の頃の友達はテニスをしてる人が多かったよ。今は何してるのかなぁ。';
				girl.src = girls[1];
				break;
			case '野球で遊ぶ':
				textarea.textContent = '野球をしている男子ってかっこいいよね。でも、髪の毛はロングの方が好きなの！';
				girl.src = girls[1];
				break;
			case 'スキーで遊ぶ':
				textarea.textContent = 'スキーにいい思い出がないんだよね。でも、もういちどリベンジしてみたいなぁ。';
				girl.src = girls[1];
				break;
			case '男の子のフィギュア':
				textarea.textContent = 'こういうの集める趣味はないんだけど、かわいい男の子ね。';
				girl.src = girls[1];
				break;
			case '高級バッグ':
				textarea.textContent = 'わ〜〜高級ブランドの最新作のバッグ！！きゃあ〜〜〜うれし〜い♡もっともっと貢いでよ〜♡';
				girl.src = girls[7];
				break;
			case 'アザラシストラップ':
				textarea.textContent = 'かわい〜い！お揃いにしよっか？';
				girl.src = girls[6];
				break;
			case '靴下':
				textarea.textContent = '何これ。心底興味ない。';
				girl.src = girls[5];
				break;
			}

		
	}
});