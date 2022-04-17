const CategoryButton = (props) => {
  return (
    <button
      className={props.isActive === true ? "activeButton" : "button"}
      onClick={props.onPress}
    >
      {props.categoryName}
    </button>
  );
};

export default CategoryButton;
