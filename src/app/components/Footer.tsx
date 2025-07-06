export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#f1f1f1',
      textAlign: 'center',
      padding: '1rem',
      marginTop: '2rem',
      borderTop: '1px solid #ddd'
    }}>
      <p>&copy; {new Date().getFullYear()} Wanderlust Travels. All rights reserved.</p>
      <p style={{ fontSize: '0.9rem' }}>
        <a href="/privacy" style={{ marginRight: '15px' }}>Privacy Policy</a>
        <a href="/terms">Terms & Conditions</a>
      </p>
    </footer>
  );
}
