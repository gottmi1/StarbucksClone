let tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  new YT.Player("player", {
    height: "360",
    width: "640",
    videoId: "An6LvWQuj_8",
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: "An6LvWQuj_8",
    },
    events: {
      onReady: (e) => {
        // 영상 재생 준비가 되었을 때 소리를 mute해준다
        e.target.mute();
      },
    },
  });
}
