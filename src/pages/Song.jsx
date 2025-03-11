import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { songsArray } from '../assets/database/songs'
import { artistArray } from '../assets/database/artists'
import Player from '../components/Player'
Player


const Song = () => {
  //const { id } = useParams();
  
  //const {image, name, duration, artist, audio } = songsArray.filter(
  //  (currentSongObj) => currentSongObj.id === Number(id)
  //)[0];

  //const artistObj = artistArray.filter(
  //  (currentArtistObj) => currentArtistObj.name === artist
  //)[0].id;



  const { id } = useParams();

  const song = songsArray.find((currentSongObj) => currentSongObj._id === id);

  if (!song) {
    return <div>Música não encontrada</div>;
  }

  const { image, name, duration, artist, audio } = song;

  const artistObj = artistArray.find((currentArtistObj) => currentArtistObj.name === artist);

  if (!artistObj) {
    return <div>Artista não encontrado</div>;
  }

  
  const songsArrayFromArtist = songsArray.filter(
      (currentSongObj) => currentSongObj.artist === artistObj.name
  )

  const randomIndex = Math.floor(Math.random() * (songsArrayFromArtist.length - 1))

  const randomIndex2 = Math.floor(Math.random() * (songsArrayFromArtist.length - 1))

  const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id
  const randomId2FromArtist = songsArrayFromArtist[randomIndex2]._id


  return (
    <div className='song'>
      <div className="song__container">
        <div className="song__image-container">
        <img src={image} alt={`Imagem da música ${name}`} />
        </div>
      </div>

      <div className="song__bar">
        <Link to={`/artist/${artistObj._id}`} className='song__artist-image'>
          <img 
          width={75}
          height={75}
          src={artistObj.image} 
          alt={`Image do artista ${artist}`} />
        </Link>

        <Player 
        duration={duration} 
        randomIdFromArtist={randomIdFromArtist}
        randomId2FromArtist={randomId2FromArtist}
        audio={audio}
        />

        <div>
          <p className='song__name'>{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  )
}

export default Song