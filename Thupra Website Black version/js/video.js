var vids=$("video");$.each(vids,function(){this.controls=!1}),$("video").click(function(){this.paused&&this.play()});