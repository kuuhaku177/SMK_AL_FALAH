import Accordion from 'react-bootstrap/Accordion';

const Accor = () => {
  return (
    <Accordion id="visi" defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header style={styles.header}><h1>VISI</h1></Accordion.Header>
        <Accordion.Body>
         <div> TERBENTUKNYA LULUSAN YANG BERIMAN, BERKARAKTER,CERDAS,</div>
         <div>KOMPETEN, SIAP BERWIRAUSAHA, DAN CINTA LINGKUNGAN </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header style={styles.header}><h1>MISI</h1></Accordion.Header>
        <Accordion.Body> 
          <p>  1. MENYELENGGARAKAN PENDIDIKAN YANG MENGIMPLEMASIKAN PEMBENTUKAN INSAN YANG BERIMAN DAN BERKARAKTER </p>
          <p>  2. MENYELENGGARAKAN PEMBELAJARAN YANG AKTIF, INOVATIF,KREATIF,EFEKTIF,EFISIEN,DAN MENYENANGKAN</p>
          <p>  3. MENYELENGGARAKAN PENDIDIKAN DAN PELATIHAN YANG SESUAI DENGAN BIDANG KEAHLIAN MASING-MASING UNTUK MEMENUHI KEBUTUHAN DUNIA USAHA/DUNIA INDUSTRI SERTA MENYIAPKAN KE JENJANG PENDIDIKAN TINGGI</p>
          <p>  4. MENYELENGGARAKAN PELATIHAN BERWIRAUSAHA DISEGALA BIDANG USAHA YANG SESUAI POTENSI YANG DIMILIKI SISWA</p>
          <p>  5. MENYELENGGARAKAN PENDIDIKAN YANG MENANAMKAN RASA CINTA TANAH AIR, BANGSA, BAHASA, BUDAYA, BERWAWASAN LINGKUNGAN, DAN MEMILIKI EMPATI YANG TINGGI</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

const styles = {
  header: {
    textAlign: 'center',
  },
};

export default Accor;