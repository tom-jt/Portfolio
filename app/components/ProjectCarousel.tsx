import ProjectFrame from "./ProjectFrame";

interface ProjectCarouselProp {
  projectIds: string[]
}

const ProjectCarousel = ({ projectIds }: ProjectCarouselProp) => {
  return (
    <div className='flex gap-2 items-center
      md:h-96 md:px-8 max-md:h-[48rem] max-md:flex-col'>
      {
        projectIds.map((id, i) => (
          <ProjectFrame id={id} key={i} />
        ))
      }
    </div>
  )
}

export default ProjectCarousel;