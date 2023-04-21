import { bannerQuery, productQuery } from "@/lib/Query";
import client from "@/lib/client";
import Product from "@/components/Product";
import { MdFilterList } from "react-icons/md";
import AccordionTitle from "@/components/AccordionTitle";
import Accordion from "@/components/Accordion";
import CategorieItems from "@/components/CategorieItems";
import { useEffect, useRef, useState } from "react";

export default function Home({ productData }) {
  const options = [
    { id: 1, name: "Populaire" },
    { id: 2, name: "Nouveauté" },
    { id: "9f7a0ab0-75c4-417e-ad89-18f2782a44cb", name: "Vivre frais" },
    { id: "60e4b314-472e-4043-b722-68ce8c280ff3", name: "Boucherie" },
    { id: "ffe8e562-be43-4e17-86ee-97c0cca2dd77", name: "Epices" },
  ];
  const [checkedList, setCheckedList] = useState(options);
  const [dataFiltered, setDataFiltered] = useState(productData);
  const [categoryName, setCategoryName] = useState("Tous les produits");
  const filterCategory = (id) => {
    if (id) {
      const newData = productData.filter((item) => {
        const itemData = item.categories[0]._ref === id;
        return itemData;
      });
      console.log(newData);

      setDataFiltered(newData);
      // } else {
      //   setFilterProduct(data);
      // }
    }
  };

  function uncheckAll(options) {
    return options.map((option) => ({
      ...option,
      checked: false,
    }));
  }

  function toggleOption(id, checked) {
    return options.map((option) =>
      option.id === id ? { ...option, checked } : option
    );
  }

  const accordionData = [
    {
      title: <AccordionTitle>Categorie</AccordionTitle>,
      content: (
        <CategorieItems
          setCheckedList={setCheckedList}
          checkedList={checkedList}
          options={options}
        />
      ),
    },

    {
      title: <AccordionTitle>Province</AccordionTitle>,
      content: "Vide",
    },
    {
      title: <AccordionTitle>Marché</AccordionTitle>,
      content: "Vide",
    },
    {
      title: <AccordionTitle>Marché</AccordionTitle>,
      content: "Vide",
    },
  ];


  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      const checked = checkedList.filter((item) => item.checked === true);
      console.log(dataFiltered);
    setCategoryName(checked[0].name);
      if (checked[0].id === 1 || checked[0].id === 2) {
        setDataFiltered(productData);
        console.log("Hello");
      } else {
        filterCategory(checked[0].id);
      }
    } else {
      didMount.current = true;
    }
  }, []);

  // console.log("Category", productData);
  return (
    <main className=" w-[90%] mx-auto flex flex-col lg:flex-row gap-6 mb-[100px] ">
      <div className=" w-[90%] mx-auto lg:mx-0 lg:w-[30%]">
        <div className="w-full border-b-[3px]  mx-auto border-orange-medium flex flex-row items-center py-3 space-x-3 ">
          <MdFilterList
            color="#F29305"
            className="text-[24px] md:text-[20px]"
          />
          <p className=" text-sm text-gray-500 font-semibold">Filtrer par</p>
        </div>
        <div className="w-[90%] mx-auto mt-6">
          {accordionData.map(({ title, content }) => (
            <Accordion key={title} title={title} content={content} />
          ))}
        </div>
      </div>

      <div className=" w-[80%]  mx-auto pb-5">
        <p className=" text-2xl text-silver font-bold mb-10 text-center md:text-left ">{categoryName}</p>
        <div className=" flex flex-row items-center space-x-5 mt-6">
          <div className="m-auto  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {dataFiltered.length > 0 ? (
              dataFiltered.map((item) => <Product data={item} key={item._id} />)
            ) : (
              <div className="w-[full] h-[300px] flex-col flex items-center text-gray-500 font-medium justify-center "> Categorie vide</div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export const getServerSideProps = async () => {
  const productData = await client.fetch(productQuery);

  return {
    props: { productData },
  };
};
