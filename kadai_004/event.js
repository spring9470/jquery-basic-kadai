$(function(){
  // 「loadイベントが発生しました」とコンソールに出力
  $(document).ready( () => {
    console.log('loadイベントが発生しました');
  });
  // scrollイベントが発生しました」とコンソールに出力
  $(window).on('scroll',() => {
    console.log('scrollイベントが発生しました');
  });
});