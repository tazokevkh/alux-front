import React from 'react'

interface IProjectCardProps {
image: string;
headerText?: string;
descriptionText?: string;
hasArrow?: boolean
}

const ProjectCardItem = ({image, headerText, descriptionText, hasArrow}: IProjectCardProps) => {
    return (
        <div>
            <img src={image} alt="project image" className='w-full aspect-square rounded-[20px]'/>
            <div className='flex justify-between items-center'>
                <div className='w-full max-w-[540px]'>
                    <h1 className='text-[20px] md:text-[28px] leading-[20px] md:leading-[40px] font-[avenirBold] text-textBlack mt-5 mb-3'>{headerText}</h1>
                    <p className='text-base font-[avenirBook] text-textGrey opacity-70'>{descriptionText}</p>
                </div>
                {hasArrow && 
                    <div className='rounded-full bg-bg_yellow min-w-[64px] max-w-[64px] max-h-[64px] min-h-[64px] flex justify-center items-center'>
                        <img src="/icons/arrow.svg" alt="arrow" className='m-[22px]'/>
                    </div>
                }
            </div>
        </div>
    )
}

export default ProjectCardItem