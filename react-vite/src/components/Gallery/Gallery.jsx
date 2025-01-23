import { galleryURLs } from '../../data.json';

export default function Gallery() {
  return (
    <>
      <h1>Gallery</h1>
      {galleryURLs.map((url, i) => (
        <img src={url} key={i} />
      ))}
    </>
  );
}
