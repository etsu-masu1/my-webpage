// ハンバーガーメニューのアイコンをクリックしたときの処理
document.querySelector('.menu-icon').addEventListener('click', function() {
  // ハンバーガーメニューのコンテンツを表示する
  if(document.querySelector('.menu').style.display === 'block'){
    document.querySelector('.menu').style.display = 'none';
  }else{
    document.querySelector('.menu').style.display = 'block';
  }

  document.querySelector('.menu').style.opacity = 1;
});

// ハンバーガーメニューのコンテンツをクリックしたときの処理
document.querySelector('.menu').addEventListener('click', function(e) {
  // ハンバーガーメニューのコンテンツ以外の場所がクリックされたとき、コンテンツを非表示にする
  if (e.target.tagName === 'A') {
    document.querySelector('.menu').style.display = 'none';
  }
});