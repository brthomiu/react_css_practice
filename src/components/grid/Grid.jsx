import React from 'react'
import './grid.css'
import img1 from '../../assets/test.png'

const Grid = () => {
  return (
    <section id='image__grid'>

        <div className="image__grid-container">
            <div className="image__grid-box">
                <img src={img1} alt="test" className="image__grid-img" />
            </div>

            <div className="image__grid-box">
                <img src={img1} alt="test" className="image__grid-img" />
            </div>

            <div className="image__grid-box">
                <img src={img1} alt="test" className="image__grid-img" />
            </div>

            <div className="image__grid-box">
                <img src={img1} alt="test" className="image__grid-img" />
            </div>

            <div className="image__grid-box">
                <img src={img1} alt="test" className="image__grid-img" />
            </div>

            <div className="image__grid-box">
                <img src={img1} alt="test" className="image__grid-img" />
            </div>

            <div className="image__grid-box">
                <img src={img1} alt="test" className="image__grid-img" />
            </div>

            <div className="image__grid-box">
                <img src={img1} alt="test" className="image__grid-img" />
            </div>
        </div>

    </section>
  )
}

export default Grid