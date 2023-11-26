import "../css/StorySlide.css";
import img from "/images/Food.png";
import PropTypes from "prop-types";

function StorySlide({ onClose }) {
  return (
    <div className='Ssmain'>
      <div
        className='storyDiv'
        style={{
          background: `url(${img}), lightgray -67.777px 0px / 139.986% 100% no-repeat`,
        }}
      >
        {/* <img
          src={img}
          alt='!!'
        /> */}
        {/* x */}
        <svg
          onClick={onClose}
          className='crossbtn'
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'>
          <g clipPath='url(#clip0_1063_880)'>
            <path
              d='M17 17L-1 -1M17 -1L-1 17'
              stroke='white'
              strokeWidth='2'
              strokeLinecap='round'
            />
          </g>
          <defs>
            <clipPath id='clip0_1063_880'>
              <rect
                width='16'
                height='16'
                fill='white'
              />
            </clipPath>
          </defs>
        </svg>

        {/* send btn */}
        <svg
          className='sendBtn'
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'>
          <path
            d='M9.99958 14L20.9996 3M9.99958 14L13.4996 21C13.5435 21.0957 13.6139 21.1769 13.7025 21.2338C13.7912 21.2906 13.8943 21.3209 13.9996 21.3209C14.1049 21.3209 14.208 21.2906 14.2966 21.2338C14.3853 21.1769 14.4557 21.0957 14.4996 21L20.9996 3M9.99958 14L2.99958 10.5C2.90384 10.4561 2.82271 10.3857 2.76583 10.2971C2.70895 10.2084 2.67871 10.1053 2.67871 10C2.67871 9.89468 2.70895 9.79158 2.76583 9.70295C2.82271 9.61431 2.90384 9.54387 2.99958 9.5L20.9996 3'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>

        {/* heading + about */}
        <div className='bottomdivSsmain'>
          <h2>Heading comes here</h2>
          <p>
            Inspirational designs, illustrations, and graphic elements from the
            world’s best designers.
          </p>
          <div className='bottomsvgs'>
            {/* save btn */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='25'
              viewBox='0 0 20 25'
              fill='none'>
              <path
                d='M19.1795 24.5071L9.58974 17.3148L0 24.5071V0H19.1795V24.5071Z'
                fill='white'
              />
            </svg>

            {/* like btn */}
            <div className='likebtndiv'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='29'
                height='27'
                viewBox='0 0 29 27'
                fill='none'>
                <path
                  d='M14.207 26.0699L12.147 24.1946C4.83039 17.5599 0 13.1699 0 7.81387C0 3.42389 3.4381 0 7.81386 0C10.2859 0 12.6585 1.15077 14.207 2.95506C15.7556 1.15077 18.1282 0 20.6002 0C24.976 0 28.4141 3.42389 28.4141 7.81387C28.4141 13.1699 23.5837 17.5599 16.267 24.1946L14.207 26.0699Z'
                  fill='white'
                />
              </svg>
              <p>1280</p>
            </div>
          </div>
        </div>
        <div className='stylediv'></div>
      </div>
    </div>
  );
}

StorySlide.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default StorySlide;
