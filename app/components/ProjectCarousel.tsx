interface ProjectCarouselProp {
  children?: any
}

const ProjectCarousel = ({ children }: ProjectCarouselProp) => {
  return (
    <div className='flex px-8 gap-2 items-center
      md:h-96 max-md:flex-col'>
      {children}
    </div>
  )
}

export default ProjectCarousel;