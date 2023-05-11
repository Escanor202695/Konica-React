import React, { useEffect } from "react";
import Footer from "../Footer";
import Contact from "../Contact";
import ServiceHeader from "./ServiceHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";



function ProductCategory() {
  const [activeIndex, setActiveIndex] = useState(null);

  const arrayCategory = [
    {
      name: "Active Pharmaceutical Ingredients (API)",
      products : [
        'Adenosine',
        'Almotriptan Malate',
        'Alogliptin Benzoate',
        'Ambroxol HCl',
        'Amlodipine Besilate BP/EP',
        'Ammonium Lactate',
        'Amoxicillin Sodium Sterile BP/EP/USP',
        'Ampicillin Sodium + Sulbactam Sodium (2:1)',
        'Apixaban',
        'Aprepitant',
        'Artesunate Sterile',
        'Bendamustine HCl',
        'Bisoprolol Fumarate',
        'Brimonidine Tartrate',
        'Bromhexine HCl BP',
        'Calcium Carbonate Heavy BP',
        'Calcium Chloride Dihydrate',
        'Calcium Citrate USP',
        'Calcium Gluconate',
        'Calcium Lactate Gluconate',
        'Calcium Lactate Pentahydrate',
        'Canagliflozin Hemihydrate',
        'Carmellose Sodium BP',
        'Carvedilol',
        'Cefepime HCl With Arginine Sterile USP',
        'Cefotaxime Sodium Sterile USP',
        'Ceftaroline Fosamil- Sterile Lyophilized',
        'Ceftibuten Dihydrate Micronized USP',
        'Ceftiofur Sodium USP',
        'Ceftriaxon Sodium + Sulbactam Sodium (2:1)',
        'Ceftriaxon Sodium + Tazobactam Sodium (8:1)',
        'Cetirizine  Di Hydrochloride BP/EP',
        'Chloramphenicol EP/BP',
        'Choline Alfoscerate',
        'Chondroitin Sulphate Sodium USP',
        'Ciclesonide USP',
        'Ciprofloxacin Hcl USP',
        'Cloxacillin Sodium Sterile BP/USP/EP',
        'Dapagliflozin',
        'Dapagliflozin Propanediol Monohydrate',
        'Dapoxetine HCl',
        'Desloratadine',
        'Desogestrel',
        'D-Glucosamine HCl',
        'Dicloxacillin Sodium Sterile',
        'Diosmin Micronized',
        'Dl – Methionine BP/EP',
        'Docusate Sodium USP',
        'Droitin Sulphate Sodium USP',
        'Empagliflozin',
        'Esomeprazole Sodium (Sterile) BP/EP/USP',
        'Flucloxacillin Sodium Sterile BP/EP/USP',
        'Fluconazole',
        'Fluvastatin Sodium USP',
        'Hesperidin',
        'Ipragliflozin',
        'Ipragliflozin L-Proline',
        'Ipratropium Bromide',
        'Iron (Ill) Hydroxide Polymaltose Complex',
        'Iron Sucrose Solution',
        'Ivabradine Hydrochloride',
        'Ketoprofen USP (Injectable Grade)',
        'Ketorolac TromethamineBP/EP/USP',
        'L-Arginine Sterile',
        'Ledipasvir',
        "Ledipasvir Acetone Solvate",
        "Levocarnitine USP",
        "Levodopa",
        "Levonorgestrel",
        "Linagliptin",
        "L-Lactic Acid",
        "Lynestrenol",
        "Lysine Hydrochloride",
        "Magnesium Chloride Hexahydrate BP",
        "Mannitol Sterile",
        "Mecobalamin",
        "Meglumine",
        "Meropenem With Sodium Carbonate BP/EP/USP",
        "Miconazole Nitrate USP",
        "Milrinone Lactate",
        "Moxifloxacin Hcl EP",
        "Mupirocin USP",
        "N-Acetyl-L-Cysteine",
        "Natamycin (Sterile & Micronized) USP",
        "Nebivolol HCl",
        "Neostigmine Metilsulfate",
        "Nepafenac",
        "Nitroxynil (Vet) USP",
        "Nystatin",
        "Ofloxacin HCl USP",
        "Olmesartan Medoxomil EP",
        "Omeprazole Sodium (Sterile) BP/EP/USP",
        "Ondansetron HCl",
        "Ornidazole",
        "Oxacillin Sodium Sterile",
        "Oxytetracycline Dihydrate Injectable USP",
        "Pantoprazole Sodium (Sterile) BP/EP/USP",
        "Penicillin V Potassium",
        "Phenylephrine Hydrochloride USP",
        "Phenytoin Base USP",
        "Phenytoin Sodium EP/BP",
        "Pirfenidone",
        "Pitavastatin Calcium",
        "Polymyxin B Sulfate USP",
        "Potassium Chloride BP",
        "Pregabalin",
        "Prilocaine Base",
        "Pyrantel Pamoate",
        "Rabeprazole Sodium (Sterile) BP/EP/USP",
        "Risperidone EP",
        "Rivaroxaban",
        "Rizatriptan Benzoate",
        "Rosuvastatin Calcium",
        "Salicylic Acid BP",
        "Saxagliptin Hydrochloride",
        "Sitagliptin Phosphate (Monohydrate)",
        "Sodium Cabonate Sterile",
        "Sodium Carbonate Anhydrous",
        "Sodium Lactate Solution",
        "Sofosbuvir",
        "Spectinomycin HCl Sterile",
        "Sucralose Micronized Powder",
        "Sulindac BP",
        "Tapentadol HCl",
        "Temocapril Hydrochloride",
        "Tenoxicam BP/EP",
        "Tetracaine HCl",
        "Tetramisole HCl BP",
        "Ticagrelor",
        "Tiemonium Methyl Sulphate",
        "Tranexamic Acid USP",
        "Trelagliptin",
        "Valsartan USP",
        "Vildagliptin",
        "Zinc Gluconate",
        "Zoledronic Acid"
      ],
    },
    {
      name: "Intermediates",
      products : [
        "6 APA",
        "(1R,2R)-2-Aminocyclohexanol",
        "(1R,2S)-cis-1-Amino-2-indanol",
        "(1S,2R)-cis-1-Amino-2-indanol",
        "(1S,2S)-2-Aminocyclohexanol",
        "(2-Methylpropyl)boronic acid",
        "(R)-(+)-2-Methyl-2-propanesulfinamide",
        "(R)-2-methyl-CBS-oxazaborolidine",
        "(S)-(-)-2-Methyl-2-propanesulfinamide",
        "(S)-2-methyl-CBS-oxazaborolidine",
        "2-Isopropenyl-4,4,5,5-tetramethyl-1,3,2-dioxaborolane (Isopropenylboronic acid pinacol ester)",
        "3,6-Dihydro-2H-pyridine-1-N-Boc-4-boronic acid pinacol ester",
        "4-(4,4,5,5-Tetramethyl-1,3,2-dioxaborolan-2-yl)aniline(4-Aminophenylboronic acid pinacol ester)",
        "Bis (pinacolato) diboron",
        "Bis(neopentyl glycolato)diboron",
        "Cyclopropylboronic acid",
        "Glycine tert-butyl ester",
        "Methylboronic acid",
        "Potassium vinyltrifluoroborate",
        "Potassium(bromomethyl)trifluoroborate",
        "Sodium-2-Ethyl Hexanoate",
        "Tetrahydroxydiboron"
      ]
      
    },
    {
      name: "Excipients",
      products : [
        "Cellulose",
        "Calcium Carboxy Methyl Cellulose",
        "Cross Carmellose Sodium USP",
        "Sodium Carboxy Methyl Cellulose",
        "Colchicine USP",
        "Garcinia Cambogia",
        "Glucosamine Salts",
        "Glycofurol",
        "Thiocolchicoside",
        "Yohimbine Zeaxanthin",
        "Cod Liver Oil",
        "Croscarmellose Sodium",
        "Microcrystalline Cellulose – USP/BP/EP (Ph 101, 102, 200 Etc.)",
      ]
      
    },
    {
      name: "Herbal Extracts",
      products : [
        "Ginseng Extract",
        "Flax Seed Oil",
        "Evening Primrose Oil",
        "Spirulina Powder",
        "Eucalyptol Oil",
        "Anise Seed Oil",
        "Sesame Oil",
        "Jojoba Oil",
        "Lavender Oil (Perfume)",
        "Pumpkin Seed Oil",
        "Fenugreek Saponins 50%",
        "Echinacea Extract 4%",
        "Black Cohosh Extract 2.5%",
        "Gamma Tocopherol",
        "Red Clover Extract 8%",
        "Tylosin 20%",
        "Inositol",
        "Nonsedating herbal cough",
        "Garlic Oil",
        "Co-Enzyme Q 10",
        "Ashwagandha Extract 10%",
        "Valerian Root Extract 0.8%"
      ]
      
    },
    {
      name: "Dairy Ingredients",
      products : [
        'Skimmed Milk Powder (SMP)',
        'Full Cream Milk Powder (FCMP)',
        'Cream Powder (CP)',
        'Whey Protein Concentrate (WPC)',
        'Lactose',
        'Milk Protein Concentrate (MPC)',
        'Milk Calcium (MC)'
      ]
      
    },
  ];

  return (
    <div className="bg-lightGray">
      <div className="max-w-[1140px] mx-auto ">
        <div className="divide-y divide-gray-200">
          {arrayCategory.map((item, index) => (
            <div className="">
              <div
                key={index}
                className={`pt-4 px-4  bg-white border-b-[.5px] overflow-hidden`}
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                <button
                  type="button"
                  className="flex justify-between items-center w-full text-left"
                >
                  <span
                    className={`text-lg md:text-lg font-medium capitalize ${
                      activeIndex === index
                        ? "text-themeGreen"
                        : "text-themeBlue"
                    }`}
                  >
                    {item.name}
                  </span>
                  <KeyboardArrowUpIcon
                    className={`w-6 h-6 transform transition-transform ${
                      activeIndex === index
                        ? "rotate-180 text-themeGreen"
                        : "text-themeBlue"
                    }`}
                  />
                </button>
                <div
                  className={`mt-4 gap-x-[100px] transition-all ease-in-out duration-[500ms] text-left ml-4 ${
                    activeIndex === index
                      ? "max-h-auto"
                      : "max-h-0 overflow-hidden"
                  }`}
                >
                  <ul className="pb-[20px] flex flex-wrap ">
                    {item.products.map((i, idx) => (
                      <li className="text-md text-gray-700 py-[6px] mb-0 md:ml-4 min-w-[80%] md:min-w-[45%] ">
                        <CheckIcon className="mr-2 text-themeGreen"/>
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
function Raw() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ServiceHeader />
      <div className="relative z-40 ">
        <img
          src="/img/about.jpg"
          alt="heroImage"
          className="w-full h-full absolute top-0 left-0 -z-20 object-cover"
        />
        <div className="w-screen relative -z-10 bg-gradient-to-t from-black to-themeBlue opacity-90  md:px-0 ">
          <div className="max-w-[1140px] h-[400px] flex flex-col md:flex-row items-center justify-center md:justify-between  mx-auto w-full  px-[20px] md:px-0"></div>
        </div>
        <div className="custom-shape-divider-bottom-1683382367">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      {/**raw-material */}
      <div className="w-screen py-[60px] md:py-[120px]" id="about">
        <h2 className="text-[3rem] font-semibold text-themeBlue text-center mb-[50px] ">
          <span className="line">Raw Material</span>
        </h2>
        <div className="max-w-[70rem] mx-auto  flex flex-col-reverse md:flex-row ">
          <div className="w-full  lg:ml-[30px] flex-col px-[20px]">
            <p className="mb-[30px] mt-[10px] md:mt-0 text-center">
              <span className="font-semibold text-themeGreen">
                Konica Corporation Limited
              </span>{" "}
              believes that we are successful only when our customer and
              suppliers are successful. We will realize this mission by setting
              the highest standards in service. ASN’s sales team is fully
              conversant with the related industries. The team is capable to
              understand customers’ requirement and offer the best possible
              solution by ensuring quality and service
              <br /> <br />
              <ProductCategory />
            </p>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}

export default Raw;
