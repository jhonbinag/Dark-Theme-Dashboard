import React from 'react'

const MainRightTop = () => {
  return (
    <div className='topCard'>
        <div className='topCard_name'>
          <h2>Statistics</h2>
          <a href='/'>View more</a>
        </div>

        <div className='earnings'>
          <p className=''>Artwork Sold <span>187</span></p>
          <p className=''>Artwork Cancelled <span>5</span></p>
          <p className=''>Artwork Pending <span>25</span></p>
          <p className=''>Artwork Delivered <span>200</span></p>
          <p className=''>Total Earnings <span>262 ETH</span></p>
        </div>
    </div>
  )
}

export default MainRightTop