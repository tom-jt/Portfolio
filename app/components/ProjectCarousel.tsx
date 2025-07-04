import ProjectFrame from "./ProjectFrame";

interface ProjectCarouselProp {
  projectIds: string[]
}

const ProjectCarousel = ({ projectIds }: ProjectCarouselProp) => {
  return (
    <div className='flex px-8 gap-2 items-center
      md:h-96 max-md:flex-col max-md:px-2'>
      {
        projectIds.map((id, i) => (
          <ProjectFrame id={id} key={i} />
        ))
      }
    </div>
  )
}

export default ProjectCarousel;