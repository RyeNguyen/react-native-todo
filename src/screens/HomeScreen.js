import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, { useEffect } from 'react';

import Sizes from '../constants/Sizes.constant';
import Colors from '../constants/Colors.constant';
import TextStyles from '../styles/Text.style';
import LayoutStyles from '../styles/Layout.style';

import { useAppSelector, useAppDispatch } from '../app/hooks';
import { getTasks } from '../features/todo/todoSlice';

import Input from '../components/Input.component';
import TaskCard from '../components/TaskCard.component';
import CategoryCard from '../components/CategoryCard.component';
import HomeHeader from '../components/HomeHeader.component';

import UserData from '../data/User.data';
import Priorities from '../data/Priorities.data';

import IconSearch from '../icons/IconSearch.icon';
import IconArrowRight from '../icons/IconArrowRight.icon';
import IconEmpty from '../icons/IconEmpty.icon';

const HomeScreen = ({ navigation }) => {
  const tasks = useAppSelector(state => state.todo.tasks.slice(0, 5));
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <ScrollView style={LayoutStyles.layoutScreen}>
      <ImageBackground
        source={require('../../assets/images/img-background-plant.jpg')}
        style={[LayoutStyles.layoutShadow, styles.header]}
        imageStyle={{ borderRadius: Sizes.mediumLarge }}
        blurRadius={10}>
        <View style={styles.headerInner}>
          <HomeHeader data={UserData} />

          <Input preIcon={<IconSearch />} placeholder="Search Task" />
        </View>
      </ImageBackground>

      <View>
        <Text style={[TextStyles.h3, styles.categoryTitle]}>
          Your priorities!
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
        <View style={styles.recentHeader}>
          <Text style={[TextStyles.h3, styles.recentTitle]}>Recent Tasks</Text>

          <TouchableOpacity
            style={styles.recentLink}
            onPress={() => navigation.navigate('TaskList')}>
            <Text style={[TextStyles.textSmall, styles.recentLinkText]}>
              See All
            </Text>
            <IconArrowRight />
          </TouchableOpacity>
        </View>

        {tasks.length === 0 ? (
          <View style={styles.emptySection}>
            <IconEmpty />
            <Text style={TextStyles.textMain}>
              Hooray! There's no tasks right now.
            </Text>
          </View>
        ) : (
          tasks.map((task, index) => {
            return <TaskCard key={index} task={task} />;
          })
        )}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    marginHorizontal: Sizes.mediumLarge,
    marginTop: Sizes.mediumLargeH,
    marginBottom: Sizes.massiveH,
  },
  headerInner: {
    paddingHorizontal: Sizes.medium,
    backgroundColor: Colors.primaryBlur,
    borderRadius: Sizes.mediumLarge,
  },
  taskContainer: {
    backgroundColor: Colors.secondaryLighter,
    marginTop: Sizes.massiveH,
    borderTopLeftRadius: Sizes.massive * 2,
    paddingTop: Sizes.hugerH + Sizes.mediumH,
    paddingHorizontal: Sizes.huger,
  },
  categoryTitle: {
    marginLeft: Sizes.mediumLarge,
    marginBottom: Sizes.mediumLargeH,
  },
  recentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Sizes.hugerH,
  },
  recentLink: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  recentLinkText: {
    marginRight: Sizes.smallest,
  },
  recentTitle: {
    marginLeft: Sizes.medium,
  },
  emptySection: {
    alignItems: 'center',
    marginBottom: Sizes.hugerH,
  },
});
