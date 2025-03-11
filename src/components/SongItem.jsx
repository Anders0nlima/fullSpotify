import React from 'react'
import { Link } from 'react-router-dom'

const SongItem = ({ image, name, duration, artist, audio, _id, index }) => {
  return (
    <Link to={`/song/${_id}`} className='song-item'>
        <div className='song-item__number-album'>
        <p>{index + 1}</p>

        <div className='song-item__album'>
        <img 
        src={image} 
        alt={`Image da Música ${name}`} 
        className='song-item__image'
        />

        <p className='song-item'>{name}</p>
        </div>
        </div>
        <p>{duration}</p>
    </Link>
  )
}

export default SongItem