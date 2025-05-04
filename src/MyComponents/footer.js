import React from 'react'

const Footer = () => {
  let footerstyle = {
    width: "100%",
    marginTop: "auto"
  };
  return (
    <footer className='bg-dark text-light py-3 text-center' style={footerstyle}>
      <p>Copyright &copy; 2025 Todos List</p>
      <p>All rights reserved</p>
      <p>Developed by <a href="https://usmananwar12.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Usman Anwar</a></p>
    </footer>
  )
}

export default Footer
