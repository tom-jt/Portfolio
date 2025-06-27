import { NavBar, PageType } from "./NavBar";

interface PageProp {
  activePage: PageType
  children?: any
}

const Page = ({ activePage, children }: PageProp) => {
  return (
    <main className='flex flex-col w-full md:flex-row'>
      <NavBar active={activePage} />
      
      <div className='w-full h-full'>{children}</div>

      {/* Mobile viewport space for NavBar */}
      <div className='max-md:min-h-20' />
    </main>
  );
}

export default Page;