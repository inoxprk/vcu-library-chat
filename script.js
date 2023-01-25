var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'zk5fJ3Ld3O8',
    playerVars: {
      autoplay:1,
      loop:true,
      controls:0,
      playlist: 'zk5fJ3Ld3O8'
    },
    events: {
      onReady: function(event){
        event.target.mute()
      }
    }
  });
}