import React, { Component } from "react";
import {
  SafeAreaView,
  Text,
  ScrollView,
  Image,
  View,
  TouchableHighlight,
  Linking
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../actions";
import I18n from "../../internationalization";
import styles from "./style";

class RecipesScreen extends Component {
  state = {
    ingredients: [],
    ingredientValue: ""
  };

  static navigationOptions = ({ navigation, screenProps }) => ({
    headerTitle: <Text style={styles.header_title}>{I18n.t("recipes")}</Text>
  });

  _openRecipe = recipe => {
    Linking.openURL(recipe.href);
  };

  render() {
    const { recipes } = this.props;
    console.log(recipes);
    return (
      <SafeAreaView style={styles.screen_container}>
        <ScrollView>
          {recipes.list.map(recipe => {
            return (
              <TouchableHighlight
                key={recipe.title}
                onPress={() => {
                  this._openRecipe(recipe);
                }}
              >
                <View style={styles.recipe_item}>
                  <Image
                    style={styles.thumbnail}
                    source={{ uri: recipe.thumbnail }}
                  />
                  <View style={styles.desc_content}>
                    <Text>{recipe.title}</Text>
                    <Text style={styles.ingredients_desc}>
                      {recipe.ingredients}
                    </Text>
                  </View>
                </View>
              </TouchableHighlight>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesScreen);
