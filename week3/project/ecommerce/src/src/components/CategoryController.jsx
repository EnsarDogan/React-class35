import CategoryButton from "./CategoryButton";
import UseMyDataFetching from "../hooks/UseMyDataFetching";

const CategoryController = ({ selectedCategory, setSelectedCategory }) => {
  const { data, isLoading } = UseMyDataFetching(
    "https://fakestoreapi.com/products/categories"
  );
  return (
    <div className="category-container">
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <>
          <CategoryButton
            onPress={() => {
              setSelectedCategory(null);
            }}
            categoryName="All Products"
            isActive={selectedCategory === null}
          />
          {data?.map((category) => (
            <CategoryButton
              onPress={() => {
                setSelectedCategory(category);
              }}
              categoryName={category}
              isActive={category === selectedCategory}
            />
          ))}
        </>
      )}
    </div>
  );
};

// const CategoryController = ({ selectedCategory, setSelectedCategory }) => {
//   const [categories, setCategories] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const getCategory = async () => {
//     const response = await fetch(
//       "https://fakestoreapi.com/products/categories"
//     );
//     if (!response.ok) {
//       throw new Error("Failed to fetch");
//     }
//     const data = await response.json();
//     setCategories(data);
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     getCategory();
//   }, []);
//   return (
//     <div className="category-container">
//       {isLoading ? (
//         <div>Loading</div>
//       ) : (
//         <>
//           <CategoryButton
//             onPress={() => {
//               setSelectedCategory(null);
//             }}
//             categoryName="All Products"
//             isActive={selectedCategory === null}
//           />
//           {categories?.map((category) => (
//             <CategoryButton
//               onPress={() => {
//                 setSelectedCategory(category);
//               }}
//               categoryName={category}
//               isActive={category === selectedCategory}
//             />
//           ))}
//         </>
//       )}
//     </div>
//   );
// };
export default CategoryController;
