// プロジェクトIDを指定
// 取得したいプロジェクトのIDに置き換えてください
const projectId = '1056210236';  

// APIのエンドポイント
const projectUrl = `https://api.scratch.mit.edu/projects/${projectId}`;

// fetch APIを使ってプロジェクトデータを取得
fetch(projectUrl)
  .then(response => response.json())  // レスポンスをJSON形式に変換
  .then(project => {
    // プロジェクトの情報をコンソールに表示
    console.log('プロジェクトID:', project.id);
    console.log('タイトル:', project.title);
    console.log('説明:', project.description);
    console.log('ビュー数:', project.stats.views);
    console.log('いいね数:', project.stats.loves);
    console.log('お気に入り数:', project.stats.favorites);
    console.log('リミックス数:', project.stats.remixes);
    console.log('プロジェクトURL:', `https://scratch.mit.edu/projects/${project.id}`);
  })
  .catch(error => {
    console.error('エラーが発生しました:', error);
  });
