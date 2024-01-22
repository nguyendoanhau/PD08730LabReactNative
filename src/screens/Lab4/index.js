import React from "react";
import{Text, View, FlatList, Image} from 'react-native';
import {styles} from './styles';
const DATA=[
    {
    id:'1',
    title:'Data Structures',
    imageSource:require('../../assets/image/ronando.png')
},
{
    id:'2',
    title:'Data Structures',
    imageSource:require('../../assets/image/ronando.png')
},
{
    id:'3',
    title:'Data Structures',
    imageSource:require('../../assets/image/ronando.png')
},
{
    id:'4',
    title:'Data Structures',
    imageSource:require('../../assets/image/ronando.png')
},
{
    id:'5',
    title:'Data Structures',
    imageSource:require('../../assets/image/ronando.png')
},
{
    id:'6',
    title:'Data Structures',
    imageSource:require('../../assets/image/ronando.png')
},
{
    id:'7',
    title:'Data Structures',
    imageSource:require('../../assets/image/ronando.png')
},
{
    id:'8',
    title:'Data Structures',
    imageSource:require('../../assets/image/ronando.png')
},
];
const Item=({title,imageSource})=> {
    return (
        <View style={styles.item}>
            <Image source={imageSource} style={styles.avatar}></Image>
            <Text style={styles.text}>{title}</Text>
        </View>
        );
};
const renderItem=({item})=>(
    <Item imageSource={item.imageSource} title={item.title}/>
);

const ListCourse = () => {
    return(
        <View style={styles.container}></View>
    )
}