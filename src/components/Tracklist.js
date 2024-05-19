// import Track from './Track.js'

export default function Tracklist({ songs }){
    return (
      <table>
        <thead>
          <h1>Tracklist: </h1>
        </thead>
        <tbody>
          {songs.map(song => (
            <tr key={song.id}>
                <td>{song.name}</td>
                <td>{song.artist}</td>
                <td>{song.album}</td>
            </tr>
            ))}
        </tbody>
      </table>
    );
}

