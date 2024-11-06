const Footer = () => {
  return (
    <div className='footer'>
      <div className='firstLineContainer'>
        <div className='followUs'>
          <h2 className='textLogo'>AllNews</h2>
          <h2 className='folowText'>Síguenos en</h2>
        </div>
        <div className='links'>
          <a href="..."><img src="../../public/images/redes_sociales/facebook_2504903.png" alt="Facebbok" className='imgFooter' /></a>
          <a href="..."><img src="../../public/images/redes_sociales/instagram_2111463.png" alt="Instagram" className='imgFooter' /></a>
          <a href="..."><img src="../../public/images/redes_sociales/linkedin_3536505.png" alt="Linkedin" className='imgFooter' /></a>
          <a href="..."><img src="../../public/images/redes_sociales/twitter_2504947.png" alt="Twitter" className='imgFooter' /></a>
          <a href="..."><img src="../../public/images/redes_sociales/youtube_3938037.png" alt="Youtube" className='imgFooter' /></a>
        </div>
      </div>
      <hr />
      <div className="seconLineContainer">
        <div className='textSecondLine'>Términos de Uso</div>
        <div className='textSecondLine'>AllNews no es responsable de la información de sitios externos</div>
        <div className='textSecondLine'><small>Todos los Derechos Reservados</small></div>
      </div>
    </div>
  )
}

export default Footer
