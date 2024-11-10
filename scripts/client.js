sendEmail=()=>{
    const objectToSend = {
        name: document.getElementById( 'nameIn' ).value,
        email: document.getElementById( 'emailIn' ).value,
        subject: document.getElementById( 'subjectIn' ).value,
        content: document.getElementById( 'contentIn' ).value
    }
    console.log( 'email:', objectToSend );
}

const setUp=()=>{
    let videosText = ` <div class="w3-col l3 m6 w3-margin-bottom">
      <a href="http://google.com"><div class="w3-display-container">
        <div class="w3-display-topleft w3-black w3-padding">Summer House</div>
        <img src="https://www.w3schools.com/w3images/house5.jpg" alt="House" style="width:100%">
      </div></a>
    </div>
    <div class="w3-col l3 m6 w3-margin-bottom">
      <div class="w3-display-container">
        <div class="w3-display-topleft w3-black w3-padding">Brick House</div>
        <img src="https://www.w3schools.com/w3images/house2.jpg" alt="House" style="width:100%">
      </div>
    </div>
    <div class="w3-col l3 m6 w3-margin-bottom">
      <div class="w3-display-container">
        <div class="w3-display-topleft w3-black w3-padding">Renovated</div>
        <img src="https://www.w3schools.com/w3images/house3.jpg" alt="House" style="width:100%">
      </div>
    </div>
    <div class="w3-col l3 m6 w3-margin-bottom">
      <div class="w3-display-container">
        <div class="w3-display-topleft w3-black w3-padding">Barn House</div>
        <img src="https://www.w3schools.com/w3images/house4.jpg" alt="House" style="width:100%">
      </div>
    </div>
    <div class="w3-col l3 m6 w3-margin-bottom">
      <div class="w3-display-container">
        <div class="w3-display-topleft w3-black w3-padding">Renovated</div>
        <img src="https://www.w3schools.com/w3images/house3.jpg" alt="House" style="width:100%">
      </div>
    </div>
    <div class="w3-col l3 m6 w3-margin-bottom">
      <div class="w3-display-container">
        <div class="w3-display-topleft w3-black w3-padding">Barn House</div>
        <img src="https://www.w3schools.com/w3images/house4.jpg" alt="House" style="width:100%">
      </div>
    </div>`;
    document.getElementById( 'videosOut' ).innerHTML=videosText;
}

setUp();