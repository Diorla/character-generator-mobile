import { AsyncStorage } from "react-native";

const initData = async () => {
  try {
    await AsyncStorage.setItem("mydata", JSON.stringify({}));
  } catch (error) {
    console.log("INITIALIZATION ERROR");
    console.log(error);
  }
};

/**
 * Returns the selected data
 * @param {string} container - refers to the screen e.g. characters, stories, outfits
 * @param {string} key - use to trim down the data returned to only that key
 */
const retrieveData = async (container, key) => {
  try {
    const allData = await AsyncStorage.getItem("mydata");
    if (allData) {
      const data = JSON.parse(allData);
      if (container)
        if (data[container]) return data[container];
        else return data;
    } else {
      // mydata doesn't exist
      initData();
    }
    // either mydata or container is empty
    return {};
  } catch (error) {
    console.log("error");
  }
};

/**
 * Returns the newly modified object
 * @param {string} container - refers to the screen e.g. characters, stories, outfits
 * @param {Object} data - all the informations like name, gender, hash
 */
const addData = async (container, data) => {
  const allData = {
    [container]: data
  };
  try {
    await AsyncStorage.mergeItem("mydata", JSON.stringify(allData));
    return retrieveData(container);
  } catch (error) {
    console.log(error);
  }
};

/**
 * Returns the newly modified object
 * @param {string} container - refers to the screen e.g. characters, stories, outfits
 * @param {Object} data - all the informations like name, gender, hash
 */
const deleteData = async (container, data, id) => {
  const allData = retrieveData();
  delete data[id];
  allData[container] = data;
  try {
    await AsyncStorage.setItem("mydata", JSON.stringify(allData));
    return retrieveData(container);
  } catch (error) {
    console.log(error);
  }
};

const manageData = {
  retrieveData,
  addData,
  deleteData
};

export default manageData;
