

export default function ProjectDetails({ params }: { params: { projectid: string } }) {
  return (
    <div>
      <h1>Details of Project {params.projectid}</h1>
    </div>
  );
}
