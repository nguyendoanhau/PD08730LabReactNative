import React,{useState} from "react";
import { ScrollView, Text, FlatList } from "react-native";
import Header from "../Header";
import {styles} from './styles';
import { SafeAreaView } from "react-native-safe-area-context";
import {categories} from "../../../component/data/categories";
import CategoryBox from "../CategoryBox";

const Home= () => {
    const[keyword, setKeyword] =useState(false);
    const renderCategoryItem =({item, index})=>{
        return <CategoryBox title={item?.title} image={item?.image}></CategoryBox>;
    };
    return(
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Header
                showSearch
                onSearch={setKeyword}
                keyword={keyword}
                title="Find All You Nedd"
                />
                <FlatList
                showsHorizontalScrollIndicator={false}
                style={styles.list}
                horizontal
                data={categories}
                renderItem={renderCategoryItem}
                keyExtractor={(item,index) =>String(index)}
                />
            </ScrollView>
        </SafeAreaView>
    );
};
export default React.memo(Home);