import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';

import Sizes from '../constants/Sizes.constant';
import Colors from '../constants/Colors.constant';
import TextStyles from '../styles/Text.style';
import LayoutStyles from '../styles/Layout.style';

import { useAppSelector } from '../app/hooks';

import Input from '../components/Input.component';
import TaskCard from '../components/TaskCard.component';
import CategoryCard from '../components/CategoryCard.component';
import HomeHeader from '../components/HomeHeader.component';

import UserData from '../data/User.data';
import Priorities from '../data/Priorities.data';

import IconSearch from '../icons/IconSearch.icon';

const HomeScreen = () => {
  const tasks = useAppSelector(state => state.todo.tasks);

  return (
    <ScrollView style={LayoutStyles.layoutScreen}>
      <View style={styles.header}>
        <HomeHeader data={UserData} />

        <Input preIcon={<IconSearch />} placeholder="Search Task" />
      </View>

      <View>
        <Text style={[TextStyles.h3, styles.categoryTitle]}>
          Let's finish your priorities!
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={Priorities}
          keyExtractor={pri => pri.id}
          renderItem={({ item }) => <CategoryCard cat={item} />}
        />
      </View>

      <View style={[styles.taskContainer, LayoutStyles.layoutShadow]}>
        <Text style={[TextStyles.h4, styles.recentTitle]}>Recent Tasks</Text>
        {tasks.map((task, index) => {
          return <TaskCard key={index} task={task} />;
        })}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    marginHorizontal: Sizes.mediumLarge,
  },
  taskContainer: {
    height: '100%',
    backgroundColor: Colors.secondaryLighter,
    marginTop: Sizes.massiveH,
    borderTopLeftRadius: Sizes.massive * 2,
    paddingTop: Sizes.hugerH + Sizes.mediumH,
    paddingHorizontal: Sizes.mediumLarge,
  },
  categoryTitle: {
    marginLeft: Sizes.mediumLarge,
    marginBottom: Sizes.mediumLargeH,
  },
  recentTitle: {
    marginLeft: Sizes.medium,
    marginBottom: Sizes.largeH,
  },
});
