import { categories } from '../assets/mockData';

export default function Categories() {
  return (
    <section className="py-16 px-6 bg-[#FDFBF7]">
      <h3 className="text-3xl font-serif text-center text-[#4A5D23] mb-10">Shop by Category</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {categories.map(cat => (
          <div key={cat.id} className="group cursor-pointer flex flex-col items-center">
            <div className="w-full aspect-[4/5] rounded-t-[40px] rounded-b-md overflow-hidden mb-4 border border-[#E8E2D2]">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <span className="font-serif text-lg text-[#5A5A5A] group-hover:text-[#E2725B]">{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}