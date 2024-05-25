function Card() {
  return (
    <div className='p-4 m-4 pt-2 w-fit shadow-custom rounded-[1.25rem] flex flex-col gap-4'>
      {/* Title */}
      <div className='flex items-center gap-[9px]'>
        <div className='h-12 w-12'>
          <img
            className='w-full h-full object-cover'
            src='images/household-solar.png'
            alt=''
          />
        </div>
        <h5 className='font-semibold text-4 leading-base'>
          Households Using Solar
        </h5>
      </div>
      {/* Info */}
      <div className='flex justify-between items-center'>
        <div className='text-3xl leading-[2.125rem] font-semibold tracking-[-2%]'>
          850/900
        </div>
        <div className='font-semibold'>96%</div>
      </div>
    </div>
  );
}

export default Card;
