import React from "react";

type Category = {
  name: string;
  href: string;
  img: string;
};

type CategoryCardProps = {
  categories: Category[];
};

const CategoryCard: React.FC<CategoryCardProps> = ({ categories }) => {
  return (
    <nav className="p-4">
      <ul className="flex space-x-4 overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-6 xl:grid-cols-auto scrollbar-custom">
        {categories.map((category, index) => (
          <div className="flex-shrink-0 w-28" key={index}>
            <li className="bg-woltColors-bgSurfaceSecondary bg-gradient-to-t rounded-lg shadow-md">
              <a
                href={category.href}
                className="flex flex-col items-center text-center p-2 transition-transform transform hover:scale-105"
              >
                <img
                  src={category.img}
                  alt={category.name}
                  className="w-10 h-10 object-contain mx-10 my-[26px]"
                />
              </a>
            </li>
            <h4 className="text-sm text-center font-semibold mt-2">
              {category.name}
            </h4>
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default CategoryCard;
