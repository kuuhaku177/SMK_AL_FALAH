import Card from 'react-bootstrap/Card';

const Cardjurusan = (props)=>{
    return (
    <>
      <Card id="jurusan">
        <Card.Img variant="Bottom" src={props.image} />
        <Card.Body>
          <Card.Text>
            <h1>BISNIS DARING DAN PEMASARAN</h1>
            <p>Bisnis Daring dan Pemasaran mempersiapkan siswa untuk mengelola bisnis di era digital. Mereka mempelajari pemasaran online, manajemen bisnis, dan teknologi informasi untuk sukses dalam ekonomi digital saat ini.</p>
          </Card.Text>
        </Card.Body>
      </Card>
     </>
  )
}
export default Cardjurusan;