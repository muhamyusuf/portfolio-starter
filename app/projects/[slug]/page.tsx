import './mdx.css';

export const revalidate = 60;

export default function ProjectPage({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>;
}
