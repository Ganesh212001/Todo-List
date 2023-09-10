import React from 'react'

const Footer = () => {
  let footerStyle = {
    position: "absolute",
    top: "50",
    width: "100%",
    height: "60px"
  }
  return (
    <footer className='bg-dark text-light py3 footer' style={footerStyle}>
      <div className='fotter-div d-flex justify-content-between align-items-center'>
        <p className='mx-4 my-auto f-para'>Copyright &copy; MyTodoList.com</p>
        <p className='mx-4 my-auto f-para'>Developed By Ganesh Mahajan</p>
      </div>
    </footer>
  )
}

export default Footer
