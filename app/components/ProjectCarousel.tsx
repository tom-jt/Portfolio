interface ProjectCarouselProp {
  children?: any
}

const ProjectCarousel = ({ children }: ProjectCarouselProp) => {
  return (
    <div className='flex h-96 px-8 gap-2'>
      {children}
    </div>
  )
}

export default ProjectCarousel;