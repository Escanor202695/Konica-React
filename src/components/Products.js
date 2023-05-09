import React from "react";

const products = [
  {
    title: "Product 1",
    imageSrc: "/img/about.jpg",
  },
  {
    title: "Product 1",
    imageSrc: "/img/about.jpg",
  },
  {
    title: "Product 1",
    imageSrc: "/img/about.jpg",
  },
  {
    title: "Product 1",
    imageSrc: "/img/about.jpg",
  },
  {
    title: "Product 1",
    imageSrc: "/img/about.jpg",
  },
  {
    title: "Product 1",
    imageSrc: "/img/about.jpg",
  },
  {
    title: "Product 1",
    imageSrc: "/img/about.jpg",
  },
];

const ProductCard = ({ title, imageSrc }) => {
  return (
    <div className="w-full max-w-[1140px] md:w-1/4 px-[20px] md:px-[10px] ">
      <div className="rounded-lg p-6">
        <img src={imageSrc} alt="Product" className="w-full h-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-themeBlue">{title}</h3>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div className="py-[100px] w-screen" id="products">
      <h2 className="text-[3rem] font-semibold text-themeBlue text-center mb-[50px]">
      <span className="line">Products</span>
      </h2>
      <div className="max-w-[1140px] flex flex-wrap items-center justify-start mx-auto">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            imageSrc={product.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
