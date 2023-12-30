import './third.css'
import React from 'react'

function Third() {
    return (
        <div className='bg-lightmt-5'>
            <div className='container '>
                <div className='row'>
                    <div className='col-md-4 text-center mt-5'>
                        <i class="fa-solid fa-house"></i><br /><br />
                        <h5>Fully Responsive</h5>
                        <p>This Thems Will look Great on  any <br /> Device,no matter the Size!</p>
                    </div>
                    <div className=' colo col-md-4 text-center mt-5'>
                    <i class="fa-solid fa-address-card"></i><br /><br />
                        <h5>Bootstap 5 Ready</h5>
                        <p>This Thems Will look Great on  any <br /> Device,no matter the Size!</p>
                    </div>
                    <div className='col-md-4 text-center mt-5'>
                    <i class="fa-solid fa-gear"></i><br /><br />
                    <h5>Easy to Use</h5>
                        <p>This Thems Will look Great on  any <br /> Device,no matter the Size!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Third
