const categories = [
  "Traditional Wear",
  "Western Wear",
  "Swim & Beachwear",
  "Winter & Seasonal Wear",
  "Beauty & Grooming",
  "Jewellery",
  "Personal care Appliances",
  "International Brands",
  "Foot Wear",
  "Watches",
  "Accessories",
];

const CategorySidebar = () => (
  <div className="w-1/5 p-4 bg-white shadow-sm space-y-2">
    {categories.map((cat, i) => (
      <div
        key={i}
        className="border-b py-2 text-sm font-medium cursor-pointer hover:text-blue-500">
        {cat}
      </div>
    ))}
  </div>
);

export default CategorySidebar;
