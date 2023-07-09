import React from 'react';
import image from '../../assets/admin/assets/img/coffee-img.jpg'
import image2 from '../../assets/admin/assets/img/coffee-sell.jpg'
import "../../components/admin/dashboard.css"
function Dashboard() {
    return (
        <div >
            {/* <h1>this is dashboard</h1> */}
            <div className='mystyle'>


                <div className='mystyle2'>

                    <img src={image} alt='img' className='imgedit' />
                </div>
                <div>

                    <img src={image2} alt='img' className='imgedit' />
                </div>
                <div>
                    <img src={image} alt='img' className='imgedit' />
                </div>

                <div>
                    <img src={image} alt='img' className='imgedit' />
                </div>
                <div>

                    <img src={image} alt='img' className='imgedit' />
                </div>
                <div>

                    <img src={image} alt='img' className='imgedit' />
                </div>
                <div>
                    <img src={image} alt='img' className='imgedit' />
                </div>

                <div>
                    <img src={image} alt='img' className='imgedit' />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
