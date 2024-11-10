sendEmail=()=>{
    var link = "mailto:6tuningpegs@gmail.com"
             + "?cc="+encodeURIComponent(document.getElementById( 'emailIn' ).value)
             + "&subject=" + encodeURIComponent(document.getElementById( 'subjectIn' ).value)
             + "&body=from:" + encodeURIComponent(document.getElementById('nameIn').value) 
             + ": " + encodeURIComponent(document.getElementById('contentIn').value)
    ;
    window.location.href = link;
}

const setUp=()=>{
    shuffle( vids );
    let videosText = '';
    for( vid of vids ){
        videosText += `<div class="w3-col l3 m6 w3-margin-bottom">
        <div class="w3-display-container">
          <iframe src="https://www.youtube.com/embed/${vid.url.split( '?v=' )[1]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>`;
    }
    document.getElementById( 'videosOut' ).innerHTML=videosText;
}

const shuffle=(array)=>{
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
}

setUp();