const CategoryButton = ({ isActive, onPress, categoryName }) => {
  return (
    <button
      className={isActive === true ? "activeButton" : "button"}
      onClick={onPress}
    >
      {categoryName}
    </button>
  );
};

export default CategoryButton;
