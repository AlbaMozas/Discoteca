
let albums = [];
let divAlbums$$ = document.querySelector(".albums");

// funcion que recoge los albums
const getAlbums = async () => {
  let response = await fetch("http://127.0.0.1:5001/albums");
  let res = await response.json();
  console.log(res);
  return res;  
};

//para cambiar la clase a los divs principales
// const turn = (event) => {
  
//   if(event.target.className === "album-card"){
//     console.log(event.target.className);
//   }
// };

// funcion que pinta los albums
const drawAlbums = (albums) => {
    divAlbums$$.innerHTML = "";
    for (const album of albums) {
      let albumDiv = document.createElement("div");
      albumDiv.className = "album-card";

      let albumFront = document.createElement("div");
      albumFront.className = "album-card-front";
  
      let albumTitle = document.createElement("h1");
      albumTitle.textContent = album.title;

      let albumArtist = document.createElement("h2");
      albumArtist.textContent = album.artist;

      let albumYear = document.createElement("h3");
      albumYear.textContent = album.year;

      let albumImg = document.createElement("img");
      albumImg.className = "imgCover";
      albumImg.src = album.imgCover;

      albumFront.appendChild(albumTitle);
      albumFront.appendChild(albumImg);
      albumFront.appendChild(albumArtist);
      albumFront.appendChild(albumYear);
      

      let listSongs$$ = document.createElement("div");
      listSongs$$.className = "listSongs";

      let arraySongs = album.songs;
      for (let index = 0; index < arraySongs.length; index++) {
        const song = arraySongs[index];

        let song$$ = document.createElement("div");
        song$$.className='song';        
        song$$.id = song._id;

        let songTitle=document.createElement("h2");
        songTitle.textContent=song.title;

        let songArtist=document.createElement("h4");
        songArtist.textContent=song.artist;

        let songStyle=document.createElement("h4");
        songStyle.textContent=song.style;

        let songYear=document.createElement("h4");
        songYear.textContent=song.Year;

        // añadimos a la canción el titulo, artista, estilo, año.
        song$$.appendChild(songTitle);
        song$$.appendChild(songArtist);
        song$$.appendChild(songStyle);
        song$$.appendChild(songYear);

        // añadimos a la lista la canción
        listSongs$$.appendChild(song$$);
      }
  
      albumDiv.appendChild(albumFront);
      albumDiv.appendChild(listSongs$$);
      
      
      // albumDiv.addEventListener("click", (event) => 
      // turn(event)
      // );

      divAlbums$$.appendChild(albumDiv);
    }
  };

const init = async () => {
    albums = await getAlbums();      
    drawAlbums(albums);  
    
  };

  
  
  init();
  
 