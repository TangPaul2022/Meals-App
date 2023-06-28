import { FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-Data";
import CategoryGridTile from "../components/CategoryGridTile";


const CategoriesScreen = ({navigation}) => {
 const renderCategoryItem = (itemData) => {
  const pressHandler = () => {
    navigation.navigate('Meals Overview', {
      categoryId: itemData.item.id,
    });
  }

    return (
      <CategoryGridTile 
        title={itemData.item.title} 
        color={itemData.item.color} 
        onPressCat={pressHandler}
      />
    );
}


    return (
     <FlatList
       data={CATEGORIES} 
       key={(item) => item.id} 
       renderItem={renderCategoryItem} 
       numColumns={2}
     />
    );
}

export default CategoriesScreen;