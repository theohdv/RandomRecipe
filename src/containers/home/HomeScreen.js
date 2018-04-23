import React, { Component } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  Button,
  Alert,
  TouchableHighlight
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../actions";
import I18n from "../../internationalization";
import styles from "./style";
import LoadingModal from "../../components/loading-modal";

const INGREDIENTS_MAX = 3;

class HomeScreen extends Component {
  state = {
    ingredients: [],
    ingredientValue: ""
  };

  static navigationOptions = ({ navigation, screenProps }) => ({
    headerTitle: <Text style={styles.header_title}>{I18n.t("app_name")}</Text>
  });

  _addIngredient = () => {
    let ingredients = this.state.ingredients;
    let ingredientValue = this.state.ingredientValue.trim();

    if (ingredients.length === INGREDIENTS_MAX) {
      Alert.alert(I18n.t("to_many_ingredients"));
      return;
    }
    if (!ingredientValue) {
      Alert.alert(I18n.t("empty_msg"));
      return;
    }
    if (ingredients.indexOf(ingredientValue) > -1) {
      Alert.alert(I18n.t("already_exist"));
      return;
    }

    ingredients.push(ingredientValue);
    this.setState({ ingredients, ingredientValue: "" });
  };

  _removeIngredient = ing => {
    const ingredients = this.state.ingredients.filter(
      ingredient => ingredient !== ing
    );
    this.setState({ ingredients });
  };

  _search = async () => {
    try {
      const response = await this.props.fetchRecipes(this.state.ingredients);
      if (response.results.length === 0) {
        setTimeout(() => {
          Alert.alert(I18n.t("no_results"));
        }, 100);
        return;
      } else {
        this.props.navigation.navigate("RecipesScreen");
      }
    } catch (e) {
      console.log(e)
      setTimeout(() => {
        Alert.alert(I18n.t("error"));
      }, 100);
    }
  };

  render() {
    const { recipes } = this.props;
    const ingredients = this.state.ingredients;

    return (
      <SafeAreaView style={styles.screen_container}>
        <View style={styles.header}>
          <Image
            source={require("../../assets/food.png")}
            style={styles.logo}
          />
          <Text style={styles.welcome_msg}>{I18n.t("welcome_msg")}</Text>
          <Text style={styles.desc_msg}>{I18n.t("desc_msg")}</Text>
        </View>
        <View style={styles.content}>
          <Text>{`${ingredients.length}/${INGREDIENTS_MAX}`}</Text>
          <TextInput
            maxLength={20}
            style={styles.ingredient_input}
            value={this.state.ingredientValue}
            onChangeText={value => {
              this.setState({ ingredientValue: value });
            }}
          />
          <View style={styles.row_container}>
            <Button title={I18n.t("add")} onPress={this._addIngredient} />
            <Button title={I18n.t("search")} onPress={this._search} />
          </View>
          <View style={styles.row_container}>
            {ingredients.map(ingredient => {
              return (
                <TouchableHighlight
                  key={ingredient}
                  style={styles.ingredient}
                  onPress={() => {
                    this._removeIngredient(ingredient);
                  }}
                >
                  <Text>{ingredient}</Text>
                </TouchableHighlight>
              );
            })}
          </View>
        </View>
        <LoadingModal visible={recipes.is_requesting} />
        <Text style={styles.api}>{I18n.t("api")}</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
