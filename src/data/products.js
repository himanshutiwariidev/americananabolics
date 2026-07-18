export const compoundCategories = {
  testosterone: {
    slug: "testosterone",
    title: "Testosterone Products",
    description:
      "Our testosterone product range includes Testosterone Enanthate, Testosterone Cypionate, and a Testosterone Mix Compound. While these products are based on testosterone, their ester composition and formulation differ. Explore individual product pages to compare available concentrations and specifications.",
  },
  nandrolone: {
    slug: "nandrolone",
    title: "Nandrolone Products",
    description:
      "AmericanAbolics currently features two nandrolone compounds: Nandrolone Decanoate and Nandrolone Phenylpropionate (NPP). Both are esterified forms of nandrolone, but their attached esters give them different pharmacokinetic characteristics.",
  },
};

export const products = [
  {
    id: 1,
    slug: "susta-can",
    name: "Susta Can",
    compound: "Testosterone Mix Compound",
    dose: "250 mg/ml",
    image: "1.png",
    hoverImage: "susta.jpeg",
    accent: "#c0392b",
    accentLight: "#FAECE7",
    accentText: "#993C1D",
    series: "Coral Series",
    category: "testosterone",
    description:
      "Susta Can is a Testosterone Mix Compound formulated at 250 mg/ml, combining multiple testosterone esters in a single injectable formulation.",
  },
  {
    id: 2,
    slug: "trene-can",
    name: "Trene Can",
    compound: "Trenbolone Enanthate",
    dose: "200 mg/ml",
    image: "2.png",
    hoverImage: "trene.jpeg",
    accent: "#7F77DD",
    accentLight: "#EEEDFE",
    accentText: "#3C3489",
    series: "Purple Series",
    category: "trenbolone",
    description:
      "Our product catalog includes Trenbolone Enanthate 200 mg/ml as Trene Can. This page provides detailed information about its active compound, concentration, and formulation.",
  },
  {
    id: 3,
    slug: "testo-can",
    name: "Testo Can",
    compound: "Testosterone Enanthate USP",
    dose: "250 mg/ml",
    image: "3.png",
    hoverImage: "testo.jpeg",
    accent: "#378ADD",
    accentLight: "#E6F1FB",
    accentText: "#0C447C",
    series: "Blue Series",
    category: "testosterone",
    description:
      "Testo Can contains Testosterone Enanthate USP at a concentration of 250 mg/ml, one of the longer-acting esterified forms of testosterone in our catalog.",
  },
  {
    id: 4,
    slug: "nandro-can",
    name: "Nandro Can",
    compound: "Nandrolone Phenylpropionate",
    dose: "100 mg/ml",
    image: "4.png",
    hoverImage: "nandro.jpeg",
    accent: "#1D9E75",
    accentLight: "#E1F5EE",
    accentText: "#0F6E56",
    series: "Teal Series",
    category: "nandrolone",
    description:
      "Nandro Can features Nandrolone Phenylpropionate (NPP) at 100 mg/ml, an esterified form of nandrolone with its own pharmacokinetic profile.",
  },
  {
    id: 5,
    slug: "deca-can",
    name: "Deca Can",
    compound: "Nandrolone Decanoate USP",
    dose: "250 mg/ml",
    image: "5.png",
    hoverImage: "deca.jpeg",
    accent: "#D85A30",
    accentLight: "#FAECE7",
    accentText: "#993C1D",
    series: "Coral Series",
    category: "nandrolone",
    description:
      "Deca Can contains Nandrolone Decanoate USP at 250 mg/ml, an esterified form of nandrolone with a distinct pharmacokinetic profile from NPP.",
  },
  {
    id: 6,
    slug: "cypo-can",
    name: "Cypo Can",
    compound: "Testosterone Cypionate USP",
    dose: "250 mg/ml",
    image: "6.png",
    hoverImage: "cypo.jpeg",
    accent: "#1D9E75",
    accentLight: "#E1F5EE",
    accentText: "#085041",
    series: "Teal Series",
    category: "testosterone",
    description:
      "Cypo Can contains Testosterone Cypionate USP at 250 mg/ml, an esterified form of testosterone with its own ester composition and formulation.",
  },
  {
    id: 7,
    slug: "bolda-can",
    name: "Bolda Can",
    compound: "Boldenone Undecylenate USP",
    dose: "250 mg/ml",
    image: "7.png",
    hoverImage: "bolda.jpeg",
    accent: "#BA7517",
    accentLight: "#FAEEDA",
    accentText: "#854F0B",
    series: "Amber Series",
    category: "boldenone",
    description:
      "Bolda Can contains Boldenone Undecylenate USP at 250 mg/ml. Explore this page for complete compound and product information.",
  },
];

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category) {
  return products.filter((product) => product.category === category);
}
