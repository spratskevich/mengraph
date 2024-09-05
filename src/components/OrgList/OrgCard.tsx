interface OrgCardProps {
  name: string;
  imageUrl: string;
  description: string;
}

export function OrgCard({ name, imageUrl, description }: OrgCardProps) {
  return (
    <section className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={imageUrl} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </section>
  );
}
