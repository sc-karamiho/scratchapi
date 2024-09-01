// ユーザー名を指定
const username = 'da-wa';

// APIのエンドポイント
const apiUrl = `https://api.scratch.mit.edu/users/${username}`;

// fetch APIを使ってデータを取得
fetch(apiUrl)
  .then(response => response.json())  // レスポンスをJSON形式に変換
  .then(data => {
    // 取得したデータをコンソールに表示
    console.log('ユーザー名:', data.username);
    console.log('ユーザーID:', data.id);
    console.log('自己紹介:', data.profile.bio);
    console.log('国:', data.profile.country);
    console.log('ステータス:', data.profile.status);
    console.log('プロファイル画像URL:', data.profile.images['90x90']);
  })
  .catch(error => {
    console.error('エラーが発生しました:', error);
  });
