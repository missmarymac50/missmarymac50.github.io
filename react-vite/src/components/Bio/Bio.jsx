import { bio } from '../../data.json';

export default function Bio() {
  return (
    <>
      <h1>Biography</h1>
      {bio.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </>
  );
}
