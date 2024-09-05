import { OrgCard } from "./OrgCard";

const mockedOrgs = [
  {
    id: "1",
    name: "Neurolink",
    description: "chips for brains",
    imageUrl:
      "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
  },
  {
    id: "2",
    name: "SpaceX",
    description: "cosmo ships",
    imageUrl:
      "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
  },
  {
    id: "3",
    name: "Neurolink",
    description: "chips for brains",
    imageUrl:
      "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
  },
  {
    id: "4",
    name: "SpaceX",
    description: "cosmo ships",
    imageUrl:
      "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
  },
  {
    id: "5",
    name: "Neurolink",
    description: "chips for brains",
    imageUrl:
      "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
  },
  {
    id: "6",
    name: "SpaceX",
    description: "cosmo ships",
    imageUrl:
      "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
  },

  {
    id: "7",
    name: "Neurolink",
    description: "chips for brains",
    imageUrl:
      "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
  },
  {
    id: "8",
    name: "SpaceX",
    description: "cosmo ships",
    imageUrl:
      "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
  },
];

export function OrgList() {
  return (
    <section className="flex flex-col gap-y-8 px-8">
      {mockedOrgs.map(({ id, ...org }) => (
        <OrgCard {...org} key={id} />
      ))}
    </section>
  );
}
