import React from "react";

const products = [
  {
    title: "HFA Valve for Inhaler",
    imageSrc: "/img/products/1.jpeg",
  },
  {
    title: "Actuators For Gels And Sprays",
    imageSrc: "/img/products/2.jpeg",
  },
  {
    title: "Plastic Tubes & Caps",
    imageSrc: "/img/products/3.jpeg",
  },
  {
    title: "Pharmaceutical Raw Materials",
    imageSrc: "/img/products/4.jpeg",
  },
  {
    title: "Asthma Inhalers",
    imageSrc: "/img/products/5.jpeg",
  },
  {
    title: "Insulin Pen",
    imageSrc: "/img/products/6.jpeg",
  },
  {
    title: "Glass Components",
    imageSrc: "/img/products/7.jpeg",
  },
];

const ProductCard = ({ title, imageSrc }) => {
  return (
    <div className="w-full max-w-[1140px] md:w-1/4 px-[20px] md:px-[10px] h-auto md:h-[250px] md:my-6 ">
      <div className="rounded-lg p-6">
        <img src={imageSrc} alt="Product" className=" w-full md:h-[180px] h-[200px] sm:h-[320px] mb-4 rounded-md" />
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
      <div className="max-w-[1140px] flex flex-wrap items-center justify-start  mx-auto">
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
