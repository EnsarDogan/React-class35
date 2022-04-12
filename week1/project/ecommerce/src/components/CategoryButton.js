const CategoryButton = (props) => {
  return <button 
  className="button"
  onClick={props.onPress}
  >
    {props.categoryName}
  </button>;
};

export default CategoryButton;
