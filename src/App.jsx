import { React, useState } from "react";
import { SafeAreaView, View, Text, FlatList, StyleSheet } from "react-native";
import dataJson from "./Data/data.json";
import SongCard from "./components/SongCard";
import SearchBar from "./components/SearchBar";

const App = () => {

  const [musicList, setMusicList] = useState(dataJson);

  const renderMusics = ({item}) => {
    return <SongCard song={item} />
  }
  
  const renderSeperator = () => <View style={styles.seperator} />
  // flex: Tüm ekranı kaplamasını sağlar.

  const handleSearch = (text) => {

    const filteredMusicList = dataJson.filter(song => {
      const searchedTitle = text.toLowerCase(); 
      const currentTitle  = song.title.toLowerCase();

      const currentArtist = song.artist.toLowerCase();

      return currentTitle.indexOf(searchedTitle) > -1 || currentArtist.indexOf(searchedTitle) > -1;
    });

    setMusicList(filteredMusicList);

  }

  return(
  <SafeAreaView style={styles.container}>
    <View style={styles.container}>

      <SearchBar OnSearch={handleSearch} />

      <FlatList
        data={musicList}
        renderItem={renderMusics}
        ItemSeparatorComponent={renderSeperator}
      />

    </View>
  </SafeAreaView>
    
  );
}

export default App;

const styles = StyleSheet.create({
  
  container: {
    flex: 1
  },
  seperator: {
    borderWidth: 1,
    borderColor: '#e0e0e0'
  }

})