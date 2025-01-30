import { galleryURLs } from '../../data.json';
import './Gallery.css';

export default function Gallery() {
  return (
    <>
      <h1>Gallery</h1>
      <div className='gallery-wrapper'>
        {galleryURLs.map((url, i) => (
          <img src={url} key={i} className='gallery-image' />
        ))}
      </div>
      <footer className='photos-credit'>Photos by Joe Mazza</footer>
    </>
  );
}
