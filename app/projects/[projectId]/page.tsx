async function Home({ params }: {
  params: Promise<{ projectId: string }>
}) {
  const projectId = (await params).projectId;
  return (
    <main>
      Project: {projectId}
    </main>
  );
};

export default Home;