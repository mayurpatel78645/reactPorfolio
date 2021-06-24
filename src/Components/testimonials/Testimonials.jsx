import './testimonials.scss';

export default function Testimonials() {

  const data = [
    {
      id: 1,
      name: "Chris MacDonald",
      img: "assets/chris.jpg",
      overview: "Software Developer instructor at Manitoba Institute of Trades and Technology",
      url: "https://github.com/cmacmitt"
    },
    {
      id: 2,
      name: "Jessica Watson",
      img: "assets/jessica.jpg",
      overview: "Tech Educator at the Manitoba Institute of Trades and Technology",
      url: "https://github.com/Texxica",
      active: true,
    }
  ]
  return (
    <div className='testimonials' id='testimonials'>
      <h1>Testimonials</h1>
      <div className="container">
        {data.map(item => {
          return (
            <div key={item.id} className={item.active ? 'card active': 'card'} >
              <div className="top">
                <img src="assets/right-arrow.png" className='left' alt="arrow" />
                <img src={item.img} alt="instructor" className='user' />
                <a target='_blank' rel='noopener noreferrer' href={item.url}><img src="assets/github.svg" alt="" className='right' /></a>
              </div>
              <div className="center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsa fugiat commodi, itaque error sunt alias quo excepturi neque exercitationem.
              </div>
              <div className="bottom"></div>
                <h3>{item.name}</h3>
                <h4>{item.overview}</h4>
            </div>
          );
        })}
      </div>
    </div>
  )
}
