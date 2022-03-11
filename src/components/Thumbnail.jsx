const Thumbnail = ({ urlImg, active }) => {
  return (
    <figure className={active}>
      <img className='img-fluid' src={urlImg} alt='sneaker thumbnail' />
    </figure>
  )
}
export default Thumbnail
